/**
 * @copyright Copyright (c) 2020 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('../component/base/CrudController');

module.exports = class NotificationController extends Base {

    getModelClass () {
        return this.getClass('model/PopupNotification');
    }

    async actionList () {
        const user = this.user.getId();
        const query = this.createModel().find({user}).with('message');
        return super.actionList(query);
    }
};
module.exports.init(module);