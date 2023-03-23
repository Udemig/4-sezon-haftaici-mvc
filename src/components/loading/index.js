import React from "react";

const Loading=()=>{
    return(
        <div style={{
            position:'absolute',
            zIndex:100,
            backgroundColor: 'rgba(0,0,0,0.3)',
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <h1 style={{backgroundColor:'#fff',padding:'10px'}}>Loading...</h1>
        </div>
    )
}

export default Loading