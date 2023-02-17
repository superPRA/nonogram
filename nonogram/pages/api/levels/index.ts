import { NextApiRequest, NextApiResponse } from "next";
import easy from "@/pages/api/easy.json";
import medium from "@/pages/api/medium.json";
import hard from "@/pages/api/hard.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    easy,
    medium,
    hard,
  });
}
