'use strict';

/**
 * rdp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rdp.rdp');
