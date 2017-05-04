<template>
    <div __vuec__>
        <div class="el-upload el-upload--picture-card banner-list" v-for='l in list' >
            <img :src="'/static/upload/'+l.src" class="avatar">
            <div class="hover-tool">
                <a href='javascript:;'>编辑</a>
                <a target="_blank" :href="'/static/upload/'+l.src">查看</a>
                <a href='javascript:;' @click='onDel(l.id)'>删除</a>
            </div>
        </div>
        <div class="el-upload el-upload--picture-card" @click='onAddClick'>
            <i class="el-icon-plus"></i>
        </div>
        <el-dialog v-model='dialog' >
            <el-form :model='form' label-width='60px' >
                <el-form-item label='图片'>
                    <el-upload
                            class="avatar-uploader"
                            action="/admin/index/upload"
                            :show-file-list="false"
                            :on-success="onUpload"
                    >
                        <img v-if="form.src" :src="'/static/upload/'+form.src" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label='排序'>
                    <el-input type='number' v-model.number='form.sort' ></el-input>
                </el-form-item>
                <el-form-item label='备注' v-model='form.remark'>
                    <el-input type='text'></el-input>
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
    div[__vuec__] {
        .banner-list{
            padding:2px;
            position:relative;

            &:hover{
                .hover-tool{
                    display: block;
                    background-color: rgba(0,0,0,.5);
                    a{
                        display: inline;
                    }
                }
            }

            img{
                width:100%;height:100%;border-radius:5px;
            }

            .hover-tool{
                height:100%;
                position:absolute;
                left:0;
                top:0;
                width:100%;
                border-radius: 5px;
                background-color: rgba(0,0,0,0);
                -webkit-transition: all .4s;
                -moz-transition: all .4s;
                -ms-transition: all .4s;
                -o-transition: all .4s;
                transition: all .4s;;
                a{
                    text-decoration: none;
                    display: none;
                    color: #fff;
                    font-size: 14px;
                    &:hover{
                        color: #0099cc;
                    }
                }
            }
        }
    }
</style>
<script>
    import $ from 'axios/dist/axios.min.js'

    const model = ()=>{
        return {
            id:'',
            src:'',
            remark:'',
            sort:0
        }
    }

    export default{
        data(){
            return{
                form:model(),
                list:[],
                dialog:false
            }
        },
        methods:{
            getList() {
                $.get('/admin/banner').then(({data:{data}})=>{
                    this.list = data;
                })
            },
            onSubmit() {
                this.dialog = false;
                $.post('/admin/banner',this.form).then(({data})=>{
                    if(data.errno == 0){
                        this.$message({message:'提交成功',type:'success'});
                        this.getList();
                    }
                })
            },
            onAddClick() {
                this.dialog = true;
                this.form = { ...model() }
            },
            onUpload(rep) {
                this.form.src = rep.data.name;
            },
            onDel(id) {
                 this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {

                    $.delete(`/admin/banner/${id}`).then(({data})=>{
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
        mounted() {
            this.getList();
        }
    }
</script>
