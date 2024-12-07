import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MCQ_TITLE_FIELD } from "../mcq/McqTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const StudentAnswerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentAnswers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
