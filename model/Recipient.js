/**
 * @copyright Copyright (c) 2020 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('evado/component/notifier/Recipient');

module.exports = class Recipient extends Base {

    static getConstants () {
        return {
            RULES: [
                ['read', 'checkbox']
            ]
        };
    }

    relMessage () {
        const Class = this.getClass('model/NoticeMessage');
        return this.hasOne(Class, Class.PK, 'message');
    }

    relUser () {
        const Class = this.getClass('model/User');
        return this.hasOne(Class, Class.PK, 'user');
    }
};
module.exports.init(module);