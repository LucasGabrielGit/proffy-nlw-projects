import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import TeacherForm from "./TeacherForm";
import TeacherList from "./TeacherList";
import Login from "./Login";
import Register from "./Register";
import SuccessPage from "./Success";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/success" component={SuccessPage} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
