const regex = /^[a-fA-F0-9]{24}$/iu; // source: https://stackoverflow.com/a/53686675

module.exports = {
    "validate": (val) => regex.test(val),
    "error": (key) => `${key} must be a bson object id`
}