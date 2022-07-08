import React from "react"
import style from '../components/Griditem.module.css'
import up from '../assets/up.png'
import downImage from '../assets/down.png'

export const GridItem=({item})=>{
    return(
        <div style={{backgroundColor:item.color}} className={style.main}>
            <div className={style.gridicon}>
                {item.icon === 'up' && <img src={up} alt='' width="30"/>}
                {item.icon === 'down' && <img src={downImage} alt='' width="30"/>}
            </div>
            <div className={style.Gridtitle}>{item.title}</div>
            {item.yourimc ? <div className={style.yourimc}>Seu IMC é de {item.yourimc}</div> : ''}
            <div className={style.info}>
                <>
                O IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}