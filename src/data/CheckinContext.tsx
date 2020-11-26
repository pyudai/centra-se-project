import React,{createContext,useState} from 'react';

export const CheckinContext = createContext<any>({});
  
  const CheckinProvider=({children})=>{
      
      const [info, setInfo] = useState([
        {No:"B01", name:"Garden View", Reserver:"", Status:0 },
        {No:"B02", name:"Beach Villa", Reserver:"", Status:0 },
        {No:"B03", name:"Pool View", Reserver:"การะเกด ศิรินทร์", Status:1 },
        {No:"B04", name:"Sea Villa", Reserver:"น้ำปูน จิจิด้า", Status:2 }
      ]);

      const [reserveList, setReserveList] = useState([
        { No: "B04", name: "Sea Villa", price: "2000"},
        { No: "B01", name: "Garden View", price: "1500"},
      ])

      const ROOMLIST = {
        B01: {
          name: "Garden View",
          price: 1500
        },
        B02: {
          name: "Beach Villa",
          price: 1800
        },
        B03: {
          name: "Pool View",
          price: 1500
        },
        B04: {
          name: "Sea Villa",
          price: 2000
        },
      }

      const [foodList, setFoodList] = useState([
        { name: "Mushroom Omlette", price: "100"},
        { name: "American Breakfast1", price: "100"},
        { name: "American Breakfast2", price: "100"},
      ])


      const FOODLIST = {
        MushroomOmlette: {
          //name: "Mushroom Omlette",
          price: 100
        },
        AmericanBreakfast1: {
          //name: "American Breakfast 1",
          price: 100
        },
        AmericanBreakfast2: {
          //name: "American Breakfast 2",
          price: 100
        },
      }

      

      return (
        <CheckinContext.Provider value={{info, setInfo, reserveList, setReserveList, ROOMLIST, foodList, setFoodList, FOODLIST}}>
            {children}
        </CheckinContext.Provider>
    );
};
export default CheckinProvider;

