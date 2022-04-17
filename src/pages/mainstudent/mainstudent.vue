<template>
  <div class="box1">
    <el-menu :default-active="activeIndex" mode="horizontal" class="el-menu-demo" type="border-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="个人中心" name="first">
          <person></person>
        </el-tab-pane>
        <el-tab-pane label="综测评定" name="second">
          <evaulate></evaulate>
        </el-tab-pane>
        <el-tab-pane label="综测查询" name="third">
          <query></query>
        </el-tab-pane>
      </el-tabs>
    </el-menu>
  </div>
</template>

<script>
import person from "./person";
import query from "./query";
import evaulate from "./evaulate";
export default {
  components: { person, evaulate, query },
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