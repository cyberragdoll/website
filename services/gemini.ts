
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userQuery: string, context: string) => {
  if (!process.env.API_KEY) return "I'm sorry, the AI assistant is currently unavailable (Missing API Key).";

  try {
    // Initialize the Gemini client with the API key from environment variables
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Generate content using gemini-3-flash-preview following specific configuration rules
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        // Fix: Use systemInstruction for defining persona and providing context
        systemInstruction: `You are the personal AI scholar assistant for Leen Sevens. 
            Use the following context about her work and life to answer the user's question. 
            Be professional, eloquent, and helpful.
            
            CONTEXT:
            ${context}`,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        // Fix: When setting maxOutputTokens, a thinkingBudget must also be defined for Gemini 3 models
        maxOutputTokens: 500,
        thinkingConfig: { thinkingBudget: 100 },
      }
    });

    // Fix: Directly access the .text property (not a method) as per the guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while trying to process your request. Please try again shortly.";
  }
};
