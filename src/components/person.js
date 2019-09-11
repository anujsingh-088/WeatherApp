import React from 'react'
const Person=(props)=>{
return(
    <div>
        <p onClick={props.click}>{props.name}</p>
    </div>
)
}
export default Person; 