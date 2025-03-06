import { readdirSync } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), "public"); // Ensure it reads the public folder
    const files = readdirSync(imagesDir)
      .filter(
        (file) => file.startsWith("img") && /\.(jpg|jpeg|png|gif)$/i.test(file)
      )
      .map((file) => `/${encodeURIComponent(file)}`);

    return NextResponse.json(files);
  } catch (error) {
    console.error("Error reading images:", error);
    return NextResponse.json(
      { error: "Failed to load images" },
      { status: 500 }
    );
  }
}
