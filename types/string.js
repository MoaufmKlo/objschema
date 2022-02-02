module.exports = {
    "validate": (val) => typeof val === "string" || val instanceof String,
    "error": (key) => `${key} must be a string`
}