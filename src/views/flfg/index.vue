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
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="状态">
              <el-select
                style="width: 100%"
                v-model="queryParam.status"
                placeholder="请选择状态"
              >
                <el-option :value="1" label="启用" />
                <el-option :value="2" label="禁用" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="handleSearch"> 搜索 </el-button>
            <el-button @click="handleRefresh"> 重置 </el-button>
          </el-col>
          <el-col :span="13">
            <el-button class="fr" type="primary" @click="handleCreate()">
              新增
            </el-button>
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
      <el-table-column type="index" width="55" align="center" label="序号" />
      <el-table-column prop="title" sortable label="标题" align="center" />
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
      <el-table-column
        prop="created_at"
        sortable
        label="创建时间"
        align="center"
      />
      <el-table-column prop="views" label="浏览量" align="center" />
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
      width="960px"
      :close-on-click-modal="false"
      @close="handleCancel"
    >
      <el-form
        :ref="formName"
        label-width="80px"
        :model="formFieldsData"
        :rules="rules"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="formFieldsData.title" />
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <div style="border: 1px solid #ccc">
            <Toolbar
              style="border-bottom: 1px solid #ccc"
              :editor="editor"
              :defaultConfig="toolbarConfig"
            />
            <Editor
              style="height: 400px; overflow-y: hidden"
              v-model="formFieldsData.content"
              :defaultConfig="editorConfig"
              @onCreated="onCreated"
            />
          </div>
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
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { mapGetters } from "vuex";
import { getToken } from "@/utils/auth";

const Routes = [
  { url: "/news/zffg", id: 1, api: "/news/zffg" },
  { url: "/news/zffg_sf", id: 2, api: "/news/zffg" },
  { url: "/news/djzd", id: 1, api: "/news/djzd" },
];
export default {
  mixins: [formOperate],
  components: { Editor, Toolbar },
  data() {
    const item = Routes.find((v) => v.url === this.$route.path);
    return {
      formName: "domain_record",
      imageAction: process.env.VUE_APP_BASE_API + "/upload/image",
      queryParam: {
        title: "",
        status: "",
        cate_id: item.id,
      },
      editor: null,
      toolbarConfig: {},
      editorConfig: {
        placeholder: "请输入内容...",
        MENU_CONF: {
          uploadImage: {
            server: process.env.VUE_APP_BASE_API + "/upload/image",
            fieldName: "file",
            headers: {
              authorization: "Bearer " + getToken(),
            },
            customInsert(res, insertFn) {
              insertFn(res.data, "", "");
            },
          },
          uploadVideo: {
            server: process.env.VUE_APP_BASE_API + "/upload/file",
            fieldName: "file",
            headers: {
              authorization: "Bearer " + getToken(),
            },
            customInsert(res, insertFn) {
              insertFn(res.data, "");
            },
          },
        },
      },
      cate_id: 1,
      url: item.api,
      formVisible: false,
      cateList: [],
      formFieldsData: {
        status: 1,
        title: "",
        content: "",
      },
      // 表单验证
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [{ required: true, message: "输入内容", trigger: "blur" }],
      },
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
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor);
    },
    disOrEnableRecord(record) {
      this.$http
        .put(this.url + "/" + record.id, {
          status: record.status,
        })
        .then((response) => {
          this.$message.success(response.message);
        });
    },
  },
};
</script>