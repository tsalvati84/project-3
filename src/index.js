import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import config from "./components/react-auth/aws-exports";
import Amplify from "aws-amplify"


Amplify.configure(config)

ReactDOM.render(<App />, document.getElementById("root"));
