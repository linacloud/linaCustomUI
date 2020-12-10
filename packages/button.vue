<template>
  <div>
    <button class="el-button" :class="['el-button--' + type]">123</button>
    {{ type }}
  </div>
</template>

<script>
export default {
  name: "LinaButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
  created() {
    console.log(this.type);
  },
  mounted() {
    console.log(this.type);
  },
  watch: {
    type(newval, oldValue) {
      console.log(newval, oldValue);
      // this.value = this.demo;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.el-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
</style>
