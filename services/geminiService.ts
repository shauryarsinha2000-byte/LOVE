import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCutePhrases = async (): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate 20 short, extremely cute, pleading, and lovey-dovey phrases to put on a Valentine's 'Yes' button after someone clicks 'No'. Examples: 'Cutie please', 'Love you please', 'Don't be mean', 'My heart needs you'. Keep them under 6 words each. Return ONLY a JSON array of strings.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    // Parse the JSON response
    const phrases = JSON.parse(text);
    return Array.isArray(phrases) ? phrases : [];
  } catch (error) {
    console.error("Failed to generate cute phrases:", error);
    return [];
  }
};
