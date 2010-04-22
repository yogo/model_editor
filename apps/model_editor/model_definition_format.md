# Format for models

    { 
        "User provided name for model": {
            "user prop name": {
                "type": "Decimal" | "Integer" | "Text" | 
                        "True/False" | "Date" | "Time" |
                        "DateTime" | "File" | "Image" | 
                        "Reference Link" | "Multiple Reference Link",
                "position": 0 | 1 | 2 | "...",
                "options": {}
            }
        }
    }

# Or probably do it like this:

    {
        name: "User provided model name",
        properties: [
            {
                name: "user provided property name",
                type: "Decimal" | "Integer" | "Text" | 
                      "True/False" | "Date" | "Time" |
                      "DateTime" | "File" | "Image" | 
                      "Reference Link" | "Multiple Reference Link",
                options: {
                    "ref_type": "SomeModelClass" // for reference types
                    // other options might allow configs for specify types
                }
            }
        ]
    }