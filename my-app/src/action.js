import Axios from 'axios';

export const fetchPosts = () => {
    return async (dispatch,getState) =>{
        const response = await Axios.get("https://jsonplaceholder.typicode.com/users");
        
        console.log(response.data)
        dispatch({
            type : "FETCH_POSTS",
            payload : response.data
        });
    
    };
};

// export const fetchPosts =()=>{

//     const promise = Axios.get("https://jsonplaceholder.typicode.com/users")
//     return{
//         type :"FETCH_POSTS",
//         payload : promise,
//     }
// }

// export const decrement =()=>{
//     return{
//         type :"DECREMENT"
//     }
// }