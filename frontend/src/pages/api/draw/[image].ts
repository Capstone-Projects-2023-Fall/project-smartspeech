import type { NextApiRequest, NextApiResponse } from "next";

type drawResponse = {
  prediction: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<drawResponse>
) {
  const { image } = req.query;
  if (image) {
    // Send image to XXX, recieve word describing picture
    const imageUrl: string = "";
    const imageResponse = await fetch(imageUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(image),
    });
    const prediction: drawResponse = { prediction: await imageResponse.json() };

    res.status(200).send(prediction);
  } else {
    res.status(400);
  }