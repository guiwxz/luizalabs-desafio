import { z } from 'zod';
import { validateReq } from './validateRequest';
import { getMockReq, getMockRes } from '@jest-mock/express';

const testSchema = z.object({
  body: z.object({
    text: z.string().min(10),
  }),
});

describe('validateReq', () => {
  test('should be ok', async () => {
    const req = getMockReq({
      body: {
        text: 'textocomprido',
      },
    });

    const { res, next } = getMockRes();
    await validateReq(testSchema)(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test('should return an error', async () => {
    const req = getMockReq({
      body: {
        text: 'text',
      },
    });

    const { res, next } = getMockRes();
    await validateReq(testSchema)(req, res, next);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: {
          message: 'String must contain at least 10 character(s)',
          path: ['body', 'text'],
        },
      }),
    );
  });
});
