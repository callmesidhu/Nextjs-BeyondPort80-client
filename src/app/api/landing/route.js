import { NextResponse } from "next/server";

// NEXT_PUBLIC_* vars are client-only; use server-side API_BASE for the proxy
const API_BASE =
    process.env.API_BASE ||
    process.env.NEXT_PUBLIC_API_BASE ||
    "https://server.fayaport80.com";

export async function GET() {
    try {
        const res = await fetch(`${API_BASE}/api/landing/show`, {
            next: { revalidate: 300 }, // cache 5 min
        });
        if (!res.ok) {
            return NextResponse.json([], { status: res.status });
        }
        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error("Proxy: landing images fetch failed", err);
        return NextResponse.json([]);
    }
}
