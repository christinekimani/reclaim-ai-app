import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { corsHeaders } from '../_shared/cors.ts';

console.log('Chat-support function starting...');

serve(async (req: Request) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log('Handling POST request');
    const { message } = await req.json();
    console.log('Received message:', message);

    if (!message) {
      console.error('Error: Message is required.');
      return new Response(JSON.stringify({ error: 'Message is required.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    let aiResponse = "I'm sorry, I don't have an answer for that right now. Here are some topics I can help with: Digital Safety, Legal Rights, and Evidence Guides.";
    const lowerCaseMessage = (message as string).toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        aiResponse = "Hello there! How can I assist you with your case today?";
    } else if (lowerCaseMessage.includes('digital safety')) {
        aiResponse = "Digital safety is crucial. I can guide you to our resources on securing your accounts, identifying phishing scams, and protecting your online privacy. Would you like to start with that?";
    } else if (lowerCaseMessage.includes('legal rights')) {
        aiResponse = "Understanding your legal rights is a key step. We have information on your rights regarding digital evidence and online harassment. I can point you to the Legal Rights section.";
    } else if (lowerCaseMessage.includes('evidence')) {
        aiResponse = "Properly collecting evidence is vital. Our Valid Evidence Guide can help you understand what qualifies as valid evidence and how to preserve it. Shall I show you?";
    } else if (lowerCaseMessage.includes('thank you') || lowerCaseMessage.includes('thanks')) {
        aiResponse = "You're welcome! Is there anything else I can help you with?";
    }

    console.log('Sending reply:', aiResponse);
    return new Response(JSON.stringify({ reply: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('An unexpected error occurred:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500, // Internal Server Error
    });
  }
});
