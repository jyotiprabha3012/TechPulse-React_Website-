

 import React,{useContext,useReducer,useEffect, useState} from "react";
 import Reducer from "./Reducer"
 //create a  useContext(warehouse)
 //Provider
 //consumer
 //this context hook is used to avoid Prop drilling method

const AppContext=React.createContext();

const initialState={
    name:"",
    image:"",
    services:[],

 
};




const AppProvider = ({children}) =>{
    const [services,setservices]=useState([]);
    const [state,dispatch]=useReducer(Reducer,initialState);
    const getServices=()=>{
        fetch('service.json',{headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }}).then((response)=>{
            
            return response.json()

        }).then ((myjson)=>{
            dispatch({type:"GET_SERVICES",payload:myjson});
            console.log(myjson);
            setservices(myjson);
            

        })
        .catch(error => console.error("Error fetching services:",error));
        

    };

    useEffect(()=>{
        getServices();
    },[]);



    const updateHomePage=()=>{
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                name:"TechPulse",
                image:"https://www.kudosintech.com/wp-content/uploads/2023/07/Mobile-Application-Development.svg",
    
    
    
    
            },
        });
    };
    
    const updateAboutPage=()=>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name:"Jyoti Prabha",
                image:"https://omnilifegroup.com/wp-content/uploads/2024/05/undraw_Designer_re_5v95-1.png",

    
    
    
    
            },
        });
    };

    //to call the service.json
   

    return (
        
    <AppContext.Provider value={{...state, updateHomePage, updateAboutPage,getServices}}>
    
        {children}
        {/* {
            data && data.length>0 && data.map((val)=>{
                return(
                    <h1 key={val.id}>{val.title}</h1>
                )
            })
        } */}
        </AppContext.Provider>
    );
};

//global custom hook
const useGlobalContext=()=>{
    return useContext(AppContext);
};

export{AppProvider, useGlobalContext};
