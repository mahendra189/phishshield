import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = "openai/gpt-3.5-turbo-instruct";

async function askOpenRouter(url: string): Promise<{ safe: boolean; reason: string }> {
  const prompt = `You are an advanced cybersecurity AI. Analyze the following URL and determine if it is a phishing link. Reply ONLY in the following JSON format: {\n  \"safe\": true/false,\n  \"reason\": \"short explanation\"\n}\nURL: ${url}`;

  const res = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 256,
      temperature: 0,
    }),
  });

  if (!res.ok) {
    throw new Error("OpenRouter API error");
  }
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  try {
    // Try to parse the JSON from the model's response
    const json = JSON.parse(content);
    if (typeof json.safe === "boolean" && typeof json.reason === "string") {
      return json;
    }
    throw new Error("Invalid response format");
  } catch {
    // Fallback: treat as unsafe if parsing fails
    return { safe: false, reason: "Could not parse AI response. Please try again." };
  }
}

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ safe: false, reason: "Missing or invalid URL." }, { status: 400 });
    }
    const verdict = await askOpenRouter(url);
    return NextResponse.json(verdict);
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error. Please try again.";
    return NextResponse.json({ safe: false, reason: message }, { status: 500 });
  }
} 