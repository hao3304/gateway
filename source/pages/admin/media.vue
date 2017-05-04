<template>
    <div style="width:100%;" __vuec__>

        <el-button icon='plus' size='small' @click='onAdd' style='width:100%;margin-bottom:20px;'>新增</el-button>

        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    type='index'
                    label="序号"
                    width="80px"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称">
            </el-table-column>
            <el-table-column
                    prop="cover"
                    inline-template
                    label="封面">
                <a  :href='"/static/upload/"+row.cover' target='_blank'>
                    <img :src='"/static/upload/"+row.cover' style="width:100px;height:100px;margin-top:5px;">
                </a>
            </el-table-column>
            <el-table-column
                    prop="media"
                    label="视频地址">
            </el-table-column>
            <el-table-column
                    prop="remark"
                    label="备注">
            </el-table-column>
            <el-table-column
                    inline-template
                    label="操作">
                <el-button type='text' @click='onDel(row.id)'>删除</el-button>
            </el-table-column>
        </el-table>

        <el-dialog v-model='dialog'>
            <el-form label-width='80px' :model='form'>
                <el-form-item label='名称'  >
                    <el-input v-model='form.name'></el-input>
                </el-form-item>
                <el-form-item label='封面'  >
                    <el-upload
                            class="avatar-uploader"
                            action="/admin/index/upload"
                            :show-file-list="false"
                            :on-success="onUpload"
                    >
                        <img v-if="form.cover" :src="'/static/upload/'+form.cover" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label='备注'  >
                    <el-input v-model='form.remark'></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style lang="less">

</style>
<script>
    import $ from 'axios/dist/axios.min.js'

    const model = ()=>{
        return {
            id:'',
            type:'video',
            cover:'',
            media:'',
            remark:'',
            sort:0,
            name:''
        }
    }

    export default{
        data(){
            return{
                form:model(),
                tableData:[],
                dialog:false
            }
        },
        methods:{
            onAdd() {
                this.dialog = true;
                this.form = {...model()}
            },
            onUpload(rep) {
                this.form.cover = rep.data.name
            },
            onSubmit() {
                this.dialog = false;
                $.post('/admin/media',this.form).then(({data})=>{
                    if(data.errno == 0) {
                        this.$message({message:'提交成功',type:'success'});
                        this.getList();
                    }
                })
            },
            getList() {
                $.get('/admin/media').then(({data:{data}})=> {
                     this.tableData = data;
                })
            },
            onDel(id) {

                 this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {

                    $.delete(`/admin/media/${id}`).then(({data})=>{
                          this.$message({
                            type: 'success',
                            message: '删除成功!'
                          });
                          this.getList();
                    })

                }).catch(() => {

                });
            }
        },
        components:{
        },
        mounted() {
            this.getList()
        }
    }
</script>
