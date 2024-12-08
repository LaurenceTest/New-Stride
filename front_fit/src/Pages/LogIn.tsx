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
      <body>
        <div className="login-bg">
          <p>test</p>
          <div className="login-form">
          <div className="form-floating">
            <input type="email" className="form-control fs-15px" id="floatingInput" />
            <label for="floatingInput" class="d-flex align-items-center fs-13px">
              Email address
            </label>
          </div>
          </div>
        </div>
      </body>
    </html></>
  );
}


export default LogIn;
