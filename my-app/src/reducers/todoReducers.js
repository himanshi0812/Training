const initialState = {
    data : [],
};

const todos = (state = initialState , action) => {
 switch(action.types){
     case 'ADD_TODO':
         return {
             ...state,
             data:[...state.data , action.message],
         };
     case 'DELETE_TODO':
         return {};
     case 'UPDATE_TODO':
         return {};
     default :
      return state;
 }
};

export default todos;