export const setTasksState = (state, tasks) => {
    state.tasks = tasks;
};
export const deleteTaskState = (state, task) => {
    const taskIndex = state.tasks.indexOf(task);
    state.tasks.splice(taskIndex, 1);
};
export const addTaskState = (state, task) => {
    state.tasks.push(task);
};
export const editTaskState = (state, task) => {
    const taskIndex = state.tasks
        .findIndex(e => e.id === task.id);
    state.tasks.splice(taskIndex, 1, task);
};