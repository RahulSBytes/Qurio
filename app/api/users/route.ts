import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
try {
  await dbConnect();
  const users = await User.find();
  if(!users) return handleError()
  
} catch (error) {
  return handleError(error, "api") as APIErrorResponse;
}
}
