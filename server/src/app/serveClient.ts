import express from 'express';
import path from 'path';

export const serveClient = (app: express.Application) => {
  const clientDistPath = path.join(__dirname, '../../client/dist');
  app.use(express.static(clientDistPath));
  app.get(/^\/(?!api\/).*/, (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
};
