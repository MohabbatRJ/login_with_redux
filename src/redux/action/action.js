export const getLogin = (payload) => {
    console.log("action is called")
    return{
      type: "USER_SUCCESS",
      payload
    }
}
