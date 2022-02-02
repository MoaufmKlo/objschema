const objschema = require("../");

const schema = {
    "required": {
        "one": "object",
        "two": "object"
    },
    "optional": {
        "three": "object"
    }
}

// only required keys
test("string: only required keys", () => {
    const res = objschema.validate(schema, {
        "one": {"three": "string"},
        "two": {"four": "string"}
    });

    expect(res.valid).toBe(true);
});

// all keys
test("string: all keys", () => {
    const res = objschema.validate(schema, {
        "one": {"three": "string"},
        "two": {"four": "string"},
        "three": {"five": "string"}
    });

    expect(res.valid).toBe(true);
});

// missing keys
test("string: missing keys", () => {
    const res = objschema.validate(schema, {
        "one": {"three": "string"},
        "three": {"five": "string"}
    });

    expect(res.valid).toBe(false);
});

// invalid keys
test("string: invalid keys", () => {
    const res = objschema.validate(schema, {
        "one": false,
        "two": "string",
        "three": {"five": "string"}
    });

    expect(res.valid).toBe(false);
});