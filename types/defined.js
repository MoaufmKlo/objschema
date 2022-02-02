module.exports = {
    "validate": (val) => typeof val !== "undefined",
    "error": (key) => `${key} must be defined`
}