<template>
  <div class="app-container" v-loading="loading">
    <div class="filter-container">
      <el-form label-width="60px" :inline="true">
        <el-form-item label="关键字">
          <el-input v-model="queryParam.name" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item label="分类">
          <el-select style="width: 100%" v-model="queryParam.cate_id">
            <el-option
              v-for="item in cateList"
              :value="item.cate_id"
              :key="item.cate_id"
              :label="item.title"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select style="width: 100%" v-model="queryParam.status">
            <el-option :value="1" label="启用" />
            <el-option :value="2" label="禁用" />
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="handleSearch"> 搜索 </el-button>
        <el-button @click="handleRefresh"> 重置 </el-button>
        <el-button class="fr" type="primary" @click="handleCreate()">
          新增
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
      <el-table-column prop="name" label="产品名称" align="center" />
      <el-table-column prop="cate_name" label="所属分类" align="center" />
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
      <el-table-column prop="content" label="内容" align="center" />
      <el-table-column prop="point" label="积分" align="center" />
      <el-table-column prop="nums" label="库存" align="center" />
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="record">
          <el-switch
            v-model="record.row.status"
            :active-value="1"
            :inactive-value="2"
            @change="disOrEnableRecord(record.row)"
          />
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center" />
      <el-table-column label="操作" align="center">
        <template slot-scope="job">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="handleUpdate(job.row)"
          />
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(job.row.id)"
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
    <!----------------------------------- 部门 ---------------------------------------------->
    <el-dialog
      :title="title"
      :visible.sync="formVisible"
      width="560px"
      :close-on-click-modal="false"
      @close="handleCancel"
    >
      <el-form
        :ref="formName"
        label-width="80px"
        :model="formFieldsData"
        :rules="rules"
      >
        <el-form-item label="产品名称" prop="name">
          <el-input v-model="formFieldsData.name" clearable />
        </el-form-item>
        <el-form-item label="分类" prop="cate_id">
          <el-select
            style="width: 100%"
            v-model="formFieldsData.cate_id"
            clearable
            placeholder="请选择状态"
          >
            <el-option
              v-for="item in cateList"
              :value="item.cate_id"
              :key="item.cate_id"
              :label="item.title"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="封面图" prop="img">
          <el-upload
            class="avatar-uploader"
            name="image"
            :action="imageAction"
            :show-file-list="false"
            :headers="headers"
            :on-success="handleImageSuccess"
            :before-upload="beforeImageUpload"
          >
            <img
              v-if="formFieldsData.img"
              :src="formFieldsData.img"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="formFieldsData.content" clearable />
        </el-form-item>
        <el-form-item label="积分" prop="point">
          <el-input v-model="formFieldsData.point" clearable />
        </el-form-item>
        <el-form-item label="库存" prop="nums">
          <el-input v-model="formFieldsData.nums" clearable />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="formFieldsData.status">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="2">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
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
        name: "",
        status: "",
        cate_id: "",
      },
      url: this.$route.fullPath,
      formVisible: false,
      cateList: [],
      formFieldsData: {
        status: 1,
        name: "",
        img: "",
        content: "",
        nums: "",
        point: "",
        cate_id: "",
      },
      // 表单验证
      rules: {
        name: [{ required: true, message: "请输入标题", trigger: "blur" }],
        cate_id: [{ required: true, message: "请选择分类", trigger: "blur" }],
        img: [{ required: true, message: "请上传封面图", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        point: [{ required: true, message: "请输入积分", trigger: "blur" }],
        nums: [{ required: true, message: "请输入库存", trigger: "blur" }],
      },
    };
  },
  created() {
    this.url = this.$route.fullPath;
    this.$http.get("/goods/cate?limit=100").then((res) => {
      if (res.code === 10000) {
        this.cateList = res.data;
      }
    });
  },
  computed: {
    ...mapGetters(["token"]),
    headers() {
      return {
        authorization: "Bearer " + this.token,
      };
    },
  },
  methods: {
    disOrEnableRecord(record) {
      this.$http
        .put(this.url + "/" + record.id, {
          status: record.status,
        })
        .then((response) => {
          this.$message.success(response.message);
        });
    },
    handleImageSuccess(response) {
      if (response.code !== 10000) {
        this.$message.error(response.message);
      } else {
        this.formFieldsData.img = response.data;
      }
    },
    beforeImageUpload(file) {
      const image =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/gif";
      if (!image) {
        this.$message.error("只支持 jpg/jpeg/png/gif 格式!");
      }
      let isLtSize = false;
      isLtSize = file.size / 1024 / 1024 < 5;
      if (!isLtSize) {
        this.$message.error("最大支持 5MB!");
      }
      return image && isLtSize;
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
  max-width: 120px;
  max-height: 120px;
  display: block;
}
</style>