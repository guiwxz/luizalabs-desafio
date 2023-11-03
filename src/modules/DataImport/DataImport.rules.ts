import { z } from 'zod';

export const fileLineSchema = z.string().length(95);
