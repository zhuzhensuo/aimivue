<template>
  <div>
    <slidenav></slidenav>
    <ptdsjsonpage></ptdsjsonpage>
  </div>
</template>
<script>
import slidenav from './components/slidenav'
import ptdsjsonpage from './components/ptdsjsonpage'
export default {
  name: 'app',
  components:{
  	slidenav,
  	ptdsjsonpage
  }
}
</script>

<style>

</style>
