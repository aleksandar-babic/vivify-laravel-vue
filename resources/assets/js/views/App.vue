<template>
    <di>
        <p>
            <router-link :to="{ name: 'home' }">Home</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </di>
</template>
<script>
    export default {}
</script>