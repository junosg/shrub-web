import { useState } from "nuxt/app";

export const useShrubs = () => useState<Array<string>>('shrubs', () => []);
export const useCurrentShrub = () => useState<string>('currentShrub', ()=> '');