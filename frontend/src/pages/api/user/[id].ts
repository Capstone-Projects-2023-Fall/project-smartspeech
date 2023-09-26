import type { NextApiRequest, NextApiResponse } from 'next'
 
type responseBody = {
    user_id: string | string[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<responseBody>) {
  const { id } = req.query;
  if(id != undefined){
    const response = { user_id: id };
    res.status(200).json(response);
  } else{
    res.status(400);
  }
}