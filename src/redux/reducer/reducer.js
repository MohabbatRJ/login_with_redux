const initialState = {
    isAuthenticated: false,
    user:{
        email:'user@gmail.com', 
        pass:'asdf'
    }
};

const AuthReducer   = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log('reducer called', action);
            console.log('reducer called', action.payload);
          return {
            ...state,
            isAuthenticated: action.payload,
        }
        default:
            return state;
        }
    };

export default AuthReducer;