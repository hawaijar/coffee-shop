import data from "../../model/data";
export default function handler(req, res) {
  res.status(200).json(data.products);
}
