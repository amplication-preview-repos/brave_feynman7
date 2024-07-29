import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AnswerOptionTitle } from "../answerOption/AnswerOptionTitle";
import { CourseTitle } from "../course/CourseTitle";
import { StudentAnswerTitle } from "../studentAnswer/StudentAnswerTitle";

export const McqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="answerOptions"
          reference="AnswerOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerOptionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <TextInput label="question" multiline source="question" />
        <ReferenceArrayInput
          source="studentAnswers"
          reference="StudentAnswer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentAnswerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
