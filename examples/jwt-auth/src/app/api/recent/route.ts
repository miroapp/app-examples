import { getUserIdFromRequest } from "../../../utils/user";
import { storage } from "../../../utils/storage";
import { NextResponse } from "next/server";

export async function GET() {
  const userId = getUserIdFromRequest();
  const record = await storage.get(userId);

  return NextResponse.json({ recent: record?.recent ?? [] });
}

export async function PUT(request: Request) {
  const userId = getUserIdFromRequest();
  const gifId = await request.json();

  const record = (await storage.get(userId)) ?? { recent: [] };

  const recent = record.recent.filter((id) => id !== gifId);
  recent.unshift(gifId);

  record.recent = recent.slice(0, 4);

  await storage.set(userId, record);

  return NextResponse.json({ recent: record.recent });
}
