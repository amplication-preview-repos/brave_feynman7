import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { McqTitle } from "../mcq/McqTitle";

export const AnswerOptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isCorrect" source="isCorrect" />
        <ReferenceInput source="mcq.id" reference="Mcq" label="mcq">
          <SelectInput optionText={McqTitle} />
        </ReferenceInput>
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
