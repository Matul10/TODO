const initialState ={
    list:[]
}

const TodoReducer=(state=initialState,action)=>{
    switch(action.type){
        case  "add_todo":
            const{id,data,checked}=action.payload;
            const newList = [
                ...state.list,
                {
                  id: id,
                  data: data,
                  checked: checked
                }
              ];
              console.log(newList); 
              return {
                ...state,
                list: newList
              };
        
        case "delete_todo":
            // const {id} = action.payload;
            const newLst = state.list.filter((ele)=>ele.id!==action.payload.id);
            console.log(newLst);
            return {
                ...state,
                list: newLst
              };


        case "update_todo":
                // const {id} = action.payload;
                const updatedList = state.list.map((ele) =>
                ele.id === action.payload.id ? { ...ele, checked: action.payload.checked } : ele
              );
            console.log(updatedList);
            return {
                  ...state,
                  list: updatedList
                };

        default:
            return state;
        
            
    }
}

export default TodoReducer;