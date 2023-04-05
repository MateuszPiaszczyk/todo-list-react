import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import tasksReducer from "./features/tasks/tasksSlice";

const sagaMiddlewere = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddlewere],
});

sagaMiddlewere.run(rootSaga);

export default store;
