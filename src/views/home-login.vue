<template>
  <div>
     <van-nav-bar
      title="用户登录"
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
        <van-button  block  color="#fa6d1d" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <div class="goto-register" > 
      <router-link to="/register"> 注册账号 </router-link>
    </div> 
  </div>
</template>

<script>
import {login} from '@/api/user'
import { Notify } from 'vant'
import { setToken } from "../utils/token";

export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods:{
  async  onSubmit(){
     let res =  await login({
          username: this.username,
          password: this.password
        })
        console.log(res)
        const {token} = res.data.data
        console.log("token:",token)

        setToken(token)
        Notify({type: "success", message: '登录成功'})
        this.$router.push("/")
      }
  }  
}
</script>

<style>
  .goto-register {
    text-align: right;
    padding-right: 18px;
  }
</style>
