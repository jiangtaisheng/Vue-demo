<template>
   <div>
    电影
    <ul>
      <li v-for="(item,index) in arr" :key="index"  @click="fn_tapItem(item)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: "金瓶梅",
      price: 100,
      arr: [
        {
          name: "金瓶梅1",
          price: 1,
          id: 1
        },
        {
          name: "金瓶梅2",
          price: 1,
          id: 2
        },
        {
          name: "金瓶梅3",
          price: 1,
          id: 3
        }

      ]
    }
  },
  methods: {

    fn_compareArray() {
      let arr = [
     {
      name: "金瓶梅1",
      price: 1,
      id: 1
     },
     {
      name: "金瓶梅2",
      price: 1,
      id: 2
     },
     {
      name: "金瓶梅3",
      price: 1,
      id: 3
     }

      ]
      let arr2 = [
     {
      name: "金瓶梅1",
      price: 1,
      id: 0
     },
     {
      name: "金瓶梅2",
      price: 1,
      id: 2
     },
     {
      name: "金瓶梅3",
      price: 1,
      id: 3
     }
      ]

      let sameList = arr.filter((item) => arr2.some((it) => it.id == item.id))
       console.log(sameList)
    },
    fn_tapItem: function(item) {

      console.log(item.name)
    }
  }
}
</script>

<style>

</style>
