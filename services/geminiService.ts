import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Chat Functionality (Flash)
export const generateChatResponse = async (
  userMessage: string, 
  currentLanguage: Language,
  history: { role: string; parts: { text: string }[] }[]
) => {
  if (!apiKey) return "API Key is missing.";

  try {
    const systemInstruction = `
      You are the elite AI assistant for 'Acerto Personeelsdiensten'.
      Context: Acerto connects Portuguese talent with Dutch employers.
      Tone: Professional, energetic, helpful.
      Language: Respond in the user's language (default to ${currentLanguage}).
      Key Info: Housing provided, SNF certified, Weekly payments.
    `;

    const model = "gemini-2.5-flash";
    const chat = ai.chats.create({
      model,
      config: { systemInstruction, temperature: 0.7 },
      history: history.map(h => ({ role: h.role, parts: h.parts }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting to the network right now.";
  }
};

// Strategic HR Advisor (Thinking Mode - Gemini 3 Pro)
export const getStrategicAdvice = async (prompt: string) => {
  if (!apiKey) throw new Error("API Key missing");
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 1024 }, // Thinking enabled for complex HR strategy
      }
    });
    return response.text;
  } catch (error) {
    console.error("Strategy Error:", error);
    throw error;
  }
};

// CV/Image Analysis (Gemini 3 Pro)
export const analyzeImage = async (base64Data: string, mimeType: string, prompt: string) => {
  if (!apiKey) throw new Error("API Key missing");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: {
        parts: [
          { inlineData: { mimeType, data: base64Data } },
          { text: prompt }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Analysis Error:", error);
    throw error;
  }
};

// Image Generation (Gemini 3 Pro Image)
export const generateJobImage = async (prompt: string, aspectRatio: string = "16:9", size: string = "1K") => {
  if (!apiKey) throw new Error("API Key missing");

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any, 
          imageSize: size as any
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image generated");
  } catch (error) {
    console.error("Image Gen Error:", error);
    throw error;
  }
};