import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
`
// LoginForm styling
export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.light ? 'white' : ' #212121')};
`
export const Form = styled.form`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); 
    padding:30px;
    text-align:center;
    font-family:'roboto'
    width:70%;
    background-color:${props => (props.light ? 'white' : '#181818')};

    @media screen and (max-width:767px){
        margin-left:30px;
        margin-right:30px;
    }
`
export const FormItem = styled.div`
  margin-top: 20px;
  text-align: start;
`
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 38px;
  color: white;
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 5px;
  margin-top: 30px;
  padding: 5px;
`
export const Label = styled.label`
  color: ${props => (props.light ? 'black' : 'white')};
  font-size: 14px;
`
export const Img = styled.img`
  width: 50%;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
`
// Navbar styling

export const SmallNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.light ? 'white' : '#313131')};
  align-items: center;
  width: 100vw;
  padding: 10px;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const BigNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: ${props => (props.light ? '#ffffff' : '#313131')};
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Logo = styled.img`
  width: 28%;
`
export const PopupContainer = styled.div`
  width: 80vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s ease-in-out;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 20px;
`
export const MenuList = styled.ul`
  type: none;
  width: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-top: 7px;
    padding: 15px;
  }
`
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  text-align: left;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 0px;
  }
`
export const BigLogo = styled.img`
  padding-left: 35px;
  width: 14%;
`
export const Profilepic = styled.img`
  width: 11%;
  margin-right: 35px;
`
export const BigNavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
`
export const LogoutBtn = styled.button`
  color: ${props => (props.light ? '#3b82f6' : 'white')};
  font-weight: 600;
  border: 2px solid ${props => (props.light ? '#3b82f6' : 'white')};
  background-color: transparent;
  width: 90px;
  height: 33px;
  padding: 3px;
  border-radius: 5px;
`
// Home styling
export const MainBody = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
// SideBar styling
export const SideBarCon = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  background-color: ${props => (props.light ? 'white' : '#313131')};
  width: 20vw;
  max-width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactDiv = styled.div`
  color: ${props => (props.light ? '#1e293b' : '#f4f4f4')};
  font-family: 'roboto';
  padding: 35px;
  font-size: 13px;
  font-weight: 500;
`
export const SocMedia = styled.div`
  display: flex;
`
export const SMImg = styled.img`
  width: 17%;
  margin-right: 10px;
`
export const MenuPara = styled.p`
  margin: 7px;
  color: #475569;
  font-weight: 509;
  font-size: 17px;
`

// VideosSection styling
export const VideosSection = styled.div`
  background-color: ${props => (props.light ? ' #f4f4f4' : 'black')};
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    height: 100vh;
    overflow-y: auto;
  }
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 10px;
  padding-left: 20px;
  @media screen and (max-width: 767px) {
    width: 100vw;
    padding: 20px;
  }
`
export const BannerHead = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`
export const BannerBtn = styled.button`
  color: #1e293b;
  font-weight: 600;
  border: 2px solid #1e293b;
  background-color: transparent;
  width: 118px;
  height: 33px;
  padding: 7px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const BannerPara = styled.p`
  color: #475569;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const InputSection = styled.div`
  display: flex;
  margin: 20px;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const VideoInput = styled.input`
  color: ${props => (props.light ? '#313131' : '#909090')};
  width: 40%;
  padding: 7px;
  background-color: ${props => (props.light ? 'white' : 'transparent')};
  border: 1px solid ${props => (props.light ? 'black' : '#909090')};
  @media screen and (max-width: 767px) {
    width: 70vw;
  }
`
export const SearchBtn = styled.button`
  background-color: ${props => (props.light ? '#f4f4f4' : 'transparent')};
  border: 1px solid ${props => (props.light ? 'black' : '#909090')};
  width: 90px;
  border-left-width: 0px;
  @media screen and (max-width: 767px) {
    width: 15vw;
    margin-right: 20px;
  }
`
export const Videos = styled.ul`
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`
// videoItem styling
export const Video = styled.li`
  width: 30%;
  margin: 15px;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 0px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
`
export const VideoImg = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'roboto';
`
export const VideoProfile = styled.img`
  width: 11%;
  height: 6%;
  margin-top: 15px;
  margin-right: 15px;
`
export const VideoTitle = styled.p`
  color: ${props => (props.light ? '#1e293b' : '#f4f4f4')};
  font-size: 16px;
  font-weight: 400;
`
export const VideoP = styled.p`
  color: ${props => (props.light ? '#475569' : '#7e858e')};
  font-size: 14px;
  font-weight: 500;
`
// Lost styling

export const LostImg = styled.img`
  width: 30%;
