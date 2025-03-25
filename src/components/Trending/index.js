import Loader from 'react-loader-spinner'
import {formatDistanceToNowStrict, parse} from 'date-fns'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillFire} from 'react-icons/ai'
import {IoIosClose, IoMdSearch} from 'react-icons/io'
import mainContext from '../../context'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import {
  MainBody,
  VideosSection,
  Banner,
  BannerHead,
  BannerBtn,
  Logo,
  BannerPara,
  VideoInput,
  InputSection,
  SearchBtn,
  TrendingVideos,
  TrendingHeader,
  Trendinghead,
  Video,
  VideoImg,
  VideoDetails,
  VideoProfile,
  VideoTitle,
  VideoP,
  TrendingVideo,
  TrendingImg,
  TrendingDetails,
  TrendingVideoTitle,
  TrendingVideoP,
  TrendingVideoProfile,
} from '../../styledComponent'

const apiStatus = {
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    videosList: [],
    status: apiStatus.inprogress,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({status: apiStatus.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const url = `https://apis.ccbp.in/videos/trending`
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const videosList = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({status: apiStatus.success, videosList})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderSuccess = light => {
    const {videosList} = this.state
    return (
      <TrendingVideos type="none">
        {videosList.map(each => {
          const publishedDateString = each.publishedAt
          const publishedDate = parse(
            publishedDateString,
            'MMM d, yyyy',
            new Date(),
          )
          const timeAgo = formatDistanceToNowStrict(publishedDate, {
            addSuffix: true,
          })
          return (
            <Link
              to={`/videos/${each.id}`}
              style={{
                textDecoration: 'none',
                color: 'blue',
                fontSize: '18px',
                width: '100%',
              }}
            >
              <TrendingVideo key={each.id}>
                <TrendingImg src={each.thumbnailUrl} />
                <TrendingDetails>
                  <TrendingVideoProfile src={each.channel.profileImageUrl} />
                  <div>
                    <TrendingVideoTitle light={light}>
                      {each.title}
                    </TrendingVideoTitle>
                    <TrendingVideoP>{each.channel.name}</TrendingVideoP>
                    <TrendingVideoP>
                      {each.viewCount} views . {timeAgo}
                    </TrendingVideoP>
                  </div>
                </TrendingDetails>
              </TrendingVideo>
            </Link>
          )
        })}
      </TrendingVideos>
    )
  }

  renderLoading = () => (
    <div
      className="loader-container"
      data-testid="loader"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <div>
      <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" onClick={this.fetchVideos}>
        retry
      </button>
    </div>
  )

  renderVideoSection = light => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.renderSuccess(light)

      case apiStatus.inprogress:
        return this.renderLoading()

      case apiStatus.failure:
        return this.renderFailure()

      default:
        return null
    }
  }

  render() {
    const {bannerVisible, searchInput, videosList} = this.state
    return (
      <mainContext.Consumer>
        {value => {
          const {light} = value
          return (
            <div>
              <Navbar />
              <MainBody>
                <SideBar />
                <VideosSection light={light}>
                  <TrendingHeader light={light}>
                    <AiFillFire
                      size={50}
                      color="#ff0b37"
                      style={{
                        backgroundColor: light ? '#d7dfe9' : 'black',
                        padding: '10px',
                        borderRadius: '30px',
                        marginTop: '10px',
                      }}
                    />
                    <Trendinghead light={light}>Trending</Trendinghead>
                  </TrendingHeader>
                  {this.renderVideoSection(light)}
                </VideosSection>
              </MainBody>
            </div>
          )
        }}
      </mainContext.Consumer>
    )
  }
}

export default Trending
