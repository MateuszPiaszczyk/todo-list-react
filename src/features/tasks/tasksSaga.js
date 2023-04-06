import { 
    call, 
    delay, 
    put, 
    select, 
    takeEvery, 
    takeLatest 
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { 
    fetchExampleTasks, 
    fetchExampleTasksError, 
    fetchExampleTasksSuccess, 
    selectTasks 
} from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "ENG: Something went wrong | PL: Coś poszło nie tak")
    }
} 

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery ("*", saveTasksInLocalStorageHandler)
}
