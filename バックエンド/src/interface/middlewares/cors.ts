import cors from 'cors'

export function applyCors(clientUrl: string) {
  return cors({
    origin: clientUrl,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
}
