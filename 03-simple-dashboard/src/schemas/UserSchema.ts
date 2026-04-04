import { z } from "zod";

export const formData = z.object({
    name: z.string().min(4),
    email: z.email(),
});

export type FormData = z.infer<typeof formData>;
