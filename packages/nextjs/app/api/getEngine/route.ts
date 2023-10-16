import openai from "@/app/api/chatgpt";

//async function handler(request: Request, response: Response) {
async function handler() {
  const models = await openai.models.list().then(response => response.data);

  const modelOptions = models.map(model => ({
    value: model.id,
    label: model.id,
  }));

  return new Response(JSON.stringify({ modelOptions }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export { handler as GET, handler as POST };
