import { z } from "zod";
export const onboardingSchema = z.object({
  fullName: z.string().min(3).max(150),
  useName: z
    .string()
    .min(3)
    .max(150)
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username can only containe letters, numbers and -",
    }),
});
