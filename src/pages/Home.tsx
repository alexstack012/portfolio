import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="HomeContainer">
      <Navbar />

      <div className="Container">

        <div className="section-card HomeContent home-enter">
          <h1>
            Hello! My name is <span className="name">Alex</span>
          </h1>
          <p>I am a software developer based in Minnesota.</p>

          <ul className="LinkRow">
            <li><a className="link" href="https://github.com/alexstack012">Github</a></li>
            <li><a className="link" href="https://www.linkedin.com/in/alexstack/">LinkedIn</a></li>
            <li><a className="link" target="_blank" href="/ASTACKResume.pdf" rel="noopener noreferrer">Resume</a></li>
            <li><a className="link" href="mailto:alex_stack012@live.com">Email</a></li>
          </ul>
        </div>

        <div className="section-divider" />

        <div className="section-card about about-enter">
          <h2>About Me</h2>
          <p className="aboutParagraph">
            My name is Alex Stack and I am a software developer based in
          Minnesota. I graduated from high school early to enlist the US Army
          where I served for 8 years. I took a coding bootcamp during covid and
          learned everything I could about software development and have loved
          it ever since.
          <br />
          <br />
          Frontend-focused Software Engineer with several years of experience
          building scalable, accessible, and responsive applications. Strong
          proficiency in Angular (7–15), Vite/React, TypeScript, JavaScript, and
          API-driven development. Experienced in creating reusable UI systems,
          improving performance, writing maintainable code, and contributing to
          full-stack development with Node, Python, and SQL. Known for being a
          fast learner, strong collaborator, and adaptive engineer who can work
          across the stack.
          <br />
          <br />
          When Im not coding I'm either with my family as I am a father of 4, I
          love video games, music and anything nerdy! from Star wars, DnD,
          Warhammer 40k, and more!
          </p>
        </div>

      </div>
    </div>
  );
}
