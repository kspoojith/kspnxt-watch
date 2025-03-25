import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'
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
  Videos,
  LostImg,
  LostCon,
  Losthead,
  LostP,
  LostBtn,
} from '../../styledComponent'

const apiStatus = {
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
  failure: 'FAILURE',
  empty: 'EMPTY',
}

class Home extends Component {
  state = {
    bannerVisible: true,
    videosList: [],
    searchInput: '',
    status: apiStatus.inprogress,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  toggleBanner = () => {
    this.setState(prev => ({bannerVisible: !prev.bannerVisible}))
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
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      if (data.videos.length === 0) {
        this.setState({status: apiStatus.empty})
      } else {
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
      }
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderSuccess = () => {
    const {videosList} = this.state
    return (
      <Videos type="none">
        {videosList.map(each => (
          <VideoItem details={each} key={each.id} />
        ))}
      </Videos>
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
    <LostCon>
      <LostImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
      <Losthead>Oops! Something Went Wrong</Losthead>
      <LostP>
        We are having some trouble to complete your request. Please try again.
      </LostP>
      <LostBtn type="button" onClick={this.fetchVideos}>
        retry
      </LostBtn>
    </LostCon>
  )

  renderEmpty = light => (
    <LostCon>
      <LostImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
        alt="no videos"
      />
      <Losthead light={light}>No Search results found</Losthead>
      <LostP light={light}>
        Try different key words or remove search filter
      </LostP>
      <LostBtn type="button" onClick={this.fetchVideos}>
        Retry
      </LostBtn>
    </LostCon>
  )

  renderVideoSection = light => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.renderSuccess()

      case apiStatus.inprogress:
        return this.renderLoading()

      case apiStatus.failure:
        return this.renderFailure()
      case apiStatus.empty:
        return this.renderEmpty(light)

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
                  {bannerVisible ? (
                    <Banner>
                      <BannerHead>
                        <Logo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                        <IoIosClose
                          size={25}
                          style={{marginRight: '20px'}}
                          onClick={this.toggleBanner}
                        />
                      </BannerHead>
                      <BannerPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerPara>
                      <BannerBtn>GET IT NOW</BannerBtn>
                    </Banner>
                  ) : null}
                  <InputSection>
                    <VideoInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={e =>
                        this.setState({searchInput: e.target.value})
                      }
                      light={light}
                    />
                    <SearchBtn onClick={this.fetchVideos}>
                      <IoMdSearch
                        style={{color: light ? '#313131' : '#909090'}}
                      />
                    </SearchBtn>
                  </InputSection>
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

export default Home
