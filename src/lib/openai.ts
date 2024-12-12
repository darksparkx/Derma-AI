"use server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export async function getSummary(Data: Object | undefined) {
	const data = JSON.stringify(Data);
	const content = `i know you arent a medical professional and i am not asking medical advice. 
    I will be consulting a dermatologist after this, 
    but here are my chances for having these skin issues. 
    give me a summary of what i could have or not, 
    and tell me if i dont have anything and dont need to worry. 
	please keep it short and dont add anything related to meeting a dermatologist, as i will be doing that next.
	please begin with "Based on the percentages provided,"
    my percentages: ${data}`;
	console.log(content);

	const response = await openai.chat.completions.create({
		model: "gpt-4o",
		messages: [
			{
				role: "user",
				content: content,
			},
		],
		response_format: {
			type: "text",
		},
		temperature: 1,
		max_tokens: 2048,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	return response.choices[0].message.content;
}
