const urb = require("../");

const schema = {
    "required": {
        "one": "string",
        "two": {
            "three": "string"
        }
    },
    "optional": {
        "four": "string",
        "five": {
            "six": "string"
        }
    }
}

// only required keys
test("string: only required keys", () => {
    const res = urb.validate(schema, {
        "one": "string",
        "two": {
            "three": "string"
        }
    });

    expect(res.valid).toBe(true);
});

// all keys
test("string: all keys", () => {
    const res = urb.validate(schema, {
        "one": "string",
        "two": {
            "three": "string"
        },
        "four": "string",
        "five": {
            "six": "string"
        }
    });

    expect(res.valid).toBe(true);
});

// missing keys
test("string: missing keys", () => {
    const res = urb.validate(schema, {
        "one": "string",
        "three": {
            "fourtytwo": "string"
        }
    });

    expect(res.valid).toBe(false);
});

// invalid keys
test("string: invalid keys", () => {
    const res = urb.validate(schema, {
        "one": true,
        "two": 0,
        "three": [],
        "five": {
            "six": false
        }
    });

    expect(res.valid).toBe(false);
});