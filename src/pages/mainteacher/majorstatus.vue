<template>
  <div class="main">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="number" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="综测成绩">
      </el-table-column>
      <el-table-column prop="major" label="专业" width="180">
      </el-table-column>
      <el-table-column prop="level" label="年级" width="180">
      </el-table-column>
      <el-table-column prop="role" label="角色：" width="180">
      </el-table-column>
      <el-table-column label="权限">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="2" active-color="#13ce66" inactive-color="#B9B9B9" @change="changeSwitch(scope.row)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "collageadmin",
  data () {
    return {
      tableData: [{
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
        status: 1,
        role: '学生'
      },
      {
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
        status: 1,
        role: '学生'
      },
      {
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
        status: 1,
        role: '学生'
      },
      {
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
        status: 1,
        role: '学生'
      },
      {
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
        status: 0,
        role: '学生'
      },],
    }
  },
  methods: {
    changeSwitch () {
      console.log('改变权限')
    }
  }
}
</script>

<style scoped>
.main {
  width: 1640px;
  margin: 0 auto;
}
</style>
