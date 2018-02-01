<template>
    <div class="content">
        <header-bar></header-bar>
        <div class="container">
            <p>This is the homepage</p>
        </div>
    </div>
</template>
<script>
    import HeaderBar from '../components/HeaderBar'

    export default {
        name: 'Home',
        components: {
            HeaderBar
        }
    }
</script>