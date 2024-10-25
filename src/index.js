import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const EffectHook=()=>{
  const [a,seta]=useState(0)
  useEffect(()=>{
    async function API(){
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const OriginalData=await data.json()
      console.log(OriginalData)
    }
    API()
  },[])


  return <div>
    <h2>......UseFeect Hoook........</h2>
    <h4>{a}</h4>
    <button onClick={()=>{
      seta(a+1)
    }}>Click Here</button>

  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EffectHook/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
