import type { NextApiRequest, NextApiResponse } from "next";

type responseBody = {
  userId: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseBody>
) {
  const { id } = req.query;
  if (id) {
    const response = { userId: id };
    res.status(200).json(response);
  } else {
    res.status(400);
  }
}
