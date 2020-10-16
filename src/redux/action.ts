export const setUserState = (payload:any) =>{
    console.log(payload);
    return {type : 'Add_User', userData : payload}
}