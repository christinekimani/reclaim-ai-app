import { supabase } from '../lib/supabaseClient';

export const analyzeEvidence = async (evidenceId: string) => {
  const { data, error } = await supabase.functions.invoke('analyze-evidence', {
    body: { evidenceId },
  });

  if (error) {
    throw new Error(`Failed to start analysis: ${error.message}`);
  }

  return data;
};

export const getChatResponse = async (message: string) => {
  if (!message.trim()) {
    throw new Error('Message cannot be empty.');
  }

  const { data, error } = await supabase.functions.invoke('chat-support', {
    body: { message },
  });

  if (error) {
    console.error('Supabase function invocation failed:', error);
    throw new Error(`Failed to get chat response: ${error.message}`);
  }

  if (data.error) {
    throw new Error(`Chatbot function returned an error: ${data.error}`);
  }

  if (!data.reply) {
    console.error('Invalid response from AI service:', data);
    throw new Error('Invalid response from AI service. Reply not found.');
  }

  return data.reply;
};
