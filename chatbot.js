(() => {
  const toggle = document.getElementById('chatToggle');
  const bot = document.getElementById('chatbot');
  const body = document.getElementById('chatBody');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('chatSend');

  const pushMsg = (text, who) => {
    const div = document.createElement('div');
    div.className = `msg ${who}`;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  };

  const reply = (q) => {
    const lc = q.toLowerCase();
    if (lc.includes('price') || lc.includes('cost')) {
      return 'Prices vary by location and features. Use Predict to get an estimate in lakhs.';
    }
    if (lc.includes('affordable') || lc.includes('cheap')) {
      return 'Affordable homes are typically under 50 lakhs depending on area and age.';
    }
    if (lc.includes('luxury')) {
      return 'Luxury homes usually exceed 150 lakhs and offer premium amenities and locations.';
    }
    if (lc.includes('map') || lc.includes('location')) {
      return 'Use the dropdowns to set location. The map will update automatically.';
    }
    return 'I can help with pricing guidance, categories, and how to use the app. Try asking about price categories or features.';
  };

  toggle.addEventListener('click', () => {
    bot.classList.toggle('open');
  });

  const sendNow = () => {
    const text = input.value.trim(); if (!text) return;
    pushMsg(text, 'user');
    input.value = '';
    setTimeout(() => pushMsg(reply(text), 'bot'), 300);
  };

  send.addEventListener('click', sendNow);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendNow(); });

  // greeting
  setTimeout(() => pushMsg('Hi! Ask me about property prices or how to use the app.', 'bot'), 400);
})();


