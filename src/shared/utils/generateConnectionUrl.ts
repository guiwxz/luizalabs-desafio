export const generateConnectionUrl = () => {
  const url = process.env.MONGODB_CONNECTION_URL;
  if (url) return url;

  const userName = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const port = process.env.MONGODB_PORT;
  const host = process.env.MONGODB_HOST;

  if (!userName || !password || !port || !host) {
    throw new Error('Variáveis de ambiente não configuradas corretamente.');
  }

  return `mongodb://${userName}:${password}@${host}:${port}`;
};
