import { Avatar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="⊑¿$ʇᴉɟʇnoЖ">
      <Tab title="⊑¿$ʇᴉɟʇnoЖ">
        <h3>pɐq↦pooƃ</h3>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="src/assets/fit1.png" alt="1" width={640} height={640} /></div>
          <div><Avatar src="src/assets/fit2.png" alt="2" width={640} height={640} /></div>
          <div><Avatar src="src/assets/fit3.png" alt="3" width={640} height={640} /></div>
        </div>
      </Tab>
      <Tab title="Жʇǝɹɔǝ$ doʇ𒒬">
        <h3>↝dǝǝl$↫uɐǝl⚅</h3>
        <div style={{display:"flex", flexDirection:"row"}}>
          <div><Avatar src="src/assets/gym1.jpg" alt="1" width={640} height={640} /></div>
          <div><Avatar src="src/assets/gym2.jpg" alt="2" width={640} height={640} /></div>
          <div><Avatar src="src/assets/gym3.jpg" alt="3" width={640} height={640} /></div>
          <div><Avatar src="src/assets/gym4.jpg" alt="4" width={640} height={640} /></div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default Resume;