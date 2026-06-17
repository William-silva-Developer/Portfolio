import { ContactSchema } from "@/src/schemas/contactSchema";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos",
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      html: `
    <h2>Novo contato do portfólio</h2>

    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Assunto:</strong> ${subject}</p>

    <hr />

    <p>${message.replace(/\n/g, "<br />")}</p>
  `,
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar mensagem",
      },
      {
        status: 500,
      },
    );
  }
}
