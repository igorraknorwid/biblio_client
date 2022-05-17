import React, { FC, Suspense } from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Cards from "./pages/cards";
import Years from "./pages/years";

// const StepOne = React.lazy(() => {
//   return import("./components/step_one/StepOne");
// });
// const StepTwo = React.lazy(() => {
//   return import("./components/step_two/StepTwo");
// });
// const StepThree = React.lazy(() => {
//   return import("./components/step_three/StepThree");
// });
// const StepFour = React.lazy(() => {
//   return import("./components/step_four/StepFour");
// });import Years from './store/years';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Years />} />
          <Route path=':years' element={<Cards />} />
        </Route>
      </Routes>
    </>
  );
};

export default observer(App);
