import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import mainContext from '../../context'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {
  MainBody,
  VideosSection,
  TrendingHeader,
  Trendinghead,
  GamingVideos,
  GamingVideo,
  GamingImg,
  GamingDetails,
  GamingVideoTitle,
  GamingVideoP,
} from '../../styledComponent'

const apiStatus = {
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
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
    const url = `https://apis.ccbp.in/videos/gaming`
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const videosList = data.videos.map(each => ({
        id: each.id,
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
      <GamingVideos type="none">
        {videosList.map(each => (
          <Link
            to={`/videos/${each.id}`}
            style={{
              textDecoration: 'none',
              color: 'blue',
              fontSize: '18px',
              display: 'block',
              width: '30%',
            }}
          >
            <GamingVideo key={each.id} light={light}>
              <GamingImg src={each.thumbnailUrl} />
              <GamingDetails>
                <div>
                  <GamingVideoTitle light={light}>
                    {each.title}
                  </GamingVideoTitle>
                  <GamingVideoP>
                    {each.viewCount} Watching Worldwide
                  </GamingVideoP>
                </div>
              </GamingDetails>
            </GamingVideo>
          </Link>
        ))}
      </GamingVideos>
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
                    <SiYoutubegaming
                      size={50}
                      color="#ff0b37"
                      style={{
                        backgroundColor: '#d7dfe9',
                        padding: '10px',
                        borderRadius: '30px',
                        marginTop: '10px',
                      }}
                    />
                    <Trendinghead light={light}>Gaming</Trendinghead>
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

export default Gaming
