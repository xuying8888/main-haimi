<template>
  <div>
     <buyCar></buyCar>
     <buyThing></buyThing>
  </div>
</template>

<script>
import buyCar from './component/buyCar'
import buyThing from './component/buything'
export default {
  data () {
    return {

    }
  },
  components:{
    buyCar,
    buyThing
  }
}
</script>
<style lang='less' scoped>

</style>
