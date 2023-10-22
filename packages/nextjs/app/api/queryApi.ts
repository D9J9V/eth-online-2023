import openai from "./chatgpt";

const query = async (prompt: string, _chatId: string, model: string): Promise<string> => {
  try {
    const res = await openai.completions.create({
      model,
      prompt: `${prompt} Return just one accounting entry from the bike shop's point of view and when I ask you what the balance in inventory is you will tell me 3000`,
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
