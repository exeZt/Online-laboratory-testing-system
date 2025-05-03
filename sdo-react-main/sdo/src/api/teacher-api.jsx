import { appApiIns } from "./app-api";

export function getLabs() {
  return appApiIns.get("teacher/labs");
}

export function getGroups() {
  return appApiIns.get('api/teachers/groups');
}

export function getStudentsByGroup(groupId) {
  return appApiIns.get(`api/teachers/groups/${groupId}/students`);
}

export function getSubjects() {
  return appApiIns.get(`api/teachers/subjects`);
}

export function createLab(data) {
  return appApiIns.post(`api/teachers/lab`, data);
}

export function getUnpublishedLabs() {
  return appApiIns.get(`api/teachers/unpublished_labs`);
}

export function deleteUnpublishedLab(labId) {
  return appApiIns.delete(`api/teachers/unpublished_labs/${labId}`);
}

export function publishUnpublishedLab(labId) {
  return appApiIns.post(`api/teachers/unpublished_labs/${labId}/publish`);
}