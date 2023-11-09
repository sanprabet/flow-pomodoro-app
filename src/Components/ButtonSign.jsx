import { useState } from 'react'
import '../../design/Components/ButtonSign/ButtonSignBig.scss'
import '../../design/Components/ButtonSign/ButtonSignSmall.scss'

function ButtonSign({theme, label, sendTo}){
    return(
        <button className={"buttonSign buttonSign--" + theme} onClick={() => sendTo("")}>
            {label}
        </button>
    )
}

export default ButtonSign