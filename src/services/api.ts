import api from './interceptor';
import { getSession, isLogged } from './session';

const token = getSession();

export async function getListTrainingsAvaliableByUserId() {
    if (!isLogged()) {
        return;
    }

    const response = await api.get(`student-training/${token}/available-trainings`);
    return !response.data ? [] : response.data;
}

export async function getEnabledTrainingByUserId() {
    if (!isLogged()) {
        return;
    }

    const response = await api.get(`student-training/${token}/enabled-training`);

    return !response.data ? [] : response.data;
}

export async function postStudentTraining(trainingUuid: string) {
    if (!isLogged()) {
        return;
    }

    const response = await api.post('student-training', {
       'user_uuid': token,
       'training_uuid': trainingUuid,
       'status': 'ENABLED'
    });

    return !response.data ? [] : response.data;
}

export async function postStudentTrainingProgress(studentTrainingUuid: string, activityUuid: string) {
    if (!isLogged()) {
        return;
    }

    const response = await api.post('student-training-progress', {
       'student_training_uuid': studentTrainingUuid,
       'activity_uuid': activityUuid,
       'status': 'NOT_STARTED'
    });

    return !response.data ? [] : response.data;
}

export async function patchChangeStatusStudentTrainingProgress(studentTrainingUuid: string, activityUuid: string, status: string) {
    if (!isLogged()) {
        return;
    }

    const response = await api.patch(`student-training-progress/${studentTrainingUuid}/student-training/${activityUuid}/activity/change-status`, {
        'status': status
    });
    return !response.data ? [] : response.data;
}

export async function getOtherTrainings() {
    if (!isLogged()) {
        return;
    }

    const response = await api.get(`student-training/${token}/other-trainings`);
    return !response.data ? [] : response.data;
}

export async function patchChangeStatusStudentTraining(studentTrainingUuid: string) {
    if (!isLogged()) {
        return;
    }
    
    const response = await api.patch(`student-training/${studentTrainingUuid}/change-status`, {
        'status': 'ENABLED'
    });
    return !response.data ? [] : response.data;
}
