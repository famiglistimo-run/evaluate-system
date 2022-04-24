<template>
  <div class="box1">
    <el-menu :default-active="activeIndex" mode="horizontal" class="main" type="border-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="个人信息" name="first">
          <person></person>
        </el-tab-pane>
        <el-tab-pane label="学院管理" name="second">
          <collageadmin></collageadmin>
        </el-tab-pane>
        <el-tab-pane label="专业管理" name="third">
          <majoradmin></majoradmin>
        </el-tab-pane>
        <el-tab-pane label="学期管理" name="fourth">
          <semesteradmin></semesteradmin>
        </el-tab-pane>
        <el-tab-pane label="用户录入" name="fifth">
          <adduser></adduser>
        </el-tab-pane>
        <el-tab-pane label="用户管理" name="sixth">
          <useradmin></useradmin>
        </el-tab-pane>
      </el-tabs>

    </el-menu>
  </div>
</template>

<script>
import person from '../mainadmin/person.vue';
import collageadmin from '../mainadmin/collageadmin.vue';
import majoradmin from './majoradmin.vue';
import Semesteradmin from './semesteradmin.vue';
import Adduser from './adduser.vue';
import Useradmin from './useradmin.vue';
export default {
  components: { person, collageadmin, majoradmin, Semesteradmin, Adduser, Useradmin },
  name: "mainstudent",
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
.el-menu.el-menu--horizontal {
  border-bottom: solid 0 #e6e6e6;
}
</style>