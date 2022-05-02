<template>
  <div id="info">
    <el-card shadow="always">
      <el-descriptions title="个人信息" direction="vertical" :column="2" border size="medium" labelStyle="height: 70px" contentStyle="height: 70px">
        <el-descriptions-item label="姓名">{{info.name}}</el-descriptions-item>
        <el-descriptions-item label="工号">{{info.id}}</el-descriptions-item>
        <el-descriptions-item label="学院">{{info.college}}</el-descriptions-item>
        <el-descriptions-item label="管理专业">{{info.major}}</el-descriptions-item>
        <el-descriptions-item label="用户类别">
          <el-tag size="small">{{info.role}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="密码">
          <el-button type="text" @click="dialogFormVisible = true">修改密码</el-button>

        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="450px">
      <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="原密码" prop="oldPwd">
          <el-input v-model="form.oldPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input v-model="form.newPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="again">
          <el-input v-model="form.again" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button>确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "person",
  data () {
    return {
      dialogFormVisible: false,
      form: {
        oldPwd: '',
        newPwd: '',
        again: ''
      },
      rules: {
        oldPwd: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur' }
        ],
        again: [
          { required: true, trigger: 'blur' }
        ]
      },
      info: {
        name: '顾涛',
        id: '202031774250',
        college: '信息学院',
        major: '网络工程,电子计算机工程',
        role: '管理员'
      },
    };
  },
}
</script>

<style scoped>
#info {
  width: 1040px;
  left: 0;
  right: 0;
  margin: 30px auto;
}
.el-descriptions {
  font-size: 16px;
}
.el-descriptions--medium.is-bordered .el-descriptions-item__cell {
  padding: 20px;
}
</style>
