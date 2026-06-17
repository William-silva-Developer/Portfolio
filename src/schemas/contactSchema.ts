import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(3, "Informe seu nome").max(100),

  email: z.email("Informe um e-mail válido"),

  subject: z.string().min(3, "Informe o assunto").max(200),

  message: z.string().min(10, "Mensagem muito curta").max(5000),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
