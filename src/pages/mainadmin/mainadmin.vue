<template>
  <div class="box1">
    <el-menu :default-active="activeIndex" mode="horizontal" class="main" type="border-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="个人信息" name="first">
        </el-tab-pane>
        <el-tab-pane label="学院管理" name="second">
        </el-tab-pane>
        <el-tab-pane label="专业管理" name="third">
        </el-tab-pane>
        <el-tab-pane label="学期管理" name="fourth">
        </el-tab-pane>
        <el-tab-pane label="用户录入" name="fifth">
        </el-tab-pane>
        <el-tab-pane label="用户管理" name="sixth">
        </el-tab-pane>
      </el-tabs>

    </el-menu>
  </div>
</template>

<script>
export default {
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
</style>