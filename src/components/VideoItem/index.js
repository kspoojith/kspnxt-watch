import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict, parse} from 'date-fns'
import mainContext from '../../context'
import {
  Video,
  VideoImg,
  VideoDetails,
  VideoProfile,
  VideoTitle,
  VideoP,
} from '../../styledComponent'

const VideoItem = props => {
  const {details} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  const publishedDateString = publishedAt
  const publishedDate = parse(publishedDateString, 'MMM d, yyyy', new Date())
  const timeAgo = formatDistanceToNowStrict(publishedDate, {addSuffix: true})
  return (
    <mainContext.Consumer>
      {value => {
        const {light} = value
        return (
          <Video>
            <Link
              to={`/videos/${id}`}
              style={{
                textDecoration: 'none',
                color: 'blue',
                fontSize: '18px',
                display: 'flex', // Ensure it behaves properly in a flex container
                flexDirection: 'column', // Keep content structured
                width: '100%', // Prevent layout shifts
              }}
            >
              <VideoImg src={thumbnailUrl} />
              <VideoDetails>
                <VideoProfile src={channel.profileImageUrl} />
                <div>
                  <VideoTitle light={light}>{title}</VideoTitle>
                  <VideoP light={light}>{channel.name}</VideoP>
                  <VideoP light={light}>
                    {viewCount} views . {timeAgo}
                  </VideoP>
                </div>
              </VideoDetails>
            </Link>
          </Video>
        )
      }}
    </mainContext.Consumer>
  )
}

export default VideoItem
