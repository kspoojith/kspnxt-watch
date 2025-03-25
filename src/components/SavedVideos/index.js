import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict, parse} from 'date-fns'
import {Component} from 'react'
import {IoSaveSharp} from 'react-icons/io5'
import mainContext from '../../context'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {
  MainBody,
  VideosSection,
  TrendingVideos,
  TrendingHeader,
  Trendinghead,
  TrendingVideo,
  TrendingImg,
  TrendingDetails,
  TrendingVideoTitle,
  TrendingVideoP,
  TrendingVideoProfile,
} from '../../styledComponent'

class SavedVideos extends Component {
  renderVideos = (savedList, light) => {
    if (savedList.length === 0) {
      return (
        <div style={{textAlign: 'center', padding: '20px'}}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            style={{width: '300px'}}
          />
          <h1 style={{color: light ? '#0f0f0f' : 'white'}}>
            No saved videos found
          </h1>
          <p style={{color: light ? '#0f0f0f' : 'white'}}>
            You can save videos while watching them
          </p>
        </div>
      )
    }
    return (
      <TrendingVideos type="none">
        {savedList.map(each => {
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
              key={each.id}
              style={{
                textDecoration: 'none',
                color: 'blue',
                fontSize: '18px',
                width: '100%',
              }}
            >
              <TrendingVideo light={light}>
                <TrendingImg src={each.thumbnailUrl} alt={each.title} />
                <TrendingDetails>
                  <TrendingVideoProfile
                    src={each.channel.profileImageUrl}
                    alt={each.channel.name}
                  />
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

  render() {
    return (
      <mainContext.Consumer>
        {value => {
          const {savedList, light} = value
          return (
            <div>
              <Navbar />
              <MainBody>
                <SideBar />
                <VideosSection light={light}>
                  <TrendingHeader light={light}>
                    <IoSaveSharp
                      size={50}
                      color="#ff0b37"
                      style={{
                        backgroundColor: '#d7dfe9',
                        padding: '10px',
                        borderRadius: '30px',
                        marginTop: '10px',
                      }}
                    />
                    <Trendinghead light={light}>Saved Videos</Trendinghead>
                  </TrendingHeader>
                  {this.renderVideos(savedList, light)}
                </VideosSection>
              </MainBody>
            </div>
          )
        }}
      </mainContext.Consumer>
    )
  }
}

export default SavedVideos
