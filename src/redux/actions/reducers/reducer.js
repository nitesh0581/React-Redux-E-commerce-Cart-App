
    const INIT_STATE = {
        carts: [],
    }

    const cartReducer = (state = INIT_STATE, action) => {

        switch (action.type) {
            case "ADD_CART": {

                const itemIndex=state.carts.findIndex((item)=>item.id=== action.payload.id);

                // if qnty when add item
                if(itemIndex >=0){
                    state.carts[itemIndex].qnty+=1;
                    return {
                        ...state,
                        carts: [...state.carts]
                    }
                }else{
                    // if qnty is not repeating then we can directly make qnty 1
                    const temp={...action.payload, qnty:1}
                    return{
                        ...state,
                        carts:[...state.carts, temp]
                }
                }                                                                                                         
            }
            case "RMV_CART":{

                const data=state.carts.filter((e)=>e.id!==action.payload);
                return{
                    ...state,
                    carts:data,
                }
            }

            case "RMV_ONE":{

                const itemIndex_Dec=state.carts.findIndex((item)=>item.id===action.payload.id);
                
                // if qnty is more than 1 then remove one onclick
                if(state.carts[itemIndex_Dec].qnty >= 1){                                                                                                   
                    const dltiteams = state.carts[itemIndex_Dec].qnty -= 1
                    console.log([...state.carts, dltiteams]);
    
                    return {
                        ...state,
                        carts:[...state.carts],
                        
                    }
                    
                }
                // but if qnty is already 1 then on on click dlt that item
                else if(state.carts[itemIndex_Dec].qnty === 1 ){
                    const data = state.carts.filter((el)=>el.id !== action.payload);
    
                    return {       
                        ...state,
                        carts:data
                    }
                   
                }
            }

            default:
                return state
        }
            
    }

    export default cartReducer;