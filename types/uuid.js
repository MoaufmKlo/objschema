const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu; // source: https://stackoverflow.com/a/13653180

module.exports = {
    "validate": (val) => regex.test(val),
    "error": (key) => `${key} must be a uuid`
}