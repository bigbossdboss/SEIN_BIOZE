import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { qualificationSchema } from "@/lib/validations";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = qualificationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Formulaire invalide." }, { status: 400 });
    }
    const data = parsed.data;
    const supabase = getSupabaseServerClient();
    if (supabase) {
      await supabase.from("leads").insert({
        id: randomUUID(),
        lead_type: "qualification",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        payload: {
          mainNeed: data.mainNeed,
          wantedService: data.wantedService,
          location: data.location,
          contactPreference: data.contactPreference,
          message: data.message
        }
      });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Erreur serveur." }, { status: 500 });
  }
}

