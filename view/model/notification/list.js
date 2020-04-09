/**
 * @copyright Copyright (c) 2020 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('areto/view/ViewModel');

module.exports = class NotificationList extends Base {

    prepareModels (models) {
        for (const model of models) {
            const message = model.rel('message');
            model.setFromModel('subject', message);
            model.setFromModel('sentAt', message);
        }
    }
};