import React from "react";

// combine these two context providers into one object
// also create a hook which toggles the state of isSignUpClicked
export const isSignUpClickedContext = React.createContext(false);

export const userLoggedInContext = React.createContext(false);
