<template>
  <div class="main">
    <div class="contain">
      <p>学期名称：</p>
      <el-input v-model="semesterName" placeholder="请输入学期名称"></el-input>
    </div>
    <div class="contain">
      <p>请选择学院：</p>
      <el-select v-model="collegeId" placeholder="请选择">
        <el-option v-for="item in college" :key="item.collegeId" :label="item.collegeName" :value="item.collegeId">
        </el-option>
      </el-select>
    </div>
    <div class="contain">
      <p>评测开始时间：</p>
      <el-date-picker
        v-model="startDate"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="contain">
      <p>填报结束时间：</p>
      <el-date-picker
        v-model="fillEndDate"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="contain">
      <p>审核结束时间：</p>
      <el-date-picker
        v-model="examineEndDate"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="contain2">
      <el-button type="primary">重置</el-button>
      <el-button type="primary" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "collageadmin",
  created() {
    this.getCollegeList();
  },
  data () {
    return {
      semesterName: '',
      college: [{
        collegeId: '',
        collegeName: ''
      }],
      collegeId: '',
      startDate: '',
      fillEndDate: '',
      examineEndDate: ''
    }
  },
  methods: {
    getCollegeList(){
      this.api.get("/swpu/college").then(res =>{
        if (res.data.code === '1'){
          console.log(res.data.data.rows)
          this.college = res.data.data.rows;
        }
      })
    },
    submit(){
      let param = {
        "collegeId": this.collegeId,
        "examineEndDate": this.examineEndDate,
        "fillEndDate": this.fillEndDate,
        "semesterName": this.semesterName,
        "startDate": this.startDate
      }
      this.api.post("/swpu/semester/addSemester",param).then(res =>{
        if (res.data.code === '1'){
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'success'
          });
        }else {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'error'
          });
        }
      })
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
