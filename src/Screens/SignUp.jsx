import React, { useState, useEffect }from 'react'
import '../../design/Screens/signUp.scss'

function SignUp({theme}) {

  return (
    <div className="signUp">
        <div className={"signUp__credentials signUp__credentials--" + theme}>
            <div className="signUp__credentials__email">
                <form className={"signUp__credentials__form signUp__credentials__form--" + theme}>
                    <input type="text" className={'signUp__credentials__form__textInput signUp__credentials__form__textInput--' + theme} placeholder='Email'/>
                    <input type="text" className={'signUp__credentials__form__textInput signUp__credentials__form__textInput--' + theme} placeholder='Password'/>
                    <input type="text" className={'signUp__credentials__form__textInput signUp__credentials__form__textInput--' + theme} placeholder='Repeat Password'/>
                    <input type="submit" value="Sign Up" className={'signUp__credentials__form__submit signUp__credentials__form__submit--' + theme} />
                </form>
            </div>
            <div className="signUp__credentials__apps">
                <div className={'signUp__credentials__apps__title signUp__credentials__apps__title--' + theme}>
                    <p>Or Sign Up Using</p>
                </div>
                <div className="signUp__credentials__apps__logos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 242 242" fill="none">
                        <path d="M231.777 71.6048V170.172C231.777 204.195 204.195 231.777 170.172 231.777H71.6048C37.5814 231.777 10 204.195 10 170.172V71.6048C10 37.5814 37.5814 10 71.6048 10H170.172C204.195 10 231.777 37.5814 231.777 71.6048Z" stroke="#4267B2" stroke-width="18.4814" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M108.568 231.777C108.568 194.814 108.568 157.851 108.568 120.889C108.568 93.9365 114.728 71.6048 157.851 71.6048" stroke="#4267B2" stroke-width="18.4814" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M83.9257 133.21H108.568H157.851" stroke="#4267B2" stroke-width="18.4814" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 183 183" fill="none">
                        <path d="M120.767 61.002C113.286 54.3223 103.322 50.25 92.3985 50.25C69.1175 50.25 50.2501 68.7217 50.2501 91.5C50.2501 114.278 69.1175 132.75 92.3985 132.75C121.019 132.75 131.595 111.544 132.75 94.9378H98.4384" stroke="#F4B400" stroke-width="16.6333"/>
                        <path d="M91.5 174C137.063 174 174 137.063 174 91.5C174 45.9365 137.063 9 91.5 9C45.9365 9 9 45.9365 9 91.5C9 137.063 45.9365 174 91.5 174Z" stroke="#F4B400" stroke-width="16.6333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 189 189" fill="none">
                        <path d="M94.5 180C141.72 180 180 141.72 180 94.5C180 47.2796 141.72 9 94.5 9C47.2796 9 9 47.2796 9 94.5C9 141.72 47.2796 180 94.5 180Z" stroke="#c9510c" stroke-width="16.6333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M114.45 154.35V138.421C114.664 135.775 114.297 133.114 113.373 130.617C112.45 128.119 110.99 125.842 109.093 123.936C126.991 121.993 145.801 115.389 145.801 85.0856C145.799 77.3364 142.738 69.8846 137.251 64.2724C139.849 57.4931 139.665 49.9997 136.738 43.3487C136.738 43.3487 130.011 41.4062 114.45 51.5628C101.386 48.1152 87.6153 48.1152 74.5505 51.5628C58.9895 41.4062 52.2635 43.3487 52.2635 43.3487C49.3358 49.9997 49.1522 57.4931 51.7505 64.2724C46.2223 69.9263 43.1579 77.4453 43.2005 85.2515C43.2005 115.333 62.0105 121.938 79.9083 124.102C78.0333 125.989 76.5869 128.239 75.6637 130.707C74.7406 133.173 74.3613 135.802 74.5505 138.421V154.35" stroke="#c9510c" stroke-width="16.6333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M74.55 143.25C57.45 148.651 43.2 143.25 34.65 126.6" stroke="#c9510c" stroke-width="16.6333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className={"signUp__title signUp__title--" + theme}>
            <div className="signUp__title__text">
                <p className='signUp__title__label'><span>We want you</span> to </p>
                <p className='signUp__title__mix'>get <span className='signUp__title__hook'>into Flow</span></p> {/* Add a switch of words */}
            </div>
            <div className="signUp__title__exit">
                <p>Already have an account?</p>
                <button className={'signUp__title__exit__button signUp__title__exit__button--' + theme}>Sign Up</button>
                <button className={'signUp__title__exit__button signUp__title__exit__button--' + theme}>Go Home</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp