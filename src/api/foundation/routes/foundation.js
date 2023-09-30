'use strict';

/**
 * foundation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::foundation.foundation');