`
export const LostCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
`
export const Losthead = styled.h1`
  color: ${props => (props.light ? '#0f0f0f' : 'white')};
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`
export const LostP = styled.p`
  font-size: 20px;
  color: ${props => (props.light ? '#1e293b' : '#f4f4f4')};

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`
export const LostBtn = styled.button`
  width: 100px;
  height: 38px;
  color: white;
  background-color: #4f46e5;
  border-width: 0px;
  border-radius: 5px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    width: 85px;
    height: 28px;
    font-size: 12px;
    margin-bottom: 10px;
  }
`
// Trending Styyling
export const TrendingHeader = styled.div`
    display:flex;
    align-items:center
    padding:40px;
    padding-left:40px;
    padding-top:20px;
    padding-bottom:20px;
    background-color:${props => (props.light ? '#ebebeb' : ' #231f20')};
    margin-bottom:10px;
    @media screen and (max-width:767px){
        font-size:25px;
        padding:30px;
        padding-left:30px;
        padding-top:10px;
        padding-bottom:20px;
    }
`
export const Trendinghead = styled.h1`
  color: ${props => (props.light ? '#0f0f0f' : 'white')};
  margin-left: 10px;
  font-size: 25px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const TrendingVideos = styled.ul`
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const TrendingVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
export const TrendingImg = styled.img`
  width: 50%;
  height: auto;
  margin-right: 15px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-right: 0px;
  }
`
export const TrendingDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: 'roboto';
  margin-left: 15px;
  padding: 15px;
  width: 30%;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    width: 90%;
  }
`
export const TrendingVideoTitle = styled.p`
  color: ${props => (props.light ? '#212121' : '#f4f4f4')};
  font-size: 23px;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    font-size: 15px;
  }
`
export const TrendingVideoP = styled.p`
  color: #616e7c;
  font-size: 17px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    font-size: 12px;
  }
`
export const TrendingVideoProfile = styled.img`
  width: 14%;
  height: 8%;
  margin-top: 15px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
// Gaming styling
export const GamingVideos = styled.ul`
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Aligns items from the left */
    gap: 10px; /* Adds spacing between items */
    padding-top: 20px;
    list-style-type: none;
    width: 100%; /* Ensures it takes full width */
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap; /* Allows items to wrap properly */
    justify-content: space-evenly;
    padding-top: 20px;
    list-style-type: none;
  }
`
export const GamingVideo = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.light ? ' #f9f9f9' : 'transparent')};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 85%;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px; /* Adds spacing between items */
  }
`
export const GamingImg = styled.img`
  width: 100%;
  height: 50%;
  height:auto @media screen and (max-width:767px) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
export const GamingDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'roboto';
  width: 100%;
  text-align: center;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    width: 90%;
  }
`
export const GamingVideoTitle = styled.p`
  color: ${props => (props.light ? '#212121' : '#f4f4f4')};
  font-size: 19px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    font-size: 13px;
  }
`
export const GamingVideoP = styled.p`
  color: #616e7c;
  font-size: 17px;
  font-weight: 500;
  padding-top: 0px;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    font-size: 10px;
  }
`
// VideoItem styling
export const VideoItemCon = styled.div`
  padding: 20px;
  font-family: 'roboto';
`
export const VideoUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #616e7c;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Reactions = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #616e7c;
`
export const IconBtn = styled.button`
  display: flex;
  background-color: transparent;
  border-width: 0px;
  align-items: center;
  margin-right: 5px;
`
export const VideoDescription = styled.div`
  display: flex;
`
export const VideoItemProfile = styled.img`
  width: 5%;
  height: 5%;
  margin-top: 15px;
  margin-right: 15px;
`
export const VideoBio = styled.div`
  font-family: 'roboto';
`
export const VideoItemTitle = styled.p`
  color: ${props => (props.light ? '#212121' : '#f4f4f4')};
  font-size: 19px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    font-size: 15px;
  }
`
export const VideoItemP = styled.p`
  color: ${props => (props.light ? '#475569' : ' #7e858e')};
  font-size: 15px;
  font-weight: 500;
`
// Popup styling
export const PopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => (props.light ? 'white' : '#181818')};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Fix unwanted spacing in large screens */
  margin: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Space between buttons */
  width: 100%;
  margin-top: 15px;
`

export const PopupP = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.light ? '#00306e' : ' #f4f4f4')};
  margin: 10px 0;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
export const PopupBtn = styled.button`
  flex: 1; /* Ensures equal width */
  max-width: 120px; /* Prevents buttons from stretching too much */
  height: 38px;
  padding: 7px;
  background-color: ${props => (props.inline ? 'transparent' : '#3b82f6')};
  border: ${props => (props.inline ? '1px solid #909090' : 'none')};
  color: ${props => (props.inline ? '#909090' : 'white')};
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &.cancel {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.confirm {
    background-color: #3b82f6;
    color: white;
    border: none;
  }
`

/* Backdrop styling to prevent extra space */
export const PopBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  /* Ensure there is no gap around */
  overflow: hidden;
  pointer-events: auto;

  /* Fix extra unwanted spacing */
  & > * {
    max-width: 100%;
  }
`
export const BodyWrapper = styled.div`
  overflow: hidden;
  position: relative;

  /* Hide background content when popup is open */
  ${({isPopupOpen}) =>
    isPopupOpen &&
    `
        filter: blur(5px);
        pointer-events: none;
    `}
`
