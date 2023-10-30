import { useState } from 'react'
import '../Design/Components/ButtonSign.scss'

function ButtonSign({theme, label, sendTo}){
    return(
        <button className={"buttonSign buttonSign--" + theme} onClick={() => sendTo("")}>
        {label}
        </button>
    )
}

export default ButtonSign