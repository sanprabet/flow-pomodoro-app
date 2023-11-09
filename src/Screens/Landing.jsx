import { useState } from 'react'
import ButtonSign from '../Components/ButtonSign'
import '../../design/Screens/Landing.scss'
  
function Landing({theme}){
    const openSignIn = () => (console.log("openSignIn"))
    const openSignUp = () => (console.log("openSignUp"))

    let iconColor = (theme == "dark") ? "#FF0000" : "#1CC20E"

    return(
        <div className={"landing landing--" + theme}>
            <div className='landing__signButtons'>
                <ButtonSign theme={theme} label="Sign In" sendTo={openSignIn}/>
                <ButtonSign theme={theme} label="Sign Up" sendTo={openSignUp}/>
            </div>
            <div className="landing__hero">
                <h1 className={"landing__hero__title landing__hero__title--" + theme}>
                    Let's Focus
                </h1>
                <div className='landing__hero__icon'>
                    <svg viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="87.5" cy="87.5" r="87.5" fill={iconColor}/>
                        <path d="M129 87.5L66.75 125.172L66.75 49.8279L129 87.5Z" fill="#FAFAFA"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Landing