const jsonSchema = {
    "definitions": {
      "schema1": {
        "id": "6",
        "type": "object",
        "properties": {
          "name": {
            "id": "7",
            "type": "string",
            "maxLength": 128
          }
        },
        "required": [
          "address"
        ],
        "additionalProperties": false
      }
    },
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "http://api.example.com/profile.json",
    "type": "object",
    "properties": {
      "name": {
        "id": "1",
        "type": "string",
        "minLength": 1,
        "maxLength": 64,
        "pattern": "^[a-zA-Z0-9\\-]+(\\s[a-zA-Z0-9\\-]+)*$",
        "default": "sddsd"
      },
      "age": {
        "id": "2",
        "type": "integer",
        "minimum": 18,
        "maximum": 100,
        "default": null
      },
      "email": {
          "id": "3",
          "type": "string",
        "maxLength": 128,
        "format": "email",
        "default": null
      },
      "location": {
        "id": "4",
        "type": "object",
        "properties": {
          "name": {
            "id": "7",
            "type": "string",
            "maxLength": 128,
            "default": null
          }
        },
        "required": [
          "address"
        ],
        "additionalProperties": false
      },
      "available_for_hire": {
        "id": "5",
        "type": "boolean",
        "default": null
      }
    },
    "required": [
      "name",
      "age",
      "email",
      "location",
      "available_for_hire",
      "interests",
      "skills"
    ],
    "additionalProperties": false
}


const sampleJson = {
  'name': 'd'
}

exports.sampleJson = sampleJson;
exports.jsonSchema = jsonSchema;
