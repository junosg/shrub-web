import { useState } from "nuxt/app";

export const useShrubs = () => useState<Array<string>>('shrubs', () => ["Math Evaluation", "Ranking"]);
export const useCurrentShrub = () => useState<string>('currentShrub', () => ''); 


// For testing only
// useShrubs().value = ["Math Evaluation", "Ranking"]