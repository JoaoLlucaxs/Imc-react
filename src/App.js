  import React from "react"
  import { useState } from "react"
  import styles from './App.module.css'
  import poweredImg from './assets/powered.png'
  import { levels,calculateImc } from './helpers/imc'
  import {GridItem} from './components/GridItem.tsx'
  import seta from './assets/leftarrow.png'
  
  const App=()=>{
  
  const[heightInput,setHeight]=useState(0)
  const[widthInput,setWidth]=useState(0)
  const[showItem,setShow]=useState(null)

  function handleCalculate(e){
    if(heightInput && widthInput){
setShow(calculateImc(heightInput,widthInput))
    }else{
      alert('Digite os campos corretamente')
    }
  }

  const handleButton=()=>{
    setShow(null)
    setHeight(0)
    setWidth(0)
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} alt='' width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule seu IMC</h1>
          <p>Veja a sua massa corporal, insira os dados e saiba</p>
          <input
          type='number'
          placeholder='Digite a sua altura em metros (exemplo 1.70)'
          value={heightInput > 0 ? heightInput : ''}
          onChange={(e)=>setHeight(+e.target.value)}
          disabled={showItem? true : false}
          />
          <input
          type='number'
          placeholder='Digite o seu peso em metros'
          value={widthInput > 0 ? widthInput : ''}
          onChange={(e)=>setWidth(+e.target.value)}
          disabled={showItem? true : false}
          />

        <button className={styles.btn} onClick={handleCalculate} disabled={showItem? true : false}>Calcular</button>
        </div>
        <div className={styles.rigthside}>
          {!showItem &&
          <div className={styles.grid}>
            {levels.map((item,key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {showItem &&
            <div className={styles.rightBig}>
              <div className={styles.setaDireita} onClick={handleButton}>
                <img src={seta} alt=''/>
              </div>
              <GridItem item={showItem}/>
            </div>
          }
        </div>
        </div>
        </div>
      )}
      

export default App;
