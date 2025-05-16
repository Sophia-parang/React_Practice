import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./public/sophia.png" alt="Sophia Na" />;
}

function Intro() {
  return (
    <main>
      <h1>Sophia Na</h1>
      <p>
        {" "}
        I'm an aspiring frontend developer with a background in content and
        design. Currently learning React, JavaScript, and modern web
        technologies. Passionate about crafting intuitive and responsive user
        interfaces. Always curious, always building — one project at a time.
      </p>
    </main>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Html" color="royalblue" />
      <Skill name="CSS" color="red" />
      <Skill name="Git and GitHub" color="yellow" />
      <Skill name="JavaScript" color="cyan" />
      <Skill name="React" color="pink" />
      <Skill name="Web Design" color="orange" />
    </div>
  );
}

function Skill({ name, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{name}💪</p>
    </div>
  );
}

export default App;
