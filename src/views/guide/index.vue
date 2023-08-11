<template>
  <div class="app-container" v-loading="loading">
    <div class="filter-container">
      <el-input
        v-model="queryParam.title"
        placeholder="请输入关键字"
        clearable
        class="filter-item form-search-input"
      />
      <el-button type="primary" @click="handleSearch"> 搜索 </el-button>
      <el-button @click="handleRefresh"> 重置 </el-button>
      <el-button
        size="small"
        type="primary"
        @click="exportExcelTemplate"
        class="fr"
      >
        导出
      </el-button>
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
      <el-table-column type="index" width="55" align="center" />
      <el-table-column prop="secretary_name" label="企业信息" align="center" />
      <el-table-column prop="title" label="指导简要" align="center" />
      <el-table-column prop="img" label="指导图片" align="center">
        <template slot-scope="record">
          <el-image
            style="max-width: 100px; max-height: 100px"
            :src="record.row.img"
            :preview-src-list="[record.row.img]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="指导记录" align="center" />
      <el-table-column prop="created_at" label="创建时间" align="center" />
      <el-table-column label="操作" align="center">
        <template slot-scope="job">
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(job.row.cate_id)"
          />
        </template>
      </el-table-column>
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
      url: this.$route.fullPath,
      formVisible: false,
      formFieldsData: {
        status: 1,
        title: "",
      },
      // 表单验证
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
      },
    };
  },
  created() {
    this.url = this.$route.fullPath;
  },
  computed: {
    ...mapGetters(["token"]),
    headers() {
      return {
        authorization: "Bearer " + this.token,
      };
    },
  },
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