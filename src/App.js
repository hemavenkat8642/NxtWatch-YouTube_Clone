import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoContext from './context/VideoContext'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    const savedTheme = JSON.parse(localStorage.getItem('darkTheme'))
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || []
    const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || []
    const unLikedVideos =
      JSON.parse(localStorage.getItem('unLikedVideos')) || []

    this.state = {
      savedVideos,
      likedVideos,
      unLikedVideos,
      darkTheme: savedTheme || false,
      activeTabId: 'home',
    }
  }

  saveVideo = video => {
    const {savedVideos} = this.state

    const savedVideo = savedVideos.find(each => each.id === video.id)

    if (savedVideo !== undefined) {
      const newList = savedVideos.filter(each => each.id !== video.id)
      this.setState({savedVideos: newList}, () => {
        localStorage.setItem('savedVideos', JSON.stringify(newList))
      })
    } else {
      const newList = [...savedVideos, video]
      this.setState({savedVideos: newList}, () => {
        localStorage.setItem('savedVideos', JSON.stringify(newList))
      })
    }
  }

  likeVideo = video => {
    const {likedVideos, unLikedVideos} = this.state

    const likedVideo = likedVideos.find(each => each.id === video.id)
    const unLikedVideo = unLikedVideos.find(each => each.id === video.id)

    if (likedVideo !== undefined) {
      const newList = likedVideos.filter(each => each.id !== video.id)
      this.setState({likedVideos: newList}, () => {
        localStorage.setItem('likedVideos', JSON.stringify(newList))
      })
    } else {
      const newList = [...likedVideos, video]
      this.setState({likedVideos: newList}, () => {
        localStorage.setItem('likedVideos', JSON.stringify(newList))
      })
    }
    if (unLikedVideo !== undefined) {
      const newUnLikedList = unLikedVideos.filter(each => each.id !== video.id)
      this.setState({unLikedVideos: newUnLikedList}, () => {
        localStorage.setItem('unLikedVideos', JSON.stringify(newUnLikedList))
      })
    }
  }

  unLikeVideo = video => {
    const {likedVideos, unLikedVideos} = this.state

    const likedVideo = likedVideos.find(each => each.id === video.id)
    const unLikedVideo = unLikedVideos.find(each => each.id === video.id)

    if (unLikedVideo !== undefined) {
      const newList = unLikedVideos.filter(each => each.id !== video.id)
      this.setState({unLikedVideos: newList}, () => {
        localStorage.setItem('unLikedVideos', JSON.stringify(newList))
      })
    } else {
      const newList = [...unLikedVideos, video]
      this.setState({unLikedVideos: newList}, () => {
        localStorage.setItem('unLikedVideos', JSON.stringify(newList))
      })
    }
    if (likedVideo !== undefined) {
      const newLikedList = likedVideos.filter(each => each.id !== video.id)
      this.setState({likedVideos: newLikedList}, () => {
        localStorage.setItem('likedVideos', JSON.stringify(newLikedList))
      })
    }
  }

  changeTheme = () => {
    this.setState(prev => {
      const newTheme = !prev.darkTheme
      localStorage.setItem('darkTheme', JSON.stringify(newTheme))
      return {darkTheme: newTheme}
    })
  }

  setActiveTabId = value => {
    this.setState({activeTabId: value})
  }

  render() {
    const {
      savedVideos,
      likedVideos,
      unLikedVideos,
      darkTheme,
      activeTabId,
    } = this.state

    return (
      <VideoContext.Provider
        value={{
          savedVideos,
          likedVideos,
          unLikedVideos,
          darkTheme,
          activeTabId,
          changeTheme: this.changeTheme,
          saveVideo: this.saveVideo,
          likeVideo: this.likeVideo,
          unLikeVideo: this.unLikeVideo,
          setActiveTabId: this.setActiveTabId,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </VideoContext.Provider>
    )
  }
}

export default App
