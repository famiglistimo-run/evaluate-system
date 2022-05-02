<template>
  <div class="main">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="number" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="major" label="专业" width="180">
      </el-table-column>
      <el-table-column prop="address" label="自评综测成绩">
      </el-table-column>
      <el-table-column prop="mscore" label="班评">
        <template slot-scope="scope">
          <el-input id="input" type="text" v-model="scope.row.input"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="cz" label="操作">
        <el-link type="primary">查看证明材料</el-link>
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
        name: '王',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
      },
      {
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
      },
      {
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
      },
      {
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
      },
      {
        number: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        major: '网络工程',
        level: '2020',
      },]
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
