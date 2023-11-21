import { useState } from 'react'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import Landing from './Screens/Landing'
import Music from './Screens/ChoosingMusic'
import Tasks from './Screens/Tasks'
import '../design/App.scss'

function ThemeSwitch({theme, switchFunction}) {
  console.log(theme)
  let switchColor = (theme == "dark") ? "#fafafa" : "#303030"
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70" fill="none" onClick={() => switchFunction()}>
      <path d="M34.8848 57.0842C47.1452 57.0842 57.0842 47.1452 57.0842 34.8847C57.0842 22.6243 47.1452 12.6853 34.8848 12.6853C22.6244 12.6853 12.6854 22.6243 12.6854 34.8847C12.6854 47.1452 22.6244 57.0842 34.8848 57.0842Z" fill={switchColor}/>
      <path d="M34.8848 69.6428C33.1406 69.6428 31.7135 68.3425 31.7135 66.5983V66.3446C31.7135 64.6003 33.1406 63.1732 34.8848 63.1732C36.6291 63.1732 38.0562 64.6003 38.0562 66.3446C38.0562 68.0888 36.6291 69.6428 34.8848 69.6428ZM57.5282 60.6996C56.7037 60.6996 55.9108 60.3824 55.2766 59.7799L54.8643 59.3676C53.6275 58.1308 53.6275 56.1328 54.8643 54.896C56.1011 53.6592 58.0991 53.6592 59.3359 54.896L59.7482 55.3083C60.985 56.5451 60.985 58.5431 59.7482 59.7799C59.1456 60.3824 58.3528 60.6996 57.5282 60.6996ZM12.2414 60.6996C11.4168 60.6996 10.624 60.3824 9.98974 59.7799C8.75292 58.5431 8.75292 56.5451 9.98974 55.3083L10.402 54.896C11.6388 53.6592 13.6368 53.6592 14.8736 54.896C16.1104 56.1328 16.1104 58.1308 14.8736 59.3676L14.4613 59.7799C13.8588 60.3824 13.0342 60.6996 12.2414 60.6996ZM66.5983 38.0562H66.3446C64.6003 38.0562 63.1732 36.6291 63.1732 34.8848C63.1732 33.1406 64.6003 31.7135 66.3446 31.7135C68.0888 31.7135 69.6428 33.1406 69.6428 34.8848C69.6428 36.6291 68.3425 38.0562 66.5983 38.0562ZM3.42505 38.0562H3.17135C1.42711 38.0562 0 36.6291 0 34.8848C0 33.1406 1.42711 31.7135 3.17135 31.7135C4.91559 31.7135 6.46955 33.1406 6.46955 34.8848C6.46955 36.6291 5.1693 38.0562 3.42505 38.0562ZM57.116 15.825C56.2914 15.825 55.4986 15.5079 54.8643 14.9053C53.6275 13.6685 53.6275 11.6706 54.8643 10.4337L55.2766 10.0215C56.5134 8.78463 58.5114 8.78463 59.7482 10.0215C60.985 11.2583 60.985 13.2562 59.7482 14.4931L59.3359 14.9053C58.7333 15.5079 57.9405 15.825 57.116 15.825ZM12.6537 15.825C11.8291 15.825 11.0363 15.5079 10.402 14.9053L9.98974 14.4613C8.75292 13.2245 8.75292 11.2266 9.98974 9.98974C11.2266 8.75292 13.2245 8.75292 14.4613 9.98974L14.8736 10.402C16.1104 11.6388 16.1104 13.6368 14.8736 14.8736C14.2711 15.5079 13.4465 15.825 12.6537 15.825ZM34.8848 6.46955C33.1406 6.46955 31.7135 5.1693 31.7135 3.42505V3.17135C31.7135 1.42711 33.1406 0 34.8848 0C36.6291 0 38.0562 1.42711 38.0562 3.17135C38.0562 4.91559 36.6291 6.46955 34.8848 6.46955Z" fill={switchColor}/>
    </svg>
  )
}

function App() {
  const [theme, setTheme] = useState("dark")
  
  const changeTheme = () => {
    if (theme != "dark") setTheme("dark")
    else setTheme("light")
  }

  return (
      <div className={`app app--${theme}`}>
        <div className="app__themeSwitch">
          <ThemeSwitch theme={theme} switchFunction={changeTheme}/>
        </div>
        <div className="app__hero">
          {/* <Landing theme={theme} /> */}
          {/* <Music theme={theme} /> */}
          {/* <SignIn theme={theme} /> */}
          {/* <SignUp theme={theme} /> */}
          <Tasks theme={theme}/>
        </div>
      </div>
  )
}

export default App
