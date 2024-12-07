import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { McqTitle } from "../mcq/McqTitle";
import { StudentTitle } from "../student/StudentTitle";

export const StudentAnswerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="answerDate" source="answerDate" />
        <ReferenceInput source="mcq.id" reference="Mcq" label="mcq">
          <SelectInput optionText={McqTitle} />
        </ReferenceInput>
        <TextInput label="selectedOption" source="selectedOption" />
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
