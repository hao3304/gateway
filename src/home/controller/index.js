'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html

    let system_model = this.model('system');
    let info = await system_model.where({id:0}).find();
    let banner = await this.model('banner').select();
    let media = await this.model('media').select();
    this.assign({
      info:info,
        banner:banner,
        media:media
    })
    return this.display();
  }
  async loginAction(){

    if(this.isGet()){
        return this.display()
    }else if(this.isPost()){
        let name = this.post('username')
        if(name) {
          let model = this.model('user')
          let user = await model.find({username:name})

          if(user) {
            let password = this.post('password')
            if( password === user.password ) {
              await this.session('auth',user)
              this.success()
            }else{
              this.fail(1000,'用户名或密码错误！')
            }

          }else{
            this.fail(1000,'用户名或密码错误！')
          }
        }
    }
  }
}