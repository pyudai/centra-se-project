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
      ])


      const FOODLIST = {
        F01: {
          name: "Mushroom Omlette",
          price: 100
        },
        F02: {
          name: "American Breakfast 1",
          price: 100
        },
        F03: {
          name: "American Breakfast 2",
          price: 100
        },
      }

      const [food, setFood] = useState([
        {No:"1000000001", Name:"Burger Queen", Price:100 },
        {No:"1000000002", Name:"Omelette", Price:100 },
        {No:"1000000003", Name:"Steak", Price:120 },
        {No:"1000000004", Name:"Sushi", Price:120 },
        {No:"1000000005", Name:"Sphaghetti carbonara", Price:150 }
      ]);

      const [employee, setEmployee] = useState([
        {No:"61070501010", Name:"จิตรลดา ทิพย์ทินกร", Phone:"0998877556", Department:1},
        {No:"61070501014", Name:"ชานนท์ ปาณรงค์", Phone:"0999997722", Department:1},
        {No:"6170501059", Name:"ชินดนัย จิตบรรจง", Phone:"0964858585", Department:0},
        {No:"61070501062", Name:"ธัชพรรณ ลีสนธิไชย", Phone:"0999994443", Department:0},
        {No:"61070501064", Name:"เปรมยุดา อังคะวิชัย", Phone:"0999966678", Department:1},
        {No:"61070501070", Name:"อภิชญา ธรรมสุธน", Phone:"0999997776", Department:0}
      ]);

      

      return (
        <CheckinContext.Provider value={{info, setInfo, reserveList, setReserveList, ROOMLIST, foodList, setFoodList, FOODLIST, food, setFood, employee, setEmployee}}>
            {children}
        </CheckinContext.Provider>
    );
};
export default CheckinProvider;

