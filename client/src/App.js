import React from "react";
import {
  userLoggedInContext,
  isSignUpClickedContext,
} from "./ContextProvider.tsx";
import Navbar from "./components/Navbar.tsx";
import LoginModal from "./components/LoginModal.tsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <LoginModal />
    </div>
  );
};

export default App;
