<template>
  <div class="info">
    <el-card shadow="always">
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-descriptions title="综测查询" direction="vertical" :column="2" border size="medium">
        <el-descriptions-item label="姓名">{{info.name}}</el-descriptions-item>
        <el-descriptions-item label="学号">{{info.id}}</el-descriptions-item>
        <el-descriptions-item label="学院">{{info.college}}</el-descriptions-item>
        <el-descriptions-item label="年级">{{info.grade}}</el-descriptions-item>
        <el-descriptions-item label="专业">{{info.major}}</el-descriptions-item>
        <el-descriptions-item label="个人评分">{{info.gradeperson}}</el-descriptions-item>
        <el-descriptions-item label="班评得分">{{info.gradeclass}}</el-descriptions-item>
        <el-descriptions-item label="院评得分">{{info.gradecollege}}</el-descriptions-item>
        <el-descriptions-item label="综测得分">{{info.gradetrue}}</el-descriptions-item>
        <el-descriptions-item label="用户类别">
          <el-tag size="small">{{info.role}}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>、
  </div>
</template>

<script>
export default {
  name: "person",
  data () {
    return {
      info: {
        name: '左书润',
        id: '202031774250',
        college: '信息学院',
        grade: '2020',
        major: '网络工程',
        role: '学生',
        gradeperson: '80',
        gradeclass: '78',
        gradecollege: '76',
        gradetrue: '77'
      },
      options: [{
        value: '选项1',
        label: '2020春季学期'
      }, {
        value: '选项2',
        label: '2020秋季学期'
      }, {
        value: '选项3',
        label: '2021春季学期'
      }, {
        value: '选项4',
        label: '2020秋季学期'
      }, {
        value: '选项5',
        label: '2022春季学期'
      }],
      value: ''
    };
  },
}
</script>

<style scoped>
.info {
  width: 1240px;
  left: 0;
  right: 0;
  margin: 30px auto;
}
</style>
