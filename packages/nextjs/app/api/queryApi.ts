import openai from "./chatgpt";

const query = async (prompt: string, _chatId: string, model: string): Promise<string> => {
  try {
    const res = await openai.completions.create({
      model,
      prompt: `${prompt} Regresa solamente un asiento contable pertinente`,
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
