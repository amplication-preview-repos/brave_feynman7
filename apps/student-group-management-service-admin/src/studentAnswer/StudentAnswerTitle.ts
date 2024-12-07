import { StudentAnswer as TStudentAnswer } from "../api/studentAnswer/StudentAnswer";

export const STUDENTANSWER_TITLE_FIELD = "selectedOption";

export const StudentAnswerTitle = (record: TStudentAnswer): string => {
  return record.selectedOption?.toString() || String(record.id);
};
