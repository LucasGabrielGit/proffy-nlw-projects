import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import TeacherForm from "./TeacherForm";
import TeacherList from "./TeacherList";
import Login from "./Login";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
