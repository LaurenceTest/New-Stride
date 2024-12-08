import "../CSS/mainPage.css";
import "../CSS/login.css"

import HeaderNon from "../Components/header_notuser";


function LogIn() {
  return (
    <>
    <HeaderNon />
    <html lang="en">
      <head>
        <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>NewStride</title>
        <link rel="stylesheet" href="styles.css"></link>
      </head>
      <body className="login-bg">
        <div></div>
        <div className="login-form">
          <h1>NewStride</h1>
          <div>
            <h3>Membership Login</h3>
          </div>
        </div>
      </body>
    </html></>
  );
}


export default LogIn;
