import { VoiceEntry, ProcessedResult } from './types.js'

/**
 * processEntries
 * --------------
 * PURE function — no IO, no mutation, deterministic.
 */
export function processEntries(entries: VoiceEntry[]): ProcessedResult {
  const tagFrequencies: Record<string, number> = {};

  for (const entry of entries) {
    if (!entry.tags_user) continue;

    for (const tag of entry.tags_user) {
      tagFrequencies[tag] = (tagFrequencies[tag] || 0) + 1;
    }
  }

  return {
    summary: `Analysed ${entries.length} entries`,
    tagFrequencies,
  };
}


export default processEntries 
