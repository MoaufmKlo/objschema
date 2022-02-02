module.exports = {
    "validate": (val) => typeof val === "function",
    "error": (key) => `${key} must be a function`
}