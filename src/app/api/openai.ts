"use server";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: "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",
});
const prompt =
	"Generate a comprehensive and personalized skin prescription about me based on the following skin analysis results: [Include relevant details about the analysis, such as skin type, specific concerns, and any identified characteristics]. Provide recommendations for skincare products, routines, and lifestyle adjustments to improve overall skin health. Consider factors like hydration, exfoliation, sun protection, and specific treatments for targeted concerns. Be detailed and tailored to the individual's unique skin needs." +
	"comprehensive analysis of the individual's skin type and concerns. Consider addressing specific issues such as hydration levels, inflammation, acne, fine lines, uneven skin tone, or other identified characteristics. Provide tailored recommendations for morning and evening skincare routines, including cleansers, moisturizers, serums, and targeted treatments. Emphasize factors like sun protection, lifestyle adjustments, and potential irritants to avoid. Aim for a holistic approach, taking into account the unique needs of the individual for improved overall skin health." +
	"try to make the summary big";

export const getSummary = async (Data: Object) => {
	return await openai.chat.completions.create({
		messages: [{ role: "user", content: prompt + `${Data}` }],
		model: "gpt-3.5-turbo",
	});
};
