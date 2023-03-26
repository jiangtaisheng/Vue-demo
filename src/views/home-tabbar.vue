<template>
 <div>
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item class="tab-item" v-for="(item,index) in tabs" :key="index" :to="item.path" :icon="item.icon">
        {{item.title}}
      </van-tabbar-item>
    </van-tabbar>
 </div>
</template>

<script>
export default {
  data(){
    return {
      active: 0,
      tabs: [
        {
          title: '电影',
          icon: 'home-o',
          path: '/movie'
        },
        {
          title: '影院',
          icon:'search',
          path: '/cinema'
        },
        {
          title: '特惠',
          icon: 'friends-o',
          path: '/preference'
        },
        {
          title: '我的',
          icon:'setting-o',
          path: '/mine'
        }
      ]
    }
  }
}
</script>

<style>

</style>
