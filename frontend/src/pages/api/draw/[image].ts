import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { image } = req.query;
  if (image) {
    // Notify of success
    res.status(200);
    const url: string = "";
    const prediction = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(image),
    });
    
  } else {
    res.status(400);
  }
}
