import 'dotenv/config';

import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { logger } from 'hono/logger';

import { Landing } from './views/Landing';
import { NotFound } from './views/404';

const { port } = process.env;

export const app = new Hono();

app.use('/*', logger());
app.use('/static/*', serveStatic({ root: './' }));

app.get('/', (c) => c.html(<Landing />));
app.get('/*', (c) => c.html(<NotFound />));

serve({ fetch: app.fetch, port: Number(port) });
