import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const AppContext = createContext();

let needSave = false;
let doc2save = {}
setInterval(()=>{
  axios.put(`http://localhost:5000/`, doc2save); 
  doc2save = {}
  needSave = false;
}, 500);

// Create the provider component
export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(()=>{
    (async () => {
      const response = await axios.get("http://localhost:5000/"); // TODO: get from env or config
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