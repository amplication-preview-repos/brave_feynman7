import { Mcq as TMcq } from "../api/mcq/Mcq";

export const MCQ_TITLE_FIELD = "id";

export const McqTitle = (record: TMcq): string => {
  return record.id?.toString() || String(record.id);
};
