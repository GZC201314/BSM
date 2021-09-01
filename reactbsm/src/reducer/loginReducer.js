import axios from "axios";
const defaultState = {
    username:"",
    password:"",
    validateCode:"",
    validateCodePic:""
}
export default (state = defaultState,action) =>{
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "user_login_action":
            console.log(action.data);
            axios.post('/userAction!login.action',action.data).then(res => {
                localStorage.setItem('userData', JSON.stringify(res.data.obj));
            });
            break;
        case "create_validateCode_action":
            // newState.validateCodePic ;
                axios.get('/userAction!check.action',action.data).then(res => {
                    debugger;
                    newState.validateCodePic = res.data.data;
                });
            break;
        case "input_value_submit_handle":
            break;
        default:
            break;
    }
    return newState;
}
