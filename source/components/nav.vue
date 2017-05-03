<template>
    <div>
        <nav __vuec__>
            <el-menu :default-active="active" mode="horizontal" class="el-menu-vertical-demo" theme="dark" @select='onSelect'>
                <label style="float:left;">后台管理</label>
                <el-menu-item :index="n.url" v-for='n in nav'>
                    <i class="fa" :class="'fa-'+n.icon" style="margin-right:10px;"></i>{{n.name}}</el-menu-item>
            </el-menu>
                <span class="user-info">
                    Admin&nbsp;&nbsp;<a href="javascript:;" @click='onLoginOut'>退出</a>
                </span>
        </nav>
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{selected.name || '系统信息'}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

    </div>
</template>
<style lang='less'>
    nav[__vuec__]{

        label{
            float: left;
            margin-top: 15px;
            font-size: 20px;
            padding: 0 20px;
            font-weight: 200;
            color: #fff;
        }

        .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
            border-bottom: 5px solid #20a0ff;
        }

        .user-info{
            position: absolute;
            top:20px;
            right:20px;
            font-size:14px;
            color: #fff;
            a{
                color:#fff;
            }
        }
    }

    .breadcrumb{
        box-sizing: border-box;
        padding-top: 15px;
        padding-left: 15px;
        width: 100%;
        height: 43px;
        background: #eff2f7;
    }
</style>
<script>
     import $ from 'axios/dist/axios.min.js'

    export default{
        data(){
            return{
                nav:[
                    {
                        name:'系统信息',
                        url:'system',
                        icon:'home'
                    },
                    {
                        name:'滚动广告',
                        url:'banner',
                        icon:'file-picture-o'
                    },
                    {
                        name:'图文视频',
                        url:'media',
                        icon:'list'
                    }
                ],
                selected:{},
                active:'system'
            }
        },
        methods:{
            onSelect(index) {

                this.selected = this.nav.filter(n=>{
                    return index == n.url;
                })[0];
                this.$router.push('/' + index)

            },
            onLoginOut() {
                $.post('/admin/index/logout').then(rep=>{
                    window.location.href = '/index/login';
                })
            }
        },
        mounted() {
            this.active = location.hash.replace('#/','') || 'system';
        }
    }
</script>
