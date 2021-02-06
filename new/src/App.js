import "./App.css";

/**
 * TODO!!
 *
 * Bootstrap is not compatible with react by default because bootstrap
 * uses javascript, and react / bootstrap won't automatically be able
 * to talk to each other. Because of this, you will need to use the
 * react-bootstrap package. See:
 *
 * https://react-bootstrap.github.io/getting-started/introduction/
 */

/** TODO
 *
 * Although this is technically react, this is not yet in the style of
 * react. Together, we will break this page down into reusable components,
 * which is the essence of React and the reason React is so popular.
 */

/**
 * Problems with the markup that prevented it from working right away:
 * - class => className
 * - <label for... => <label htmlFor...
 * - style="..." => style={{attribute: value, ...}}
 * - A few unclosed <input> tags (must be <input></input> or <input />)
 * - A few unclosed <br> tags (must be <br />)
 */

function App() {
  return (
    <div className="App">
      <nav className="navbar my-buttons">
        <li>
          <a href="#home" className="my-link text-white btn">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="my-link text-white btn">
            About
          </a>
        </li>
        <li>
          <a href="#blog" className="my-link text-white btn">
            Blog
          </a>
        </li>
        <li>
          <a href="contact" className="my-link text-white btn">
            Contact
          </a>
        </li>
      </nav>

      <main className="my-title my-container">
        <section className="my-child my-home" id="home">
          <div className="col-10 float-right h-100">
            <h1>Brendan Allatta</h1>
            <p>Musician | Teacher | Freelancer</p>
            <i className="fa fa-chevron-down" id="bottom"></i>
          </div>
        </section>
        <section className="my-child my-about" id="about">
          <div className="col-11 float-right">
            <h2>About Me</h2>
            {/* I changed this into sequential paragraphs, which is what I think */}
            {/* you wanted. */}
            <p>
              A New Jersey native and graduate of Montclair State University, I
              perform and teach music.
            </p>
            <p>
              I run my own private lesson studio alongside an amateur recording
              studio. In addition to my pursuits in the music and audio fields,
              I also program on the side.
            </p>
            <p>
              Since COVID seems likely to have lingering effects, espeically in
              the music fields for the near future, it seemed interesting enough
              to learn to program.
            </p>
            <p>
              As much of a solo pursuit learning an instrument already is (I
              mean... it doesn't play itself for a reason), I saw many parallels
              to learning to program.
            </p>
            <p>
              This is all a work in progress, as is life. With that, I hope to
              see you on the other side.
            </p>
          </div>
        </section>
        <section className="my-child my-blog" id="blog">
          <h2>What I Am Up To</h2>
          {/* <!-- The grid: three columns --> */}
          <div className="row">
            {/* TODO: Make onClick do something in react; currently does nothing; */}
            {/* this construction is just to save the text that was there before. */}
            <div className="column" onClick={() => "openTab('b1');"}>
              <div className="card" style={{ background: "#C9D1C8" }}>
                Music
              </div>
            </div>
            {/* TODO: Make onClick do something in react; currently does nothing; */}
            {/* this construction is just to save the text that was there before. */}
            <div className="column" onClick={() => "openTab('b2');"}>
              <div className="card" style={{ background: "#C9D1C8" }}>
                Audio
              </div>
            </div>

            {/* TODO: Make onClick do something in react; currently does nothing; */}
            {/* this construction is just to save the text that was there before. */}
            <div className="column" onClick={() => "openTab('b3');"}>
              <div className="card" style={{ background: "#C9D1C8" }}>
                Programming
              </div>
            </div>
          </div>

          {/* The expanding grid (hidden by default) */}
          <div
            id="b1"
            className="containerTab"
            style={{ display: "none", background: "green" }}
          >
            {/* If you want the ability to close the container, add a close button */}
            {/* TODO: Make onClick do something in react; currently does nothing; */}
            {/* this construction is just to save the text that was there before. */}
            <span
              onClick={() => "this.parentElement.style.display='none'"}
              className="closebtn"
            >
              x
            </span>
            <h2></h2>
            <p></p>
          </div>

          <div
            id="b2"
            className="containerTab"
            style={{ display: "none", background: "blue" }}
          >
            {/* TODO: Make onClick do something in react; currently does nothing; */}
            {/* this construction is just to save the text that was there before. */}
            <span
              onClick={() => "this.parentElement.style.display='none'"}
              className="closebtn"
            >
              x
            </span>
            <h2></h2>
            <p></p>
          </div>

          <div
            id="b3"
            className="containerTab"
            style={{ display: "none", background: "red" }}
          >
            {/* TODO: Make onClick do something in react; currently does nothing; */}
            {/* this construction is just to save the text that was there before. */}
            <span
              onClick={() => "this.parentElement.style.display='none'"}
              className="closebtn"
            >
              x
            </span>
            <h2></h2>
            <p></p>
          </div>
        </section>
        <section className="my-child my-contact" id="contact">
          <div className="container">
            <form action="FILL THIS IN LATER">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="name"
                name="firstname"
                placeholder="Your name.."
              />

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label htmlFor="inquiry-type">Inquiry Type</label>
              <select id="inquiry-type" name="inquiry-type">
                <option value="private-lessons">Private Lessons</option>
                <option value="audio-recording">Audio</option>
                <option value="website-building">Website Building</option>
              </select>

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
