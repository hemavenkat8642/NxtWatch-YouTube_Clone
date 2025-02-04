import {useLocation, Link} from 'react-router-dom'
import styled from 'styled-components'
import {IoGameController} from 'react-icons/io5'
import {MdHome, MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import VideoContext from '../../context/VideoContext'
import {
  NavBarContainer,
  NavBarTopCard,
  NavItem,
  NavBarBottomCard,
} from './styledComponents'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const LeftNavBar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <VideoContext.Consumer>
      {value => (
        <NavBarContainer dark={value.darkTheme}>
          <NavBarTopCard>
            <li>
              <StyledLink
                to="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor:
                    currentPath === '/' ? '#54545430' : 'transparent',
                  padding: '9px',
                  margin: '4px',
                  paddingLeft: '20px',
                  height: '50px',
                }}
              >
                <MdHome
                  style={{
                    color: currentPath === '/' ? 'red' : 'gray',
                    marginRight: '8px',
                    fontSize: '24px',
                  }}
                />
                <NavItem dark={value.darkTheme}>Home</NavItem>
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/trending"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor:
                    currentPath === '/trending' ? '#54545430' : 'transparent',
                  padding: '9px',
                  margin: '4px',
                  paddingLeft: '20px',
                  height: '50px',
                }}
              >
                <MdWhatshot
                  style={{
                    color: currentPath === '/trending' ? 'red' : 'gray',
                    marginRight: '8px',
                    fontSize: '24px',
                  }}
                />
                <NavItem dark={value.darkTheme}>Trending</NavItem>
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/gaming"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor:
                    currentPath === '/gaming' ? '#54545430' : 'transparent',
                  padding: '9px',
                  margin: '4px',
                  paddingLeft: '20px',
                  height: '50px',
                }}
              >
                <IoGameController
                  style={{
                    color: currentPath === '/gaming' ? 'red' : 'gray',
                    marginRight: '8px',
                    fontSize: '24px',
                  }}
                />
                <NavItem dark={value.darkTheme}>Gaming</NavItem>
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/saved-videos"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor:
                    currentPath === '/saved-videos'
                      ? '#54545430'
                      : 'transparent',
                  padding: '9px',
                  margin: '4px',
                  paddingLeft: '20px',
                  height: '50px',
                }}
              >
                <MdPlaylistAdd
                  style={{
                    color: currentPath === '/saved-videos' ? 'red' : 'gray',
                    marginRight: '8px',
                    fontSize: '24px',
                  }}
                />
                <NavItem dark={value.darkTheme}>Saved videos</NavItem>
              </StyledLink>
            </li>
          </NavBarTopCard>
          <NavBarBottomCard>
            <p
              style={{
                fontSize: '12px',
                margin: 0,
                marginBottom: 18,
                fontWeight: 600,
              }}
            >
              CONTACT US
            </p>
            <div style={{display: 'flex', marginBottom: 18}}>
              <a
                href="https://www.instagram.com/hemavenkat_nagateja/"
                target="_blank"
                rel="noopener noreferrer"
                style={{marginRight: 10}}
              >
                <img
                  style={{width: '30px', height: 'auto'}}
                  src="/instagram-logo.png"
                  alt="instagram logo"
                />
              </a>
              <a
                href="https://github.com/hemavenkat8642"
                target="_blank"
                rel="noopener noreferrer"
                style={{marginRight: 10}}
              >
                <img
                  style={{width: '30px', height: 'auto'}}
                  src={
                    value.darkTheme
                      ? '/github-mark-white.png'
                      : '/github-mark.png'
                  }
                  alt="github logo"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/hemavenkat-nagateja-thatha-bb4939230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{width: '30px', height: 'auto'}}
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </a>
            </div>
            <p style={{margin: 0}}>
              Enjoy! Now to see your channels and recommendations!
            </p>
          </NavBarBottomCard>
        </NavBarContainer>
      )}
    </VideoContext.Consumer>
  )
}

export default LeftNavBar
