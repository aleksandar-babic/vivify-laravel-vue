<template>
    <div>
        <span v-if="tasks"><h1>{{title}}
        <small class="text-muted">{{titleDescription}}</small></h1></span>
        <div class="task-list" v-if="tasks">
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Content</th>
                    <th scope="col">Done</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="task in tasks">
                    <th scope="row">{{task.id}}</th>
                    <td>{{task.content}}</td>
                    <td><input type="checkbox" :checked="task.done" disabled/></td>
                    <td :class="{low: task.priority === 'low'
                    , medium: task.priority === 'medium',
                     high: task.priority === 'high'}">{{task.priority}}
                    </td>
                    <td>
                        <button class="btn btn-primary" @click="setEditTask(task)">Modify</button>
                        <button class="btn btn-danger" @click="deleteTask(task)">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="add-task">
                    <h2>{{addTitle}}</h2>
                    <div class="form-group">
                        <label for="content">Content: </label>
                        <textarea class="form-control" v-model="newTask.content" id="content"
                                  placeholder="Task content"></textarea>
                    </div>
                    <div class="form-check">
                        <label for="done">Done? </label>
                        <input type="checkbox" class="form-check-input" id="done" v-model="newTask.done"/>
                    </div>
                    <div class="form-group">
                        <label for="priority">Priority: </label>
                        <select id="priority" v-model="newTask.priority">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <button class="btn btn-success" @click="addTask(newTask)">Add task</button>
                </div>
            </div>
            <div class="col-md-4" v-if="editedTask.content">
                <div class="edit-task">
                    <h2>{{editTitle}}</h2>
                    <div class="form-group">
                        <label for="contentEdit">Content: </label>
                        <textarea class="form-control" v-model="editedTask.content" id="contentEdit"
                                  placeholder="Task content"></textarea>
                    </div>
                    <div class="form-check">
                        <label for="doneEdit">Done? </label>
                        <input type="checkbox" class="form-check-input" id="doneEdit" v-model="editedTask.done"/>
                    </div>
                    <div class="form-group">
                        <label for="priorityEdit">Priority: </label>
                        <select id="priorityEdit" v-model="editedTask.priority">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <button class="btn btn-success" @click="editTask(editedTask)">Edit task</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                title: 'TODO Tasks',
                titleDescription: 'all your todo tasks will be shown in table below',
                addTitle: 'Add task',
                editTitle: 'Edit task',
                newTask: {
                    content: '',
                    done: false,
                    priority: 'low'
                },
                editedTask: {}
            }
        },
        created() {
            this.getTasks();
        },
        computed: mapState({
            tasks: state => state.tasks
        }),
        methods: {
            ...mapActions([
                'getTasks',
                'addTask',
                'editTask',
                'deleteTask',
                'updateTask'
            ]),
            setEditTask(task) {
                this.editedTask = task;
            }
        }
    };
</script>
<style>
    .low {
        color: #33cccc
    }

    .medium {
        color: #888812
    }

    .high {
        color: #ff0000
    }

</style>