<template>
    <div class="content">
        <header-bar></header-bar>
        <div class="container">
            <todo-list></todo-list>
        </div>
    </div>
</template>
<script>
    import HeaderBar from '../components/HeaderBar'
    import TodoList from '../components/TodoList'

    export default {
        name: 'Home',
        components: {
            HeaderBar,
            TodoList
        }
    }
</script>