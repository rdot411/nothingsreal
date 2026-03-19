import { List, TaskBar } from "@react95/core";
import {
  Computer3,
  Settings,
  Amovie2,
  Joy102,
  Inetcpl1313,
  Wordpad,
  Mail,
  Wangimg130,
  Inetcpl1301
} from "@react95/icons";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import Shutdown from "./Shutdown";
import { useWindowsStore } from "../store/windows";
import { FaSpotify, FaLaptop } from "react-icons/fa6";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "0 10px", alignSelf: "center" }}>
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}

function WindowBar() {
  const [showShutdown, setShowShutdown] = useState(false);
  const { openWindow } = useWindowsStore();
  return (
    <>
      <TaskBar
        list={
          <List width={"200px"}>
            <List.Item icon={<Mail variant="32x32_4" />}>
              <List width={"200px"}>
                <List.Item icon={<FaGithub size={16} />}>
                  <a href="https://github.com/rdot411" target="_blank" style={{ textDecoration: 'none', color: '#1a5a9e', fontFamily: 'MS Sans Serif' }}>qnɥʇᴉƃ</a>
                </List.Item>
                <List.Item icon={<FaInstagramSquare size={16} />}>
                  <a href="https://instagram.com/rghvtwri" target="_blank" style={{ textDecoration: 'none', color: '#4e1bd1', fontFamily: 'MS Sans Serif' }}>ɯɐɹƃɐʇ$uᴉ</a>
                </List.Item>
                <List.Item icon={<FaSpotify size={16} />}>
                  <a href="https://open.spotify.com/user/minecreeper4life" target="_blank" style={{ textDecoration: 'none', color: '#b81fcc', fontFamily: 'MS Sans Serif' }}>ʎɟᴉʇod$</a>
                </List.Item>
                <List.Item icon={<Mail variant="16x16_4" />}>
                  <a href="raghavtiw11@gmail.com" style={{ textDecoration: 'none', color: '#bc2056', fontFamily: 'MS Sans Serif' }}>(ǝʞᴉ$) ʞoolʇno</a>
                </List.Item>
                <List.Item icon={<FaLaptop size={16} />}>
                  <a href="https://raghavt.netlify.app/" style={{ textDecoration: 'none', color: '#930e69', fontFamily: 'MS Sans Serif' }}>(ƃo) oᴉloɟʇɹod</a>
                </List.Item>
              </List>
              ͕̲̭̯̘̂̌͋̀̎ʇ̫̳̱̥͋̈̿͂̇͘͟ɔ̸̬̠̞̺̘̭̖̹́̾̉́̅͢ͅɐ̦͕̼̞̙̐̾̾̏͘͡ʇ̴̡̬̠̠̺̱͌̑̽̔͆̈́ú̷̗̳̤̩͎͉̣̔̃͋̋͛̈́͢͝ò̶̢̳̼̬̖͚͆͗̌̓͊͆͐̚͜ɔ
            </List.Item>
            <List.Item
              onClick={() => openWindow("Game")}
              icon={<Joy102 variant="32x32_4" />}
            >
              ǝɯɐƃ
            </List.Item>
            <List.Item icon={<Settings variant="32x32_4" />}>
              $ƃuᴉʇʇǝ$
            </List.Item>
            <List.Item
              onClick={() => openWindow("Browser")}
              icon={<Inetcpl1313 variant="32x32_4" />}
            >
              ǝlʎʇsǝɟᴉl
            </List.Item>
            <List.Item
              onClick={() => openWindow("Resume")}
              icon={<Wordpad variant="32x32_4" />}
            >
              ǝɯ ʇnoqɐ
            </List.Item>
            <List.Item
              onClick={() => openWindow("Photodump")}
              icon={<Wangimg130 variant="32x32_4" />}
            >
              dɯnp oʇoɥd
            </List.Item>
            <List.Divider />
            <List.Item
              onClick={() => openWindow("The trap")}
              icon={<Inetcpl1301 variant="32x32_4" />}
            >
              dɐɹʇ ǝɥʇ
            </List.Item>
            <List.Divider />
            <List.Item
              onClick={() => setShowShutdown(true)}
              icon={<Computer3 variant="32x32_4" />}
            >
              s̶̨̱̠̥͖̣̘̱̽̆̿̀̆̉̚͜͢͝h̵̫͇̲̥̙̝̖̦̦͆̇̌̇̄͢u̴̡̱̱̪̺̲̗̒̔͒̌͒̚͞t̶̠̹̟͎̜͈̖͋̀̽̈́̏͑ d̰̱̭̩̱̽̿̂͋̅̋̒̀͢͠o̝̮͇͉͙͛̇̾̽̏͘ͅw̵̨̺̫̹͉̖̳͕̝̻͌́̎̿̈̇̒n̵͓͔̳̬͓̓̍͗̂͌͊̍̿͢͜͜
            </List.Item>
            
          </List>
        }
      >
        <Clock />
      </TaskBar>
      {showShutdown && <Shutdown close={() => setShowShutdown(false)} />}
    </>
  );
}

export default WindowBar;
