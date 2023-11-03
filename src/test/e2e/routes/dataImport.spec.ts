import { app } from '@/app';
import { rawLegacyData } from '@/test/mocks/rawLegacyData';
import { setupDB } from '@/test/dbSetup';
import request from 'supertest';

describe('POST /imports', () => {
  setupDB();

  test('should import data with success', async () => {
    const response = await request(app)
      .post('/import')
      .attach('file', Buffer.from(rawLegacyData), 'filename.txt');

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Arquivos processados com sucesso.');
  });

  test('should return errors', async () => {
    const requestWithoutFile = await request(app).post('/import');

    expect(requestWithoutFile.status).toBe(400);

    const requestWithInvalidFile = await request(app)
      .post('/import')
      .attach('file', Buffer.from(rawLegacyData), 'filename.mp4');

    expect(requestWithInvalidFile.status).toBe(400);

    const requestWithBadFormattedFile = await request(app)
      .post('/import')
      .attach('file', Buffer.from('aaaaaa'), 'filename.txt');

    expect(requestWithBadFormattedFile.status).toBe(400);
  });
});
