module.exports = {
    "validate": (val) => typeof val === "boolean",
    "error": (key) => `${key} must be undefined`
}