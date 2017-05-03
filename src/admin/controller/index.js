'use strict';

import Base from './base.js';
import fs from 'fs'
let uuid = require("uuid");

export default class extends Base {

    async __before() {
        let user = await this.session('auth');
        if(!user){
            this.redirect('/index/login');
        }
    }

    /**
     * index action
     * @return {Promise} []
     */
    indexAction(){
        //auto render template file index_index.html
        return this.display();
    }

    uploadAction(){
        if(this.isPost()) {
            let file = this.file('file');
            let self = this;
            fs.readFile(file.path, function (err,data) {
                let path = think.UPLOAD_PATH;
                let filename = uuid.v1().replace(/-/g,"")+"."+ file.originalFilename.split(".")[1];
                if (!fs.existsSync(path)) {
                    fs.mkdirSync(path);
                }
                fs.writeFile(path+"/"+filename ,data, function (err) {
                    if(err){
                        return self.fail("上传失败!");
                    }
                    self.success({name:filename})
                })
            })

        }else{
            this.fail(1000,'不支持方法')
        }
    }

    async logoutAction() {
        if(this.isPost()) {
            await this.session('auth',null);
            self.success('退出成功！');
        }
    }
}