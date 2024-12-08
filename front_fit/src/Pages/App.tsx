import "../CSS/mainPage.css";
function App() {


  return (
    <><html lang="en">
      <head>
        <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>NewStride</title>
        <link rel="stylesheet" href="styles.css"></link>
      </head>
      <body>
        <header className="navbar">
          <div className="logo">NewStride</div>
          <nav className="nav-links">
            <a href="#">How it Works</a>
            <a href="#">Our Philosphy</a>
          </nav>
          <div className="sign-in">
            <button>Sign in</button>
          </div>
        </header>
        <main className="main-section">
          <div className="text-content">
            <p className="tagline">#1 Nutrition Tracking Web App</p>
            <h1>Reach your goals with NewStride</h1>
            <p className="description">
              Build healthy habits with the exercise and calorie tracker
            </p>
            <div className="cta-button">
              <button>START TODAY</button>
            </div>
          </div>
          <div className= "image-content">
            <img src="fitness-woman.png" alt="Fitness woman"></img>
          </div>
        </main>
      </body>
    </html></>
  );
}


export default App;
