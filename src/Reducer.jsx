//  const Reducer=(state,action) =>{
//     if(action.type === "HOME_UPDDATE") {
//     return{
//         ...state,
//         name:action.payload.name,
//         image:action.payload.image,

import Services from "./Services";

//     };
// }



// if(action.type === "ABOUT_UPDDATE") {
//     return{
//         ...state,
//         name:action.payload.name,
//         image:action.payload.image,

//     };
// }
// return state;
//     };
//     export default Reducer;
// Reducer.js
const Reducer = (state, action) => {
    switch (action.type) {
        case "HOME_UPDATE":
            return {
                ...state,
                name: action.payload.name,
                image: action.payload.image,
            };
        case "ABOUT_UPDATE":
            return {
                ...state,
                name: action.payload.name,
                image: action.payload.image,
            };

        case "GET_SERVICES":
            return{
                ...state,
                services: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;
