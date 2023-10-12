import OpenAI from "openai";

const openaii = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export { openaii };
