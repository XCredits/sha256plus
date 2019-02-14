"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bichlmeier_sha256_1 = require("./bichlmeier-sha256");
/**
 * @param {string} message
 * @return {string} In hex format
 */
function sha256Plus(message) {
    if (typeof message !== 'string') {
        console.log(message);
        throw new Error('sha256Plus only access inputs of type string');
    }
    const hash1 = bichlmeier_sha256_1.sha256Digest(message);
    const hash2 = bichlmeier_sha256_1.sha256Digest(hash1 + message);
    return hash2;
}
exports.sha256Plus = sha256Plus;
