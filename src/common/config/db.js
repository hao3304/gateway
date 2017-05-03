'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'sqlite',
  adapter: {
    sqlite:{
      path: 'src/common/runtime/sqlite',
        name:'gateway'
    }
  }
};