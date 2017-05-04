<template>
    <div __vuec__>

        <el-form label-width='80px' :model='form'>
            <el-form-item label='公司Logo'  >
                <el-upload
                        class="avatar-uploader"
                        action="/admin/index/upload"
                        :show-file-list="false"
                        :on-success="onUpload"
                >
                    <img v-if="form.url" :src="'/static/upload/'+form.url" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label='公司名称'  >
                <el-input v-model='form.name'></el-input>
            </el-form-item>
            <el-form-item label='联系电话'  >
                <el-input v-model='form.tel'></el-input>
            </el-form-item>
            <el-form-item label='QQ号码'  >
                <el-input v-model='form.qq'></el-input>
            </el-form-item>
            <el-form-item label='邮箱地址'  >
                <el-input v-model='form.email'></el-input>
            </el-form-item>
            <el-form-item label='公司地址'  >
                <el-input v-model='form.address'></el-input>
            </el-form-item>
            <el-form-item label='背景图片'  >
                <el-upload
                        class="avatar-uploader"
                        action="/admin/index/upload"
                        :show-file-list="false"
                        :on-success="onUploadCover"
                        >
                    <img v-if="form.cover" :src="'/static/upload/'+form.cover" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type='primary' @click='onSubmit'>提交修改</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>
<style>
    div[__vuec__]{
        width:500px;
        .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }

    }


</style>
<script>
    import $ from 'axios/dist/axios.min.js'

    export default{
        data(){
            return{
                form:{
                    name:'',
                    tel:'',
                    qq:'',
                    logo:'',
                    email:'',
                    address:'',
                    url:'',
                    cover:''
                }
            }
        },
        methods:{
            getInfo() {
                $.get('/admin/system').then(({data:{data}})=>{
                    if(data.id == 0){
                        this.form = {...data}
                    }
                })
            },
            onSubmit() {
                $.put('/admin/system',this.form).then(({data})=>{
                    if(data.errno == 0){
                        this.$message({message:'更新成功',type:'success'})
                    }
                })
            },
            onUpload(rep) {
                this.form.url = rep.data.name;
            },
            onUploadCover(rep) {
                this.form.cover = rep.data.name;
            }
        },
        components:{
        },
        mounted() {
            this.getInfo();
        }
    }
</script>
