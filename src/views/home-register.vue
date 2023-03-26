<template>
   <div>
     <van-nav-bar
      title="用户注册"
    />    
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button  block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <div class="goto-login" > 
      <router-link to="/login"> 有账号, 去登录 </router-link>
    </div> 
   </div>
</template>

<script>
import { Notify } from 'vant'
import {register} from "../api/user"
export default {

    data(){
      return {
        username: '',
        password: ''
      }
    },
    methods: {
     async onSubmit(){
        let res = await register({
                                    username: this.username, 
                                    password: this.password
                                })
        console.log(res)
        Notify({type: "success", message: '注册成功！'})
        this.$router.push('/login')
      }
    }
    
  }
</script>

<style>
  .goto-login {
    text-align: right;
    padding-right: 18px;
  }
</style>
