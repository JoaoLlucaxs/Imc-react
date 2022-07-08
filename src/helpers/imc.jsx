export const levels=[
    {title:'Magreza',color:'#96A3AB',icon:'down',imc:[0,18.5],yourimc:parseFloat('')},
    {title:'Normal',color:'#0EAD69',icon:'up',imc:[18.6,24.9],yourimc:parseFloat('')},
    {title:'Sobrepeso',color:'#E2B039',icon:'down',imc:[25,30],yourimc:parseFloat('')},
    {title:'Obesidade',color:'#C3423F',icon:'up',imc:[30.1,99],yourimc:parseFloat('')}
]

export const calculateImc=(height,width)=>{
    const imc=width/(height * height)

    for(let i in levels){
        if(imc >=levels[i].imc[0] && imc < levels[i].imc[1]){
            let levelCopy={...levels[i]}
            levelCopy.yourimc= +imc.toFixed(2)
            return levelCopy
        }
    }
    return null
}