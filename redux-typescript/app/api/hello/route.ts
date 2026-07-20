import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    console.log('Request ',request);
    return NextResponse.json({ message: 'Hello' });
}
