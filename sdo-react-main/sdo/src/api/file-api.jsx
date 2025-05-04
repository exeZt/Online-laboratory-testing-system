import { appApiIns } from "./app-api";
import axios from "axios";

export function getTaskById(taskId) {
    return appApiIns.get(`/task/${taskId}`);
  }

  export function uploadByTaskId(taskId, formData) {
    return appApiIns.post(`/upload/${taskId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

export function testingTask(taskId) {
    return appApiIns.post(`/test/${taskId}`);
  }

export function getTask(task_id){
    return appApiIns.get(`task/${task_id}`);
}

export const deleteSolutionById = (solutionId) => {
  return axios.delete(`/solutions/${solutionId}`);
};