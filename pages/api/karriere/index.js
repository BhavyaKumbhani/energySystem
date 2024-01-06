import { jobs } from "../../../data";

export default async function handler(req, res) {
  // const compare = (a, b) => {
  //   if (a.title < b.title) return -1;
  //   if (a.title > b.title) return 1;
  //   return 0;
  // };
  // jobs[1].data.sort(compare);
  // jobs[1].data.map((el, index) => {
  //   el.id = index;
  //   return el;
  // });
  res.status(200).json({ jobs });
}
