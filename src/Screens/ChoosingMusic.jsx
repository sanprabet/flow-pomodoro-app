import { useState } from 'react'
import ConnectSpotify from '../Components/ConnectSpotify'
import '../../design/Screens/ChoosingMusic.scss'

function Music({theme}){
    return(
        <div className="music">
            <div className="spotify">
                <ConnectSpotify theme={theme}/>
                <div className={"spotify__title spotify__title--" + theme}>
                    <p>Sign in to listen to <span className='spotify__title--green'>your music</span></p>
                </div>
            </div>
            <div className="youtube">
                <div className={"youtube__title youtube__title--" + theme}>
                    <p>Or try our <span className='youtube__title--green'>lofi mixes</span></p>
                </div>
                <div className={"youtube__genres youtube__genres--" + theme}>
                    <div className='youtube__genre youtube__whiteNose'>White Noise</div>
                    <div className='youtube__genre youtube__classic'>Classic</div>
                    <div className='youtube__genre youtube__lofi'>Lofi</div>
                    <div className='youtube__genre youtube__rap'>Rap</div>
                    <div className='youtube__genre youtube__freq'>Frequency</div>
                </div>
            </div>
            <div className="skip">
                <button className={"skip__button skip__button--" + theme}>Skip</button>
            </div>
        </div>
    )
}

export default Music