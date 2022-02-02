module.exports = {
    "validate": (val) => typeof val === "object" && !Array.isArray(val) && val !== null, // source: https://stackoverflow.com/a/8511350
    "error": (key) => `${key} must be an object`
}