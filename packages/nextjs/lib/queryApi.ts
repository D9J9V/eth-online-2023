/*

import openai from "./chatgpt";



const query = async (
  prompt: string,
  _chatId: string,
  model: string
): Promise<string> => {
  try {
    const res = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return res.data.choices[0].text;
  } catch (err: unknown) {
    return `ChatGPT was unable to find an answer for that!(error : ${
      (err as Error).message
    })`;
  }
};

export default query;

*/
import { openaii as openai } from "./chatgpt";

{
  /*
-----------------------------

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
});
---------------------------
*/
}

const query = async (prompt: string, _chatId: string, model: string): Promise<string> => {
  try {
    const res = await openai.completions.create({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return res.choices[0].text;
  } catch (err: unknown) {
    return `ChatGPT was unable to find an answer for that!(error : ${(err as Error).message})`;
  }
};

export default query;
