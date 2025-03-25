import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import mainContext from './context'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

const pages = [
  {id: 1, displayText: 'Home', path: '/'},
  {
    id: 2,
    displayText: 'Trending',
    path: '/videos/trending',
  },
  {
    id: 3,
    displayText: 'Gaming',
    path: '/videos/gaming',
  },
  {
    id: 4,
    displayText: 'Saved Videos',
    path: '/videos/saved-videos',
  },
]

class App extends Component {
  state = {activePageId: 1, light: true, savedList: []}

  themeChange = () => {
    console.log('theme changed')
    this.setState(prev => ({light: !prev.light}))
  }

  activePageChange = id => {
    const {history} = this.props
    const page = pages.find(each => each.id === id)

    if (page) {
      this.setState({activePageId: id})
      history.push(page.path)
    }
  }

  addToPlayList = data => {
    this.setState(prev => {
      const alreadySaved = prev.savedList.some(video => video.id === data.id)
      if (!alreadySaved) {
        return {savedList: [...prev.savedList, data]}
      }
      return null
    })
  }

  render() {
    const {activePageId, light, savedList} = this.state
    return (
      <mainContext.Provider
        value={{
          activePageId,
          light,
          pages,
          themeChange: this.themeChange,
          activePageChange: this.activePageChange,
          savedList,
          addToPlayList: this.addToPlayList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/trending" component={Trending} />
          <ProtectedRoute exact path="/videos/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/saved-videos"
            component={SavedVideos}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </mainContext.Provider>
    )
  }
}

export default withRouter(App)
