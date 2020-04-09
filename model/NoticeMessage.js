/**
 * @copyright Copyright (c) 2020 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('evado/component/notifier/NoticeMessage');

module.exports = class NoticeMessage extends Base {

    relNotice () {
        const Class = this.getClass('model/Notice');
        return this.hasOne(Class, Class.PK, 'notice');
    }

    relRecipients () {
        const Class = this.getClass('model/Recipient');
        return this.hasMany(Class, 'message', this.PK).deleteOnUnlink();
    }
};
module.exports.init(module);