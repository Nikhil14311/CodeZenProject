const initialState = {
    users : []
}

export const commonReducer = (state = initialState, action) => {
    console.log("actions for reducer",action)
    switch(action.type){
        case 'USER_DATA' : 
            return {
                ...state,
                users : [...state.users,action.payload] 
            }
        default : 
            return state
    }
}