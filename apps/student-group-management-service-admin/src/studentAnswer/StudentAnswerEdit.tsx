import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { McqTitle } from "../mcq/McqTitle";
import { StudentTitle } from "../student/StudentTitle";

export const StudentAnswerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
