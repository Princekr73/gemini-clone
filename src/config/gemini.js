// // const apiKey = "AIzaSyD9wmPDw7QP_0HHTMzw7EfpFbnd26SDFgU";


// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } from "@google/generative-ai"

// // const MODEL_NAME = "gemini-1.0-pro";
// const MODEL_NAME = "gemini-pro";
// const API_KEY = "AIzaSyD9wmPDw7QP_0HHTMzw7EfpFbnd26SDFgU";

// async function runChat(prompt) {
//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//     const generationConfig = {
//         temperature: 0.9,
//         topK: 1,
//         topP: 1,
//         maxOutputTokens: 2048,
//     };

//    const safetySetting = [
//       {
//         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//     ];

//     const chat = model.startChat({
//         generationConfig,
//         safetySetting,
//         history: [
//         ],
//     });

//    const result =  model.generateContent(prompt);
//     const response = await result.response.text();
//     console.log("Gemini response:");
//     console.log(response);
//     return response;
//     // console.log(response.text());
//     // return response.text();
// }

// export default runChat;





// To run this code you need to install the following dependencies:
// npm install @google/genai mime

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } from "@google/generative-ai"

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = "AIzaSyD9wmPDw7QP_0HHTMzw7EfpFbnd26SDFgU"; // Replace with your own key

// async function runChat(promptText) {
//   const genAI = new GoogleGenerativeAI(API_KEY);

// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const result = await model.generateContent({
//     contents: [
//       {
//         role: "user",
//         parts: [{ text: promptText }],
//       },
//     ],
//     generationConfig: {
//       responseMimeType: "text/plain",
//     },
//   });

//   // const responseText = await result.response.text();
//   // console.log(responseText);
//   // return responseText;
//   try {
//   const result = await model.generateContent({ contents });
//   return await result.response.text();
// } catch (error) {
//   console.error("Gemini API Error:", error.message);
//   return "⚠️ Error: You’ve hit the usage limit. Please try again later.";
// }
// }

// export default runChat;



import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyD9wmPDw7QP_0HHTMzw7EfpFbnd26SDFgU");

async function runChat(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const response = result?.response;
    const text = await response?.text();

    if (!text || typeof text !== "string") {
      throw new Error("Empty or invalid response text");
    }

    return text;

  } catch (error) {
    console.error("runChat error:", error);
    return "⚠️ Gemini API error: " + error.message;
  }
}

export default runChat;
