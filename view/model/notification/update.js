/**
 * @copyright Copyright (c) 2020 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const Base = require('areto/view/ViewModel');

module.exports = class NotificationUpdate extends Base {

    async resolveTemplateData () {
        const model = this.data.model;
        const message = await model.resolveRelation('message');
        model.setFromModel('subject', message);
        model.setFromModel('text', message);
        model.setFromModel('sentAt', message);
    }
};