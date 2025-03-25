import {IoMdHome} from 'react-icons/io'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import mainContext from '../../context'
import {
  SideBarCon,
  MenuList,
  MenuItem,
  ContactDiv,
  SocMedia,
  SMImg,
} from '../../styledComponent'

const SideBar = () => (
  <mainContext.Consumer>
    {value => {
      const {light, pages, themeChange, activePageChange, activePageId} = value
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
      return (
        <SideBarCon light={light}>
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
                            activePageId === each.id ? ' #313131' : '#7e858e',
                          margin: '7px',
                          fontSize: '15px',
                          fontFamily: 'roboto',
                        }
                      : {
                          color:
                            activePageId === each.id ? ' white' : '#f1f1f1',
                          fontWeight: activePageId === each.id ? '500' : '400',
                          margin: '7px',
                          fontSize: '15px',
                          fontFamily: 'roboto',
                        }
                  }
                >
                  {each.displayText}
                </p>
              </MenuItem>
            ))}
          </MenuList>
          <ContactDiv light={light}>
            <p>CONTACT US</p>
            <SocMedia>
              <SMImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SMImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SMImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocMedia>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </ContactDiv>
        </SideBarCon>
      )
    }}
  </mainContext.Consumer>
)

export default SideBar
