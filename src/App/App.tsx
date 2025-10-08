import About from "../Containers/About";
import Application from "../Containers/Applications";
import CommonHeader from "../Containers/CommonHeader";
import Footer from "../Containers/Footer";
import FullscreenImage from "../Containers/FullscreenImage";
import Main from "../Containers/Main";
import Profile from "../Containers/Profile";
import Projects from "../Containers/Projects";
import { Sections } from "../Shared/types";

function App() {
  return (
    <Main>
      <FullscreenImage />
      <Profile />
      <CommonHeader />
      <About />
      <Projects id={Sections.EnterpriseProjects} />
      <Projects id={Sections.PersonalProjects} />
      <Application />
      <Footer />
    </Main>
  );
}

export default App;
