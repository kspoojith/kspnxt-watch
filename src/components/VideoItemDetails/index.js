import './index.css'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import {IoIosClose, IoMdSearch} from 'react-icons/io'
import mainContext from '../../context'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import {
  MainBody,
  VideosSection,
  VideoItemCon,
  VideoUser,
  Reactions,
  IconBtn,
  VideoDescription,
  VideoItemProfile,
  VideoBio,
  VideoItemTitle,
  VideoItemP,
} from '../../styledComponent'

const apiStatus = {
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    status: apiStatus.inprogress,
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({status: apiStatus.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const videoDetails = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({status: apiStatus.success, videoDetails})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  onLiked = () => {
    const {liked, disliked} = this.state
    if (liked === disliked || liked === true) {
      this.setState(prev => ({liked: !prev.liked}))
    } else {
      this.setState(prev => ({liked: !prev.liked, disliked: !prev.disliked}))
    }
  }

  onDisliked = () => {
    const {liked, disliked} = this.state
    if (liked === disliked || disliked === true) {
      this.setState(prev => ({disliked: !prev.disliked}))
    } else {
      this.setState(prev => ({liked: !prev.liked, disliked: !prev.disliked}))
    }
  }

  renderSuccess = (addToPlayList, light) => {
    const {videoDetails, liked, disliked, saved} = this.state
    return (
      <VideosSection light={light}>
        <VideoItemCon>
          <div className="player-wrapper">
            <ReactPlayer
              url={videoDetails.videoUrl}
              className="react-player"
              width="100%"
              height="100%"
              controls
            />
          </div>
          <VideoItemTitle light={light}>{videoDetails.title}</VideoItemTitle>
          <VideoUser>
            <VideoItemP light={light}>
              {videoDetails.viewCount} views .
            </VideoItemP>
            <Reactions>
              <IconBtn onClick={this.onLiked}>
                <AiOutlineLike
                  size={20}
                  style={
                    light
                      ? {
                          color: liked ? ' #3b82f6' : 'black',
                        }
                      : {
                          color: liked ? '#3b82f6' : 'white',
                        }
                  }
                />
                <p
                  style={
                    light
                      ? {
                          color: liked ? ' #3b82f6' : 'black',
                          fontSize: '17px',
                          marginLeft: '3px',
                        }
                      : {
                          color: liked ? ' #3b82f6' : 'white',
                          fontSize: '17px',
                          marginLeft: '3px',
                        }
                  }
                >
                  Like
                </p>
              </IconBtn>
              <IconBtn onClick={this.onDisliked}>
                <AiOutlineDislike
                  size={20}
                  style={
                    light
                      ? {
                          color: disliked ? ' #3b82f6' : 'black',
                        }
                      : {
                          color: disliked ? '#3b82f6' : 'white',
                        }
                  }
                />
                <p
                  style={
                    light
                      ? {
                          color: disliked ? ' #3b82f6' : 'black',
                          fontSize: '17px',
                          marginLeft: '3px',
                        }
                      : {
                          color: disliked ? ' #3b82f6' : 'white',
                          fontSize: '17px',
                          marginLeft: '3px',
                        }
                  }
                >
                  Dislike
                </p>
              </IconBtn>
              <IconBtn
                onClick={() => {
                  this.setState({saved: true})
                  addToPlayList(videoDetails)
                }}
              >
                <CgPlayListAdd
                  size={20}
                  style={
                    light
                      ? {
                          color: saved ? '#c5a001' : 'black',
                        }
                      : {
                          color: saved ? '#c5a001' : 'white',
                        }
                  }
                />
                <p
                  style={
                    light
                      ? {
                          color: saved ? '#c5a001' : 'black',
                          fontSize: '17px',
                          marginLeft: '3px',
                        }
                      : {
                          color: saved ? '#c5a001' : 'white',
                          fontSize: '17px',
                          marginLeft: '3px',
                        }
                  }
                >
                  {saved ? 'Saved' : 'Save'}
                </p>
              </IconBtn>
            </Reactions>
          </VideoUser>
          <hr />
          <VideoDescription>
            <VideoItemProfile src={videoDetails.channel.profileImageUrl} />
            <VideoBio>
              <VideoItemTitle light={light}>
                {videoDetails.channel.name}
              </VideoItemTitle>
              <VideoItemP>
                {videoDetails.channel.subscriberCount} subscribers
              </VideoItemP>
              <p style={{color: light ? '#212121' : '#f4f4f4'}}>
                {videoDetails.description}
              </p>
            </VideoBio>
          </VideoDescription>
        </VideoItemCon>
      </VideosSection>
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

  renderVideoSection = (addToPlayList, light) => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.renderSuccess(addToPlayList, light)

      case apiStatus.inprogress:
        return this.renderLoading()

      case apiStatus.failure:
        return this.renderFailure()

      default:
        return null
    }
  }

  render() {
    const {videosList} = this.state
    return (
      <mainContext.Consumer>
        {value => {
          const {light, addToPlayList} = value
          return (
            <div>
              <Navbar />
              <MainBody>
                <SideBar />
                <VideosSection light={light}>
                  {this.renderVideoSection(addToPlayList, light)}
                </VideosSection>
              </MainBody>
            </div>
          )
        }}
      </mainContext.Consumer>
    )
  }
}

export default VideoItemDetails
