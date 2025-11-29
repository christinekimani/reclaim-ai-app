import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders } from '../_shared/cors.ts';

console.log('analyze-evidence function is booting up.');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request.');
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log('Received a new analysis request.');
    // Ensure the request has a body
    if (!req.body) {
      console.error('Request body is missing.');
      throw new Error('Request body is missing.');
    }

    const requestPayload = await req.json();
    console.log('Request payload:', requestPayload);

    const { evidenceText } = requestPayload;

    if (!evidenceText) {
      console.error('`evidenceText` is missing in the request payload.');
      throw new Error('`evidenceText` is required in the request body.');
    }

    console.log('Simulating AI analysis...');
    const summary = `This is a simulated AI summary. The content appears to be related to digital harassment.`;
    const labels = ['digital-harassment', 'simulated-analysis', 'text-evidence'];
    const severity = (Math.random() * (0.9 - 0.5) + 0.5).toFixed(2);

    const analysisResult = {
      summary,
      labels,
      severity,
      analyzedAt: new Date().toISOString(),
    };

    console.log('Analysis simulation complete. Sending response.');
    return new Response(JSON.stringify({ result: analysisResult }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error in analyze-evidence function:', error.message, error.stack);
    return new Response(JSON.stringify({ error: `Function error: ${error.message}` }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
