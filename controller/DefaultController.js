/**
 * @copyright Copyright (c) 2020 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('../component/base/BaseController');

module.exports = class DefaultController extends Base {

    static getConstants () {
        return {
            ACTIONS: {
                'widget': require('evado/component/action/WidgetAction')
            },
            METHODS: {}
        };
    }

    actionIndex () {
        return this.render('index', {
            model: this.user.getIdentity(),
            changePasswordUrl: this.module.getParam('changePasswordUrl'),
            enablePasswordChange: this.module.getParam('enablePasswordChange')
        });
    }
};
module.exports.init(module);