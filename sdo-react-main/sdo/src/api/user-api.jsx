import { appApiIns } from "./app-api";

export function getUserStatus(){
    return appApiIns.get('user_status');
}

export function loginUser(username, password){
    return appApiIns.post('login',{
        username: username,
        password: password
    });
}

export function getUserData(){
    return appApiIns.get('user_data');
}
