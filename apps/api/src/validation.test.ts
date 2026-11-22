import { describe, expect, it } from 'vitest';
import { z } from 'zod';
const sos = z.object({ category: z.enum(['MEDICAL', 'FIRE']), description: z.string().min(5), location: z.string().min(2) });
describe('SOS validation boundary', () => {
  it('rejects an incomplete emergency report', () => expect(sos.safeParse({category:'MEDICAL',description:'help',location:''}).success).toBe(false));
  it('accepts a complete report', () => expect(sos.safeParse({category:'FIRE',description:'Smoke reported',location:'T Nagar'}).success).toBe(true));
});
