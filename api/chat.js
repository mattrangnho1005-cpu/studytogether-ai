const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const prompt = (req.query.prompt || '').toString().slice(0, 2000);
    if(!prompt){
      return res.status(400).json({ error: 'Missing prompt parameter' });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if(!apiKey){
      return res.status(500).json({ error: 'OpenAI API key not configured on the server' });
    }

    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Bạn là trợ lý học tập StudyTogether, trả lời ngắn gọn, dễ hiểu, ưu tiên mẹo học, gợi ý tài liệu và khuyến khích tự học. Không cung cấp lời giải đầy đủ cho bài kiểm tra nếu có thể." },
        { role: "user", content: prompt }
      ],
      max_tokens: 400,
      temperature: 0.2
    };

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });

    if(!r.ok){
      const txt = await r.text();
      return res.status(r.status).json({ error: txt });
    }

    const j = await r.json();
    const reply = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content
      ? j.choices[0].message.content
      : 'Không nhận được câu trả lời.';

    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
