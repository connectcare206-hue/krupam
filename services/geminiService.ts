
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCostComparison(role: string, region: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a cost comparison for hiring a ${role} in ${region} vs hiring through Connectcare Services (India-based). 
                 Highlight that local costs are typically $10-20/hour while Connectcare provides talent at $4-5/hour. 
                 Format the output in a short, persuasive JSON structure with localAvg, nexusAvg, and savingsPercentage.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            localAvg: { type: Type.STRING },
            nexusAvg: { type: Type.STRING },
            savingsPercentage: { type: Type.STRING },
            analysis: { type: Type.STRING, description: 'A short 2-sentence summary of why this is better.' }
          },
          required: ['localAvg', 'nexusAvg', 'savingsPercentage', 'analysis']
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Error:", error);
    return null;
  }
}

export async function generateJobPitch(role: string, industry: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a compelling recruitment pitch for a ${role} in the ${industry} sector. 
                 Mention that the client gets full control over selection and we handle sourcing through Connectcare Services.`,
      config: {
        systemInstruction: "You are a professional recruitment head at Connectcare Services. Be concise and professional."
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Error generating pitch.";
  }
}
