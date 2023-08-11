<template>
  <div class="app-container" v-loading="loading">
    <div class="filter-container">
      <el-form label-width="80px" :inline="true">
        <el-form-item label="关键字">
          <el-input v-model="queryParam.title" clearable />
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="queryParam.start_at"
            class="filter-item"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="queryParam.end_at"
            class="filter-item"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">
          搜索
        </el-button>
        <el-button @click="handleRefresh" icon="el-icon-refresh">
          重置
        </el-button>
        <el-button
          icon="el-icon-download"
          type="primary"
          class="fr"
          @click="handleCreate()"
        >
          导出
        </el-button>
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
      <el-table-column prop="company_name" label="企业名称" align="center" />
      <el-table-column prop="title" label="指导简要" align="center" />
      <el-table-column prop="img" label="指导图片" align="center" />
      <el-table-column prop="content" label="指导记录" align="center" />
      <el-table-column prop="created_at" label="创建时间" align="center" />
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
        start_at: "",
        end_at: "",
      },
      url: "/guide/companyLog",
    };
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