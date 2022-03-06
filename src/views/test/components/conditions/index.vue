<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper_item"><span>昵称</span><el-input /></div>
    <div class="conditions-wrapper_item"><span>职位</span><el-input /></div>
    <div class="conditions-wrapper_item"><span>年限</span><el-input /></div>
    <div class="conditions-wrapper_item"><span>手机号</span><el-input /></div>
    <el-row style="margin-left:10px">
      <el-button type="primary" icon="el-icon-search">搜素</el-button>
      <el-button type="info">重置</el-button>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conditions-wrapper{
    display: flex;
    align-items: center;
    width: 100%;
    &_item {
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
           width: 50px;
           margin-left: 10px;
           font-size: 12px;
        }
    }
}
</style>
