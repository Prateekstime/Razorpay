import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CountClicks from './features/CountCLickes';
import MemoExample from './features/MemoExample';

export default function Home() {
    const [data,setData] = useState([]); 
    const [loading,setLoading] = useState(true); 
    const [error,setError] = useState(null); 


  
       
  return (
    <div>
        <h1>Home</h1>
  
    </div>
  )
}
