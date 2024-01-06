import { jobs } from "../../../data";

export default async function handler(req, res) {
  const data = jobs.filter((item) => item.id == req.query.id);
  res.status(200).json({ data });
}
