<template>
  <div class="main">
    <div class="contain">
      <p>评定开始时间：</p>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="contain">
      <p>评定结束时间：</p>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="contain">
      <p>学生填写时间：</p>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="contain2">
      <el-button type="primary">重置</el-button>
      <el-button type="primary">确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "collageadmin",
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>
.main {
  width: 640px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}
.contain {
  display: flex;
  margin-top: 20px;
}
.contain2 {
  display: flex;
  margin: 20px auto;
}
.el-select {
  width: 400px;
}
</style>
