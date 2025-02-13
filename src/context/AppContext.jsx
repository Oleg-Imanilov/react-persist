import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const HOST = '192.168.0.226:5000' // 'localhost:5000'; 

export const AppContext = createContext();

let needSave = false;
let doc2save = {}
setInterval(()=>{
  if(needSave) {
    axios.put(`http://${HOST}/`, doc2save); 
    doc2save = {}
    needSave = false;
  }
}, 1000);

// Create the provider component
export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(()=>{
    (async () => {
      const response = await axios.get(`http://${HOST}/`); 
      setData(response.data);
    })()
  }, []);

  const update = async (doc) => {
    setData({...data, ...doc});
    needSave = true;
    doc2save = {...doc2save, ...doc};
  }

  return (
    <AppContext.Provider value={{ update, data }}>
      {children}
    </AppContext.Provider>
  );
}; 