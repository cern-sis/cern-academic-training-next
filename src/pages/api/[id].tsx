import { ContextProps } from "@/common/interfaces";
import { findLectureById } from "../../../api/db_client";
import {pathOr} from "ramda";

export default async function handler(context:ContextProps, res:any ): Promise<void> {
  const query = context.query;
  const id = pathOr("", ["id"], query)
  try {
    const lecture = await findLectureById(id);
    lecture
      ? res.status(200).json(lecture)
      : res
          .status(404)
          .json({ message: `Lecture with id ${id} doesn't exist.` });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}