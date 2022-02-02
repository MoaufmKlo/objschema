const objschema = require("../");

const schema = {
    "required": {
        "one": "string",
        "two": "string"
    },
    "optional": {
        "three": "string"
    }
}

// only required keys
test("string: only required keys", () => {
    const res = objschema.validate(schema, {
        "one": "string",
        "two": "string"
    });

    expect(res.valid).toBe(true);
});

// all keys
test("string: all keys", () => {
    const res = objschema.validate(schema, {
        "one": "string",
        "two": "string",
        "three": "string"
    });

    expect(res.valid).toBe(true);
});

// missing keys
test("string: missing keys", () => {
    const res = objschema.validate(schema, {
        "one": "string",
        "three": "string"
    });

    expect(res.valid).toBe(false);
});

// invalid keys
test("string: invalid keys", () => {
    const res = objschema.validate(schema, {
        "one": true,
        "two": 0,
        "three": []
    });

    expect(res.valid).toBe(false);
});