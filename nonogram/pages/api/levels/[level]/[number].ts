import { NextApiRequest, NextApiResponse } from "next";
import easy from "@/pages/api/easy.json";
import medium from "@/pages/api/medium.json";
import hard from "@/pages/api/hard.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { level, number } = req.query;
  if (req.method === "GET") {
    if (level === "easy") {
      const index = easy.findIndex(
        (item) => item.level === parseInt(number as string)
      );
      if (index === -1) res.status(404);
      else res.status(200).json(easy[index]);
    } else if (level === "medium") {
      const index = medium.findIndex(
        (item) => item.level === parseInt(number as string)
      );
      if (index === -1) res.status(404);
      else res.status(200).json(medium[index]);
    } else if (level === "hard") {
      const index = hard.findIndex(
        (item) => item.level === parseInt(number as string)
      );
      if (index === -1) res.status(404);
      else res.status(200).json(hard[index]);
    }
  }
}
