import { appApiIns } from "./app-api";

export function uploadByTaskId(task_id, file){
    return appApiIns.post('upload', {
            file: file
        }, {
        params: {
            task_id: task_id
        }
    });
}

export function testingTask(task_id){
    return appApiIns.post('test', null, {
        params: {
            task_id: task_id
        }
    });
}

export function getTask(task_id){
    return appApiIns.get('task', null, {
        params: {
            task_id: task_id
        }
    });
}