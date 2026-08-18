import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, age } = body;

    if (!name || !email || !phone || !age) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (typeof age !== "number" || age < 5 || age > 25) {
      return NextResponse.json(
        { error: "Age must be between 5 and 25" },
        { status: 400 }
      );
    }

    const normalizedPhone = String(phone).replace(/\D/g, "");

    const { error } = await supabase
      .from("registrations")
      .insert([{ name, email, phone: normalizedPhone, age }]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already registered" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
