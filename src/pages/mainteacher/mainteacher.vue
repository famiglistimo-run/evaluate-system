<template>
  <div class="box1">
    <el-menu :default-active="activeIndex" mode="horizontal" class="main" type="border-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="个人中心" name="first">
          <person></person>
        </el-tab-pane>
        <el-tab-pane label="专业总况" name="second">
          <majorstatus></majorstatus>
        </el-tab-pane>
        <el-tab-pane label="综测审核" name="third">
          <scoreexamine></scoreexamine>
        </el-tab-pane>
      </el-tabs>

    </el-menu>
  </div>
</template>

<script>
import person from '../mainadmin/person.vue';
import Majorstatus from './majorstatus.vue';
import Scoreexamine from './scoreexamine.vue';
export default {
  components: { person, Majorstatus, Scoreexamine },
  name: "mainteacher",
  data () {
    return {
      activeIndex: '1',
      activeName: 'first',
    };
  },
}
</script>

<style scoped>
.box1 {
  margin: 0 auto;
}
</style>