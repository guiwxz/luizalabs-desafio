import { z } from 'zod';

export const listOrdersSchema = z.object({
  query: z.object({
    orderId: z.number({ coerce: true }).optional(),
    initialDate: z
      .string()
      .regex(/^(?:\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)
      .optional(),
    finalDate: z
      .string()
      .regex(/^(?:\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)
      .optional(),
  }),
});
