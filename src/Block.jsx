import React from 'react'
import './block.css'

const Block = () => {
    // let divisor=2;
    let checkprime=(num)=> {
    //    return num % divisor === 0 ? false : (++divisor, true)
    var i, flag=true;
    if(num<2)return false
    for(i=2;i<num-1;i++){
        if(num%i===0){
            flag=false;
            break;
        }
    }
    if(flag===true){
        return true

    }

    
    return false

    }

  return (
    <>
    <div className="headingDiv">

    <h1>30 days of React</h1>
    <p>Number Generator</p>

    </div>
    <div className="numberCard">

        {
            Array(32).fill("").map((e,i)=>{
            //   console.log(i)
                return <div style={{background:checkprime(i)?"#fd5e53":i%2===0?"#21bf73":"#fddb3a"}} className='block'>{i}</div>
            })
        }
    </div>
    </>
  )
}

export default Block