<template>
  <div>
     <typeTitleList></typeTitleList>
     <router-view></router-view>
  </div>
</template>

<script>
import typeTitleList from './component/typetitlelist'
import typeCont from './children/typecont'
import typeType from './children/typetype'
export default {
  data () {
    return {

    }
  },
  components: {
    typeTitleList,
    typeCont,
    typeType
  }
}
</script>
<style lang='less'>
</style>
