import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findLectureById = async (id: string) =>
  prisma.cds_lecture.findUnique({ where: { lecture_id: +id } });

export const returnLectures = async () => ({
  results: await prisma.cds_lecture.findMany(),
});