import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { validateRegistration } from "@/lib/validateRegistration";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, question } = body;

    const invalid = validateRegistration({ name, email, phone });
    if (invalid) {
      return NextResponse.json({ error: invalid }, { status: 400 });
    }

    const normalizedPhone = String(phone).replace(/\D/g, "");

    const { error } = await supabase
      .from("registrations")
      .insert([{ name: String(name).trim(), email: String(email).trim().toLowerCase(), phone: normalizedPhone, question: question ? String(question).trim() : null }]);

    if (error) {
      console.error("[register] Supabase insert error:", error);
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already registered" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("[register] Unexpected error:", err);
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
