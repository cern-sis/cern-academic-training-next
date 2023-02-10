import { returnLectures } from "../../../api/db_client";

export default async function allLectureshandler(req, res) {
  try {
    const lectures = await returnLectures();
    lectures
      ? res.status(200).json(lectures)
      : res.status(404).json({ message: `No lectures uploaded to the server` });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}