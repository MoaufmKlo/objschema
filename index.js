const isObject = require("./types/object.js");

/**
 * @typedef {("string")} Type
 */

/**
 * @typedef {Object} Schema
 * @property {Object.<String, Type>} required required keys
 * @property {Object.<String, Type>} optional optional keys
 */

/**
 * validate an object
 * @param {Schema} schema schema to validate against
 * @param {Object} object object to validate
 * @returns {Result} result
 */
module.exports.validate = (schema, object) => {
    // normalize schema
    if (!schema.required) schema.required = {};
    if (!schema.optional) schema.optional = {};

    object = JSON.parse(JSON.stringify(object)); // clone object

    // validation
    let errors = [];

    // validate required keys
    Object.keys(schema.required).forEach((key) => {
        const val = schema.required[key];

        // nested
        if (isObject.validate(val)) {
            if (isObject.validate(object[key])) {
                const nested = this.validate({"required": val}, object[key]);
                delete object[key];
                errors = [...errors, ...nested.errors];
            } else errors.push(`${key} must be an object`), delete object[key];
        } else {
            const type = require(`./types/${val}.js`);

            if (object.hasOwnProperty(key)) {
                if (type.validate(object[key])) delete object[key]
                else errors.push(type.error(key)), delete object[key];
            } else errors.push(type.error(key));
        }
    });

    // validate optional keys
    Object.keys(schema.optional).forEach((key) => {
        const val = schema.optional[key];

        // nested
        if (isObject.validate(val)) {
            if (isObject.validate(object[key])) {
                const nested = this.validate({"optional": val}, object[key]);
                delete object[key];
                errors = [...errors, ...nested.errors];
            }
        } else {
            const type = require(`./types/${val}.js`);

            if (object.hasOwnProperty(key)) {
                if (type.validate(object[key])) delete object[key]
                else errors.push(`${type.error(key)} or not defined`), delete object[key];
            }
        }
    });

    Object.keys(object).forEach((key) => errors.push(`${key} must not be defined`)); // leftovers

    return {
        "valid": !errors.length, // no errors
        errors
    }
}