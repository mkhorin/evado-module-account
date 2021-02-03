/**
 * @copyright Copyright (c) 2020 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('evado/component/notifier/NotificationMessage');

module.exports = class NotificationMessage extends Base {

    relNotification () {
        const Class = this.getClass('model/Notification');
        return this.hasOne(Class, Class.PK, 'notification');
    }

    relPopupNotifications () {
        const Class = this.getClass('model/PopupNotification');
        return this.hasMany(Class, 'message', this.PK);
    }
};
module.exports.init(module);