import React,{createContext,useState} from 'react';

export const ReserveRoomContext = createContext<any>([
    {No:"B01", name:"Garden View", Reserver:"", Status:0 },
    {No:"B02", name:"Beach Villa", Reserver:"", Status:0 },
    {No:"B03", name:"Pool View", Reserver:"การะเกด ศิรินทร์", Status:1 },
    {No:"B04", name:"Sea Villa", Reserver:"น้ำปูน จิจิด้า", Status:2 }
  ]);
  
  const CheckinProvider=({children})=>{
      
      const [info, setInfo] = useState([
        {No:"B01", name:"Garden View", Reserver:"", Status:0 },
        {No:"B02", name:"Beach Villa", Reserver:"", Status:0 },
        {No:"B03", name:"Pool View", Reserver:"การะเกด ศิรินทร์", Status:1 },
        {No:"B04", name:"Sea Villa", Reserver:"น้ำปูน จิจิด้า", Status:2 }
      ]);
      return (
        <ReserveRoomContext.Provider value={{info, setInfo}}>
            {children}
        </ReserveRoomContext.Provider>
    );
};
export default CheckinProvider;

