import fs from 'fs';
import path from 'path';
import { SupportedLocale, supportedLocaleFromLocale } from './misc';

export const TUTORIAL_PATH = path.join(process.cwd(), 'tutorials');
export const PT_TUTORIAL_PATH = path.join(process.cwd(), 'pt/tutorials');
export const ES_TUTORIAL_PATH = path.join(process.cwd(), 'es/tutorials');
export const INTERVIEWS_PATH = path.join(process.cwd(), 'interviews');
export const DANNY_PATH = path.join(process.cwd(), 'danny');
export const TV_PATH = path.join(process.cwd(), 'concert_artists');

const tutorialPaths = {
  en: TUTORIAL_PATH,
  pt: PT_TUTORIAL_PATH,
  es: ES_TUTORIAL_PATH,
};

export function tutorialPathFromLocale(locale: string | undefined) {
  const supportedLocale = supportedLocaleFromLocale(locale) as SupportedLocale;
  return tutorialPaths[supportedLocale];
}

export const tutorialFilePaths = fs
  .readdirSync(TUTORIAL_PATH)
  .filter(path => /\.mdx?$/.test(path));

export const interviewFilePaths = fs
  .readdirSync(INTERVIEWS_PATH)
  .filter(path => /\.mdx?$/.test(path));

export const dannyFilePaths = fs
  .readdirSync(DANNY_PATH)
  .filter(path => /\.mdx?$/.test(path));

export const tvFilePaths = fs
  .readdirSync(TV_PATH)
  .filter(path => /\.json/.test(path));