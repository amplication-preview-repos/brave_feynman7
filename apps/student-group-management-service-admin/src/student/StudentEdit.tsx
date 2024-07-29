import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GroupMembershipTitle } from "../groupMembership/GroupMembershipTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
      </SimpleForm>
    </Edit>
  );
};
