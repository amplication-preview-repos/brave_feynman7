import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GroupMembershipTitle } from "../groupMembership/GroupMembershipTitle";
import { StudentAnswerTitle } from "../studentAnswer/StudentAnswerTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <ReferenceArrayInput
          source="groupMemberships"
          reference="GroupMembership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupMembershipTitle} />
        </ReferenceArrayInput>
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="studentAnswers"
          reference="StudentAnswer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentAnswerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
