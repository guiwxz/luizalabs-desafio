import { z } from 'zod';

export const importFileSchema = z.object({
  file: z
    .object({
      buffer: z.any(),
    })
    .required(),
});
