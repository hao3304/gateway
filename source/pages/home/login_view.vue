<template>
    <div __vuec__>
        <div class="login-form">
            <h5>系统管理后台</h5>
            <el-form label-width='60px' ref='form' :model='form' :rules='rules' >
                <el-form-item label='用户' prop='username' >
                    <el-input size='small' v-model='form.username' placeholder='请输入用户名' type='text'></el-input>
                </el-form-item>
                <el-form-item label='密码' prop='password' >
                    <el-input size='small' v-model='form.password' placeholder='请输入密码' type='password'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang="less">
    div[__vuec__]{
        box-sizing: border-box;
        padding-top: 100px;
        position: absolute;
        top:0;
        bottom: 0;
        width:100%;
        left:0;
        background-image: url(/static/images/login_bg.jpg);
        background-size: 100% 100%;
        min-height: 400px;
        h5{
            margin:0;
            padding-bottom: 20px;
            font-size: 18px;
        }
        .login-form{
            width:300px;
            margin:0 auto;
            padding:20px 30px 10px 30px;
            box-shadow: 1px 1px 1px rgba(0,0,0,.4);
            border-radius: 4px;
            background-color: rgba(255,255,255,.6);
        }
    }
</style>
<script>

    const $ = require('axios/dist/axios.min.js')

    export default{
        data(){
            return{
                form:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[
                        {required:true,message:'请输入用户名',trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            onSubmit() {
                this.$refs.form.validate(valid=>{
                    if(valid){
                        $.post('/index/login',this.form).then(({data:data})=>{
                            if(data.errno == 0) {
                                window.location.href = '/admin';
                            }else{
                                this.$message({message:data.errmsg,type:'error'})
                            }
                        })
                    }
                })
            }
        },
        components:{
        }
    }
</script>
