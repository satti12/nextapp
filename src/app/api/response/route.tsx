import { db } from "@/src/db";
import { data } from "@/src/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await db.select().from(data);
    console.log("Fetched Users:", result);

    return NextResponse.json(result);
  } catch (err) {
    console.error("Error fetching users:", err);

    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 500 }
    );
  }
}
