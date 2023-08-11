<template>
  <div class="app-container" v-loading="loading">
    <div class="filter-container">
      <el-form label-width="60px">
        <el-row :gutter="10">
          <el-col :span="4">
            <el-form-item label="关键字">
              <el-input
                style="width: 100%"
                v-model="queryParam.title"
                placeholder="请输入关键字"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="handleSearch"> 搜索 </el-button>
            <el-button @click="handleRefresh"> 重置 </el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-table
      ref="multipleTable"
      :data="data"
      tooltip-effect="dark"
      style="width: 100%"
      border
      fit
      @selection-change="handleSelectMulti"
    >
      <el-table-column label="序号" type="index" width="55" align="center" />
      <el-table-column prop="ordersn" label="订单号" align="center" />
      <el-table-column prop="name" label="产品名称" align="center" />
      <el-table-column prop="img" label="封面图" align="center">
        <template slot-scope="record">
          <el-image
            style="max-width: 100px; max-height: 100px"
            :src="record.row.img"
            :preview-src-list="[record.row.img]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="point" label="积分" align="center" />
      <el-table-column prop="nums" label="兑换数量" align="center" />
      <el-table-column prop="created_at" label="兑换时间" align="center" />
    </el-table>
    <el-pagination
      class="pagination-container"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paginate.current"
      hide-on-single-page
      :page-sizes="paginate.sizes"
      :page-size="paginate.limit"
      :layout="paginate.layout"
      :total="paginate.total"
    />
  </div>
</template>
<script>
import formOperate from "@/layout/mixin/formOperate";
import { mapGetters } from "vuex";
import { VueEditor } from "vue2-editor";

export default {
  mixins: [formOperate],
  components: { VueEditor },
  data() {
    return {
      formName: "domain_record",
      imageAction: process.env.VUE_APP_BASE_API + "/upload/image",
      queryParam: {
        title: "",
        status: "",
      },
      url: "/goods/order",
      formVisible: false,
      cateList: [],
    };
  },
  created() {},
  computed: {
    ...mapGetters(["token"]),
    headers() {
      return {
        authorization: "Bearer " + this.token,
      };
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.icon-logo {
  max-width: 80px;
  max-height: 48px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>