<template>
    <div style="width:100%;">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    type='index'
                    label="序号"
                   >
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="类型"
                   >
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
<style>

</style>
<script>
    import $ from 'axios/dist/axios.min.js'

    const model = ()=>{
        return {
            id:'',
            type:'',
            src:'',
            media:'',
            remark:'',
            index:null
        }
    }

    export default{
        data(){
            return{
                form:{

                },
                tableData:[]
            }
        },
        methods:{

        },
        components:{
        },
        mounted() {
        }
    }
</script>
