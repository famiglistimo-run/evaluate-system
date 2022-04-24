<template>
  <div class="main">
    <el-card shadow="always">
      <h2>用户信息</h2>
      <el-form ref="form" :model="form" label-width="120px" class="table">
        <el-form-item label="学号/工号：" width="150">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="专业/所带专业：">
          <el-input v-model="form.major"></el-input>
        </el-form-item>
        <el-form-item label="年级(非必填)：">
          <el-input v-model="form.grade"></el-input>
        </el-form-item>
        <el-form-item label="角色：">
          <el-select v-model="form.role" placeholder="请选择用户权限">
            <el-option label="学生" value="学生"></el-option>
            <el-option label="管理员" value="管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button>确认</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "collageadmin",
  data () {
    return {
      form: {
        number: '',
        name: '',
        major: '',
        grade: '',
        role: ''
      }
    }
  }
}
</script>

<style scoped>
.main {
  width: 840px;
  margin: auto;
}
.el-input {
  width: 560px;
}
.el-select {
  width: 560px;
}
</style>
