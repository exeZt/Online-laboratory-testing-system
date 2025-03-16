import { appApiIns } from "./app-api";

export function uploadByTaskId(task_id, file){
    return appApiIns.post(`upload/${task_id}`, {
            file: file
        });
}

export function testingTask(task_id){
    return appApiIns.post(`test/${task_id}`, null);
}

export function getTask(task_id){
    return appApiIns.get(`task/${task_id}`);
}