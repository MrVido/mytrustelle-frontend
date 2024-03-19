import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Is you Dumb? Email"
    }),
    password: z.string().min(6, {
        message: "No Password, No Entrance"

    }),
});