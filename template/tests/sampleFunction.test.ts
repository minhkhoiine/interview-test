// eslint-disable-next-line import/no-extraneous-dependencies
// @ts-expect-error vitest types are provided via tsconfig "types"
import { describe, it, expect } from 'vitest'
import { mockVoiceEntries } from '../src/lib/mockData.js'
import processEntries from '../src/lib/sampleFunction.js'
import tasks from '/Users/khoivu/interview-test/template/src/lib/structured_task.json'

describe('processEntries with mockVoiceEntries', () => {
  const result = processEntries(mockVoiceEntries);

  it('returns a correct summary', () => {
    expect(result.summary).toBe(`Analysed ${mockVoiceEntries.length} entries`);
  });

  it('counts reflection tag correctly', () => {
    expect(result.tagFrequencies.reflection).toBe(mockVoiceEntries.length);
  });

  it('handles additional tags if present', () => {
    // optional tag-based check, example: growth
    if (result.tagFrequencies.growth !== undefined) {
      expect(typeof result.tagFrequencies.growth).toBe('number');
    }
  });
});

describe('structured_tasks.json format check', () => {
  it('contains exactly 10 entries', () => {
    expect(tasks.length).toBe(10);
  });

  it('each task has required structure', () => {
    tasks.forEach(task => {
      expect(task).toHaveProperty('task_text');
      expect(typeof task.task_text).toBe('string');

      expect(task).toHaveProperty('status');
      expect(typeof task.status).toBe('string');

      expect(task).toHaveProperty('category');
      expect(typeof task.category).toBe('string');

      expect(task).toHaveProperty('due_date');
    });
  });
});
