export const userSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        email: { type: "string", format: "email" },
        role: {
            type: "string",
            enum: ["student", "admin"]
        },
        department: {
            type: "string",
            pattern: "^[a-fA-F0-9]{24}$"
        },
        enrolledCourses: {
            type: "array",
            items: { type: "string", pattern: "^[a-fA-F0-9]{24}$" }
        }
    },
    required: ["name", "email"],
    additionalProperties: false,
};
