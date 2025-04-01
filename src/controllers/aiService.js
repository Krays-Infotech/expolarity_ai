const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getCareerSuggestions(assessmentResult) {
    const prompt = `Suggest the top 5 career options for a student who has an aptitude for ${assessmentResult}.`;
    
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200
    });

    return response.choices[0].message.content.trim();
}

module.exports = { getCareerSuggestions };
