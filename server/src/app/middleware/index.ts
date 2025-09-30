import cors from 'cors';
import express from 'express';
import env from '../../config/env';

export const applyMiddleware = (app: express.Application) => {
  if (env.NODE_ENV !== 'production') {
    app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
  }
  app.use(express.json());
};
