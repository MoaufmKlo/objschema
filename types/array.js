module.exports = {
    "validate": (val) => Array.isArray(val),
    "error": (key) => `${key} must be an array`
}