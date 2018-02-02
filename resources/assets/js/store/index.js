import Vue from 'vue'
import Vuex from 'vuex'
import {setTasksState, addTaskState, deleteTaskState, editTaskState} from './mutations';
import {getTasks, editTask, deleteTask, addTask} from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        setTasksState,
        addTaskState,
        deleteTaskState,
        editTaskState
    },
    actions: {
        getTasks,
        editTask,
        deleteTask,
        addTask
    }
});