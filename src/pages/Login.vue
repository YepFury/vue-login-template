<template>
    <div class="login">
        <form>
            <div class="input-group">
                <label>用户名：</label>
                <input type="text" v-model="userName" placeholder="请输入用户名">
            </div>
            <div class="input-group">
                <label>密码：</label>
                <input type="password" v-model="password" placeholder="请输入密码">
            </div>
            <button type="submit" @click="login">登录</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                userName: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$store.dispatch('getLogin', {
                    userName: this.userName,
                    password: this.password
                }).then(res => {
                    this.$route.push('/')
                })
            }
        }
    }
</script>

<style>

</style>
