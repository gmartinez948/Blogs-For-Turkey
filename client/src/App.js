import React from "react";
import {
  userLoggedInContext,
  isSignUpClickedContext,
} from "./ContextProvider.tsx";
import Navbar from "./components/Navbar.tsx";
import LoginModal from "./components/LoginModal.tsx";

const App = () => {
  const isSignUpClicked = React.useContext(isSignUpClickedContext);
  console.log(isSignUpClicked, "sign up status");
  return (
    <div>
      <Navbar />
      {isSignUpClicked && <LoginModal />}
    </div>
  );
};

export default App;
