import { Avatar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="⛻ƃuᴉʇʇod$-ɹɐɔ☢〄">
      <Tab title="⛻ƃuᴉʇʇod$-ɹɐɔ☢〄">
        <h3>𒀽ƃuᴉʇʇod$-🃁ɹɐɔ⛲︎</h3>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/car1.jpg" alt="1" width={640} height={640} /></div>
          <div><Avatar src="/car3.jpg" alt="3" width={640} height={640} /></div>
          <div><Avatar src="/car4.jpg" alt="4" width={640} height={640} /></div>
          <div><Avatar src="/car5.jpg" alt="5" width={640} height={640} /></div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/car6.jpg" alt="6" width={640} height={640} /></div>
          <div><Avatar src="/car7.jpg" alt="7" width={640} height={640} /></div>
           <div><Avatar src="/car8.jpg" alt="8" width={640} height={640} /></div>
          <div><Avatar src="/car9.jpg" alt="9" width={640} height={640} /></div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/car10.jpg" alt="10" width={640} height={640} /></div>
          <div><Avatar src="/car11.jpg" alt="11" width={640} height={640} /></div>
          <div><Avatar src="/car12.jpg" alt="12" width={640} height={640} /></div>
        </div>
      </Tab>
      <Tab title="⊑¿$ʇᴉɟʇnoЖ">
        <h3>pɐq↦pooƃ</h3>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/fit1.png" alt="1" width={640} height={640} /></div>
          <div><Avatar src="/fit2.png" alt="2" width={640} height={640} /></div>
          <div><Avatar src="/fit3.png" alt="3" width={640} height={640} /></div>
          <div><Avatar src="/fit4.png" alt="4" width={640} height={640} /></div>
        </div>
      </Tab>
      <Tab title="Жʇǝɹɔǝ$ doʇ𒒬">
        <h3>↝dǝǝl$↫uɐǝl⚅</h3>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="/gym1.jpg" alt="1" width={640} height={640} /></div>
          <div><Avatar src="/gym2.jpg" alt="2" width={640} height={640} /></div>
          <div><Avatar src="/gym3.jpg" alt="3" width={640} height={640} /></div>
          <div><Avatar src="/gym4.jpg" alt="4" width={640} height={640} /></div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default Resume;