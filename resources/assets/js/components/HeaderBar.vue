<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">{{appName}}</a>
            </div>
            <ul class="nav navbar-nav">
                <li><router-link to="/spa">Dashboard</router-link></li>
                <li><router-link to="/spa/login">Login</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderBar',
        data () {
            return {
                appName: 'TODO SPA'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
