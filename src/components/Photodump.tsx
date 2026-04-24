import { Avatar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs color={"#ff4200"} defaultActiveTab="⛻ƃuᴉʇʇod$-ɹɐɔ☢〄">
      <Tab title="⛻ƃuᴉʇʇod$-ɹɐɔ☢〄">
        <h3>𒀽ƃuᴉʇʇod$-🃁ɹɐɔ⛲︎</h3>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/cars/car1.jpg" alt="1" width={640} height={640} /></div>
          <div><Avatar src="/cars/car3.jpg" alt="3" width={640} height={640} /></div>
          <div><Avatar src="/cars/car4.jpg" alt="4" width={640} height={640} /></div>
          <div><Avatar src="/cars/car5.jpg" alt="5" width={640} height={640} /></div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/cars/car6.jpg" alt="6" width={640} height={640} /></div>
          <div><Avatar src="/cars/car7.jpg" alt="7" width={640} height={640} /></div>
           <div><Avatar src="/cars/car8.jpg" alt="8" width={640} height={640} /></div>
          <div><Avatar src="/cars/car9.jpg" alt="9" width={640} height={640} /></div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/cars/car10.jpg" alt="10" width={640} height={640} /></div>
          <div><Avatar src="/cars/car11.jpg" alt="11" width={640} height={640} /></div>
          <div><Avatar src="/cars/car12.jpg" alt="12" width={640} height={640} /></div>
        </div>
      </Tab>
      <Tab title="⊑¿$ʇᴉɟʇnoЖ">
        <h3>pɐq↦pooƃ</h3>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/fits/fit1.png" alt="1" width={640} height={640} /></div>
          <div><Avatar src="/fits/fit2.png" alt="2" width={640} height={640} /></div>
          <div><Avatar src="/fits/fit3.png" alt="3" width={640} height={640} /></div>
           <div><Avatar src="/fits/fit5.png" alt="4" width={640} height={640} /></div>
          <div><Avatar src="/fits/fit4.png" alt="4" width={640} height={640} /></div>
        </div>
      </Tab>
      <Tab title="Жʇǝɹɔǝ$ doʇ𒒬">
        <h3>↝dǝǝl$↫uɐǝl⚅</h3>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/gym/gym1.jpg" alt="1" width={640} height={640} /></div>
          <div><Avatar src="/gym/gym2.jpg" alt="2" width={640} height={640} /></div>
          <div><Avatar src="/gym/gym3.jpg" alt="3" width={640} height={640} /></div>
          <div><Avatar src="/gym/gym5.jpg" alt="4" width={640} height={640} /></div>
          <div><Avatar src="/gym/gym4.jpg" alt="4" width={640} height={640} /></div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default Resume;