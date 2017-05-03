'use strict';
/**
 * rest controller
 * @type {Class}
 */
export default class extends think.controller.rest {
    /**
     * init
     * @param  {Object} http []
     * @return {}      []
     */
    init(http){
        super.init(http);
    }
    /**
     * before magic method
     * @return {Promise} []
     */
    async __before(){
        let user = this.session('auth')
        if(!user){
            return this.fail(1000,'没有权限')
        }
    }

    async getAction() {
        let data = await this.modelInstance.where({id:0}).find()
        return this.success(data)
    }

    async putAction() {
        let data = this.post();
        let row = await this.modelInstance.where({id:0}).find()
        if(think.isEmpty(row)){
            await this.modelInstance.add({id:0,...data})
        }else{
            delete data.id
            await this.modelInstance.where({id:0}).update(data)
        }
        return this.success('更新数据成功')
    }

    postAction() {
      return this.fail(1000,'不支持方法')
    }

    deleteAction() {
      return this.fail(1000,'不支持方法')
    }
}