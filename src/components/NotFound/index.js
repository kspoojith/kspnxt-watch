import {Component} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {MainBody, VideosSection} from '../../styledComponent'

class NotFound extends Component {
  renderVideos = () => (
    <div style={{textAlign: 'center', padding: '20px'}}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="no saved videos"
        style={{width: '300px'}}
      />
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found.</p>
    </div>
  )

  render() {
    return (
      <div>
        <Navbar />
        <MainBody>
          <SideBar />
          <VideosSection>{this.renderVideos()}</VideosSection>
        </MainBody>
      </div>
    )
  }
}

export default NotFound
