// server.js
let express = require('express');
let fetch = require('node-fetch'); // node 18+ なら global fetch 使ってOK
let app = express();
app.use(express.json());
app.use(express.static('public')); // 上のHTMLを public/index.html に置く想定

app.post('/api/chat', async function(req, res){
    let msg = req.body && req.body.message || '';
    if(msg == ''){
        res.status(400).json({error:'no message'});
        return;
    }

    try{
        // ここで実際のAIを呼ぶ（例：OpenAIのChat API）
        // 以下は概念例なので、使うAPIに合わせて整形してね。
        let apiKey = process.env.OPENAI_API_KEY;
        let apiRes = await fetch('https://api.openai.com/v1/chat/completions', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini', // 実際は使えるモデル名に合わせて
                messages: [{role:'user', content: msg}],
                max_tokens: 400
            })
        });
        if(!apiRes.ok){
            let text = await apiRes.text();
            res.status(500).json({error:'AI API error', detail:text});
            return;
        }
        let j = await apiRes.json();
        // Chat API の戻りに合わせてパスを調整
        let reply = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content || '...';
        res.json({reply: reply});
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

app.listen(3000, ()=> console.log('listening on 3000'));
