<template>
  <div>
    <slidenav></slidenav>
    <aboutus></aboutus>
  </div>
</template>
<script>
import slidenav from './components/slidenav'
import aboutus from './components/aboutus'
export default {
  name: 'app',
  components:{
  	slidenav,
  	aboutus
  }
}
</script>

<style>

</style>
