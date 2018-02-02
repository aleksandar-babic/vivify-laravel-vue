<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">{{appName}}</a>
            </div>
            <ul class="nav navbar-nav">
                <li>
                    <router-link to="/spa">Dashboard</router-link>
                </li>
                <li>
                    <router-link to="/spa/login" v-if="!$auth.check()">Login</router-link>
                </li>
                <li>
                    <button @click="logout()" v-if="$auth.check()">Logout</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderBar',
        methods: {
            logout() {
                this.$auth.logout({
                    makeRequest: true,
                    data: {},
                    error: (data) => {
                        alert(`Error while logging out:\n${data}`);
                    },
                    redirect: '/spa/login'
                });
            }
        },
        data() {
            return {
                appName: 'TODO SPA'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
