module.exports = {
    "validate": (val) => typeof val === "number",
    "error": (key) => `${key} must be a number`
}