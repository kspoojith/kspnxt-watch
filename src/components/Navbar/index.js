import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdLogOut, IoMdHome} from 'react-icons/io'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import Popup from 'reactjs-popup'
import mainContext from '../../context'
import {
  SmallNav,
  BigNav,
  Logo,
  PopupContainer,
  CloseButton,
  MenuItem,
  MenuList,
  BigLogo,
  Profilepic,
  BigNavItems,
  LogoutBtn,
  Button,
  PopDiv,
  PopupP,
  PopupBtn,
  PopBackdrop,
  ButtonContainer,
} from '../../styledComponent'

import 'reactjs-popup/dist/index.css'

class Navbar extends Component {
  render() {
    return (
      <mainContext.Consumer>
        {value => {
          const {
            light,
            pages,
            themeChange,
            activePageChange,
            activePageId,
          } = value
          const renderIcon = id => {
            if (id === 1) {
              return (
                <IoMdHome
                  color={activePageId === 1 ? '#ff0b37' : '#7e858e'}
                  size={20}
                  style={{marginRight: '10px'}}
                />
              )
            }
            if (id === 2) {
              return (
                <AiFillFire
                  color={activePageId === 2 ? '#ff0b37' : '#7e858e'}
                  size={20}
                  style={{marginRight: '10px'}}
                />
              )
            }
            if (id === 3) {
              return (
                <SiYoutubegaming
                  color={activePageId === 3 ? '#ff0b37' : '#7e858e'}
                  size={20}
                  style={{marginRight: '10px'}}
                />
              )
            }
            return (
              <CgPlayListAdd
                color={activePageId === 4 ? '#ff0b37' : '#7e858e'}
                size={20}
                style={{marginRight: '10px'}}
              />
            )
          }
          const logout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            activePageChange(1)
            history.replace('/login')
          }
          return (
            <div>
              <SmallNav light={light}>
                <Logo
                  src={
                    light
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                />
                <div>
                  <Button
                    type="button"
                    onClick={() => {
                      themeChange()
                    }}
                  >
                    {light ? (
                      <FaMoon
                        size={25}
                        style={{marginRight: '15px', marginTop: '3px'}}
                      />
                    ) : (
                      <FiSun
                        size={25}
                        style={{
                          marginRight: '15px',
                          marginTop: '3px',
                          color: 'white',
                        }}
                      />
                    )}
                  </Button>
                  <Popup
                    trigger={
                      <button
                        type="button"
                        style={{background: 'none', border: 'none'}}
                      >
                        <GiHamburgerMenu
                          size={25}
                          style={{
                            marginRight: '15px',
                            marginTop: '3px',
                            color: light ? 'black' : 'white',
                          }}
                        />
                      </button>
                    }
                    position="right center"
                    modal
                    lockScroll
                  >
                    {close => (
                      <PopupContainer
                        style={{backgroundColor: light ? 'white' : 'black'}}
                      >
                        <CloseButton
                          onClick={close}
                          style={{color: light ? 'black' : 'white'}}
                        >
                          &times;
                        </CloseButton>
                        <MenuList type="none">
                          {pages.map(each => (
                            <MenuItem
                              onClick={() => {
                                activePageChange(each.id)
                              }}
                            >
                              {renderIcon(each.id)}
                              <p
                                style={
                                  light
                                    ? {
                                        color:
                                          activePageId === each.id
                                            ? ' #313131'
                                            : '#7e858e',
                                      }
                                    : {
                                        color:
                                          activePageId === each.id
                                            ? ' white'
                                            : '#7e858e',
                                      }
                                }
                              >
                                {each.displayText}
                              </p>
                            </MenuItem>
                          ))}
                        </MenuList>
                      </PopupContainer>
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <button
                        type="button"
                        style={{background: 'none', border: 'none'}}
                      >
                        <IoMdLogOut
                          size={25}
                          style={{
                            marginTop: '3px',
                            marginRight: '7px',
                            color: light ? 'black' : 'white',
                          }}
                        />
                      </button>
                    }
                  >
                    {close => (
                      <PopBackdrop>
                        <PopDiv light={light}>
                          <PopupP light={light}>
                            Are you sure want to logout?
                          </PopupP>
                          <ButtonContainer>
                            <PopupBtn
                              inline
                              onClick={() => close()}
                              type="button"
                              light={light}
                            >
                              Cancel
                            </PopupBtn>
                            <PopupBtn type="button" onClick={logout}>
                              Confirm
                            </PopupBtn>
                          </ButtonContainer>
                        </PopDiv>
                      </PopBackdrop>
                    )}
                  </Popup>
                </div>
              </SmallNav>
              <BigNav light={light}>
                <BigLogo
                  src={
                    light
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                />
                <BigNavItems>
                  <Button
                    type="button"
                    onClick={() => {
                      console.log('Theme button clicked')
                      themeChange()
                    }}
                  >
                    {light ? (
                      <FaMoon size={27} style={{marginRight: '35px'}} />
                    ) : (
                      <FiSun
                        size={27}
                        style={{marginRight: '35px', color: 'white'}}
                      />
                    )}
                  </Button>
                  <Profilepic
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={
                      <button
                        type="button"
                        style={{background: 'none', border: 'none'}}
                      >
                        <LogoutBtn type="button" light={light}>
                          Logout
                        </LogoutBtn>
                      </button>
                    }
                  >
                    {close => (
                      <>
                        <PopBackdrop>
                          <PopDiv light={light}>
                            <PopupP light={light}>
                              Are you sure want to logout?
                            </PopupP>
                            <ButtonContainer>
                              <PopupBtn
                                inline
                                onClick={() => close()}
                                type="button"
                                light={light}
                              >
                                Cancel
                              </PopupBtn>
                              <PopupBtn type="button" onClick={logout}>
                                Confirm
                              </PopupBtn>
                            </ButtonContainer>
                          </PopDiv>
                        </PopBackdrop>
                      </>
                    )}
                  </Popup>
                </BigNavItems>
              </BigNav>
            </div>
          )
        }}
      </mainContext.Consumer>
    )
  }
}
export default withRouter(Navbar)
