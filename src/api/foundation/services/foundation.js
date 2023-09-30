'use strict';

/**
 * foundation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::foundation.foundation');
