<template>
  <el-form
    ref="form"
    label-position="left"
    :model="form"
    label-width="80px"
    style="margin-top: 40px; margin-left: 40px"
  >
    <el-form-item label="活动名称" style="width: 420px">
      <s-validate #default="{ validate }" :rules="rules" :value="form.name">
        <el-input v-model="form.name" @blur="validate" />
      </s-validate>
    </el-form-item>

    <el-form-item label="活动区域" style="width: 420px">
      <el-select
        #default="{ validate }"
        v-model="form.region"
        :rules="rules"
        :value="form.title"
        placeholder="请选择活动区域"
      >
        <el-option label="区域一" value="shanghai" @blur="validate" />
        <el-option label="区域二" value="beijing" @blur="validate" />
      </el-select>
    </el-form-item>

    <el-form-item label="活动时间">
      <el-col :span="9">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="选择日期"
          style="width: 420px;"
        />
      </el-col>
      <el-col class="line" :span="1">-</el-col>
      <el-col :span="9">
        <el-time-picker
          v-model="form.date2"
          placeholder="选择时间"
          style="width: 420px;"
        />
      </el-col>
    </el-form-item>

    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" />
        <el-checkbox label="地推活动" />
        <el-checkbox label="线下主题活动" />
        <el-checkbox label="单纯品牌曝光" />
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="即时配送">
      <el-switch v-model="form.switch1" />
    </el-form-item>

    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="1">线上品牌商赞助</el-radio>
        <el-radio label="2">线下场地免费</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="活动形式" style="width: 420px">
      <s-validate #default="{ validate }" :rules="rules" :value="form.contoin">
        <el-input
          v-model="form.contoin"
          type="textarea"
          :rows="3"
          resize="none"
          @blur="validate"
        />
      </s-validate>
    </el-form-item>

    <el-form-item>
      <el-button type="primary">立即创建</el-button>
      <el-button type="danger">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import SValidate from '../svalidate.vue'
export default {
  components: {
    SValidate
  },
  data() {
    return {
      form: {
        title: '',
        region: '',
        date1: '',
        date2: '',
        type: '',
        contoin: '',
        resource: '',
        switch1: false,
        switch2: true
      },
      value: '',
      rules: [
        {
          test: function(value) {
            return value
          },
          message: '不能为空'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  color: #999;
  margin-left: 5px;
}
</style>
