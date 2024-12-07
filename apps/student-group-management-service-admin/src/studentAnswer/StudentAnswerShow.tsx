import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MCQ_TITLE_FIELD } from "../mcq/McqTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const StudentAnswerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="answerDate" source="answerDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="mcq" source="mcq.id" reference="Mcq">
          <TextField source={MCQ_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="selectedOption" source="selectedOption" />
        <ReferenceField label="student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
