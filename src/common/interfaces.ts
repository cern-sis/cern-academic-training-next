export interface LectureProps {
  id: number;
  lecture_id: number;
  title: string;
  date: Date;
  corporate_author: string;
  abstract: string;
  series: string;
  speaker: string[];
  speaker_details: string[];
  event_details: string;
  thumbnail_picture: string;
  language: string;
  subject_category: string;
  lecture_note?: Date;
  imprint: string;
  license: string;
  keywords: string[];
  sponsor: string;
  files: string[];
  type: string[];
}

export interface ContextProps {
  query: QueryProps;
}
export interface QueryProps {
  id: number;
}
