import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(10).max(1200),
  rgpdConsent: z.boolean().refine((value: boolean) => value, {
    message: "Le consentement RGPD est obligatoire."
  })
});

export const qualificationSchema = z.object({
  mainNeed: z.string().min(2),
  wantedService: z.string().min(2),
  location: z.string().min(2),
  contactPreference: z.string().min(2),
  message: z.string().max(1200).optional().default(""),
  rgpdConsent: z.boolean().refine((value: boolean) => value, {
    message: "Le consentement RGPD est obligatoire."
  })
});
