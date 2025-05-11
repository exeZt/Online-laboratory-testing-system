import { appApiIns } from "./app-api";
import axios from 'axios';

export function getUserStatus(){
    console.log(appApiIns.headers)
    return appApiIns.get('user_status');
}

export function getUserData(){
    return appApiIns.get('user_data');
}

export const getStudentById = (id) => {
  return axios.get(`/api/teachers/students/${id}`);
};
