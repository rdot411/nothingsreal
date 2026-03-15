import Login from "./components/Login";
import WindowBar from "./components/WindowBar";
import { useAuth } from "./store/auth";
import DesktopIcon from "./components/DesktopIcon";
import { Amovie2, Inetcpl1313, Joy102, Wordpad } from "@react95/icons";
import { Video } from "@react95/core";
import Resume from "./components/Resume";
import Game from "./components/Game";
import { AGENTS, ClippyProvider } from "@react95/clippy";

function App() {
  const authinicated = useAuth((state) => state.authinicated);
  return (
    <div style={{ width: "100%", background: "#f58b57", minHeight: "100vh",position:"relative" }}>
      <img src="/image.png" width={400} style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-70%)"}}/>
      {!authinicated && <Login />}

      {authinicated && (
        <ClippyProvider agentName={AGENTS.CLIPPY}>
          <div className="fixed">
            <DesktopIcon icon={<Amovie2 variant="32x32_4"/>} name="oǝpᴉʌ">
              <Video
                w="420px"
                src="public/3amrun.mp4"
                
              />
            </DesktopIcon>
            <DesktopIcon icon={<Inetcpl1313 variant="32x32_4"/>} name="ɹǝsʍoɹq">
             <iframe width={800} height={500} src="https://en.wikipedia.org/wiki/Online_piracy"/>
            </DesktopIcon>
            <DesktopIcon width={650} icon={<Wordpad variant="32x32_4"/>} name="ǝɯ ʇnoqɐ">
             <Resume/>
            </DesktopIcon>
            <DesktopIcon width={400} height={400} icon={<Joy102 variant="32x32_4"/>} name="ǝɯɐƃ">
             <Game/>
            </DesktopIcon>
          </div>
          <WindowBar />
        </ClippyProvider>
      )}
    </div>
  );
}
//fein
export default App;
