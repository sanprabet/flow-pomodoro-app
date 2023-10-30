import { useState } from 'react'
import '../Design/Screens/ChoosingSpotify.scss'

function Music({theme}){
    return(
        <div className={"music"}>
            <div className="spotify">
                
                <div className="spotify__login">
                    <div className="spotify__login__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                            <path d="M33 0C14.784 0 0 14.784 0 33C0 51.216 14.784 66 33 66C51.216 66 66 51.216 66 33C66 14.784 51.216 0 33 0ZM44.286 48.114C43.791 48.807 43.032 49.137 42.273 49.137C41.778 49.137 41.283 48.972 40.821 48.675C35.739 45.045 29.238 44.253 23.43 46.53C22.176 47.025 20.724 46.398 20.229 45.144C19.734 43.857 20.361 42.438 21.615 41.943C29.007 39.006 37.257 40.029 43.692 44.649C44.847 45.474 45.078 47.025 44.286 48.114ZM47.916 38.907C47.421 39.6 46.662 39.93 45.903 39.93C45.408 39.93 44.913 39.765 44.451 39.468C37.455 34.452 28.512 33.363 20.493 36.531C19.239 37.026 17.787 36.399 17.292 35.145C16.797 33.858 17.424 32.439 18.678 31.944C28.248 28.149 38.973 29.469 47.322 35.475C48.444 36.267 48.708 37.818 47.916 38.907ZM53.097 30.063C52.602 30.756 51.843 31.086 51.084 31.086C50.589 31.086 50.094 30.921 49.632 30.624C39.798 23.562 27.192 22.011 15.972 26.499C14.685 26.994 13.266 26.367 12.771 25.113C12.276 23.859 12.903 22.407 14.157 21.912C26.961 16.83 41.316 18.579 52.536 26.631C53.658 27.39 53.922 28.941 53.097 30.063Z" fill="#1DB954"/>
                        </svg>
                    </div>
                    <div className="spotify__login__label">
                        Connect
                    </div>
                </div>
                <div className="spotify__title">
                    <p>Listen to your <b>music</b></p>
                </div>
            </div>
            <div className="youtube">
                <div className="youtube__title">
                    <p>Or listen one of our instrumental</p>
                    <p><b>flow mixes</b></p>
                </div>
                <div className="youtube__genres">
                    <div className='youtube__genres__whiteNose'>White Noise</div>
                    <div className='youtube__genres__classic'>Classic</div>
                    <div className='youtube__genres__lofi'>Lofi</div>
                    <div className='youtube__genres__Rap'>Rap</div>
                    <div className='youtube__genres__RnB'>RnB</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Music