import { NextResponse } from "next/server";

// Fallback handler — next.config.mjs rewrite handles this in all environments.
// This file is kept as a safeguard for local dev only.
export async function GET() {
    try {
        const res = await fetch("https://server.fayaport80.com/api/landing/show", {
            next: { revalidate: 300 },
        });
        if (!res.ok) return NextResponse.json([]);
        const data = await res.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json([]);
    }
}
