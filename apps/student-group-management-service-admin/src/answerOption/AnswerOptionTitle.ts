import { AnswerOption as TAnswerOption } from "../api/answerOption/AnswerOption";

export const ANSWEROPTION_TITLE_FIELD = "id";

export const AnswerOptionTitle = (record: TAnswerOption): string => {
  return record.id?.toString() || String(record.id);
};
