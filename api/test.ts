// /api/test.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ 
    message: "Success! The API route is working.",
    folderLocation: "The 'api' folder is in the correct place."
  });
}