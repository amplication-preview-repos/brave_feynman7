import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { MCQ_TITLE_FIELD } from "./McqTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const McqShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="question" source="question" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AnswerOption"
          target="mcqId"
          label="AnswerOptions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isCorrect" source="isCorrect" />
            <ReferenceField label="mcq" source="mcq.id" reference="Mcq">
              <TextField source={MCQ_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentAnswer"
          target="mcqId"
          label="StudentAnswers"
        >
          <Datagrid rowClick="show">
            <TextField label="answerDate" source="answerDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="mcq" source="mcq.id" reference="Mcq">
              <TextField source={MCQ_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="selectedOption" source="selectedOption" />
            <ReferenceField
              label="student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
