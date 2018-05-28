'use strict';

const mongoose = require('mongoose');

const MONGODB = Symbol('Applications#mongodb');
const REDIS = Symbol('Application#redis');

module.exports = {
    get mongodbClient() {
        const logger = this.logger;
        const config = this.config;

        if (!this[MONGODB]) {
            const opts = {
                server: { poolSize: 20 },
            };
            mongoose.connect(config.mongodb, opts, err => {
                if (err) {
                    logger.error(err);
                }
            });
            this[MONGODB] = mongoose;
        }
    }
}