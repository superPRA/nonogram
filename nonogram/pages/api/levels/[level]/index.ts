import { NextApiRequest, NextApiResponse } from "next";
import easy from "@/pages/api/easy.json";
import medium from "@/pages/api/medium.json"
import hard from "@/pages/api/hard.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const level = req.query.level as string;
    switch (level) {
        case "easy":
            res.status(200).json(easy)
            break;
        case "medium":
            res.status(200).json(medium)
            break;
        case "hard":
            res.status(200).json(hard)
            break;
        default:
            res.status(404)
            break;
    }
  }
}
