import React from 'react'

const mainContext = React.createContext({
  light: '',
  activePageId: '',
  pages: [],
  themeChange: () => {},
  activePageChange: () => {},
  savedList: [],
  addToPlayList: () => {},
})

export default mainContext
