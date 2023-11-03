import { rawLegacyData } from '@/test/mocks/rawLegacyData';
import { ImportsDataServices } from './DataImport.services';

describe('DataImport Services', () => {
  test('should be able to parse data', async () => {
    const importData = new ImportsDataServices();

    const parsedData = importData.parseData(rawLegacyData);

    expect(parsedData).toContainEqual({
      userId: expect.any(Number),
      userName: expect.any(String),
      orderId: expect.any(Number),
      productId: expect.any(Number),
      value: expect.any(String),
      date: expect.any(Date),
    });
  });
});
