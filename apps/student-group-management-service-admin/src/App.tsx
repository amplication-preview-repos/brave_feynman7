import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { GroupMembershipList } from "./groupMembership/GroupMembershipList";
import { GroupMembershipCreate } from "./groupMembership/GroupMembershipCreate";
import { GroupMembershipEdit } from "./groupMembership/GroupMembershipEdit";
import { GroupMembershipShow } from "./groupMembership/GroupMembershipShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { StudentAnswerList } from "./studentAnswer/StudentAnswerList";
import { StudentAnswerCreate } from "./studentAnswer/StudentAnswerCreate";
import { StudentAnswerEdit } from "./studentAnswer/StudentAnswerEdit";
import { StudentAnswerShow } from "./studentAnswer/StudentAnswerShow";
import { McqList } from "./mcq/McqList";
import { McqCreate } from "./mcq/McqCreate";
import { McqEdit } from "./mcq/McqEdit";
import { McqShow } from "./mcq/McqShow";
import { AnswerOptionList } from "./answerOption/AnswerOptionList";
import { AnswerOptionCreate } from "./answerOption/AnswerOptionCreate";
import { AnswerOptionEdit } from "./answerOption/AnswerOptionEdit";
import { AnswerOptionShow } from "./answerOption/AnswerOptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"StudentGroupManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="GroupMembership"
          list={GroupMembershipList}
          edit={GroupMembershipEdit}
          create={GroupMembershipCreate}
          show={GroupMembershipShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="StudentAnswer"
          list={StudentAnswerList}
          edit={StudentAnswerEdit}
          create={StudentAnswerCreate}
          show={StudentAnswerShow}
        />
        <Resource
          name="Mcq"
          list={McqList}
          edit={McqEdit}
          create={McqCreate}
          show={McqShow}
        />
        <Resource
          name="AnswerOption"
          list={AnswerOptionList}
          edit={AnswerOptionEdit}
          create={AnswerOptionCreate}
          show={AnswerOptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
