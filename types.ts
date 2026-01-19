export interface ValentineState {
  hasSaidYes: boolean;
  noCount: number;
  currentPhraseIndex: number;
  isLoadingAI: boolean;
  aiPhrases: string[];
}

export const FALLBACK_PHRASES = [
  "Pretty please?",
  "Don't break my heart!",
  "I'll be so sad...",
  "Think about the cuddles!",
  "Just one chance?",
  "But we are perfect!",
  "Look at this cute face!",
  "Give me a shot!",
  "My heart is aching!",
  "Don't do this to me!"
];
