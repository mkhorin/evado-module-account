/**
 * @copyright Copyright (c) 2020 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('../component/base/CrudController');

module.exports = class NotificationController extends Base {

    getModelClass () {
        return this.getClass('model/Recipient');
    }

    async actionList () {
        const query = this.createModel().find({user: this.user.getId()}).with('message');
        return super.actionList(query);
    }
};
module.exports.init(module);