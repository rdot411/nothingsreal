import Login from "./components/Login";
import WindowBar from "./components/WindowBar";
import { useAuth } from "./store/auth";
import DesktopIcon from "./components/DesktopIcon";
import { Amovie2, Inetcpl1301, Inetcpl1313, Joy102, Mplayer11, Mplayer110, Wangimg130, Wordpad } from "@react95/icons";
import { Video } from "@react95/core";
import Resume from "./components/Resume";
import Game from "./components/Game";
import { AGENTS, ClippyProvider } from "@react95/clippy";
import Photodump from "./components/Photodump";

function App() {
  const authinicated = useAuth((state) => state.authinicated);
  return (
    <div style={{ width: "100%", background: "#000000", minHeight: "100vh",position:"relative" }}>
      <img src="/2.jpg" width={400} style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-70%)"}}/>
      {!authinicated && <Login />}

      {authinicated && (
        <ClippyProvider agentName={AGENTS.CLIPPY}>
          <div className="fixed">
            <DesktopIcon icon={<Amovie2 variant="32x32_4"/>} name="unɹ ɯɐƐ">
              <Video
                w="420px"
                src="/3amrun.mp4"
                
              />
            </DesktopIcon>
            <DesktopIcon icon={<Inetcpl1313 variant="32x32_4"/>} name="ǝlʎʇsǝɟᴉl">
             <iframe width={800} height={500} src="https://en.wikipedia.org/wiki/Online_piracy"/>
            </DesktopIcon>
            <DesktopIcon width={650} icon={<Wordpad variant="32x32_4"/>} name="ǝɯ ʇnoqɐ">
             <Resume/>
            </DesktopIcon>
            <DesktopIcon icon={<Mplayer110 variant="32x32_4"/>} name="ǝuo uᴉ ǝloɥ">
              <Video
                w="420px"
                src="/pool.mp4"
                
              />
              </DesktopIcon>
            <DesktopIcon width={400} height={400} icon={<Joy102 variant="32x32_4"/>} name="ssǝɥɔ">
             <Game/>
            </DesktopIcon>
            <DesktopIcon width={650} icon={<Wangimg130 variant="32x32_4"/>} name="dɯnp oʇoɥd">
             <Photodump/>
            </DesktopIcon>
            <DesktopIcon icon={<Inetcpl1301 variant="32x32_4"/>} name="dɐɹʇ ǝɥʇ">
             <iframe width={800} height={500} src="https://en.wikipedia.org/wiki/Birds_in_the_Trap_Sing_McKnight"/>
            </DesktopIcon>
            <DesktopIcon icon={<Mplayer11 variant="32x32_4"/>} name="sqɯoq pɹɐllᴉq">
              <Video
                w="420px"
                src="/poolnewcrib.mp4"
                
              />
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
