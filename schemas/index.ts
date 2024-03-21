import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Is you Dumb? Email"
    }),
    password: z.string().min(6, {
        message: "No Password, No Entrance"

    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Is you Dumb? Email"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required for registration"

    }),
    name: z.string().min(3, {
        message: "Please Enter your name"
    })
});