const BASEURL = window.BASE_URL;

export const getTasks = async (context) => {
    try {
        const tasks = await Vue.axios
            .get(`${BASE_URL}/tasks`);
        context.commit('setTasksState', tasks.data);
    } catch (err) {
        console.error(err);
    }
};
export const deleteTask = async (context, task) => {
    try {
        const taskResponse = await Vue.axios
            .delete(`${BASE_URL}/tasks/${task.id}`);
        context.commit('deleteTaskState', task);
    }
    catch (err) {
        console.error(err);
    }
};
export const addTask = async (context, task) => {
    try {
        const taskResponse = await Vue.axios
            .post(`${BASE_URL}/tasks/`, task);
        context.commit('addTaskState', taskResponse.data);
    }
    catch (err) {
        console.error(err);
    }
};
export const editTask = async (context, task) => {
    try {
        const taskResponse = await
            Vue.axios
                .put(`${BASE_URL}/tasks/${task.id}`, task);
        context.commit('editTaskState', taskResponse.data);
    } catch (err) {
        console.error(err);
    }
};