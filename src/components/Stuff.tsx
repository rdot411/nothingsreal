import { Avatar, Fieldset, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs color={"#ff4200"} defaultActiveTab="I">
      <Tab  title="I">
        <div style={{display:"flex", flexDirection:"row",}}>
          <div><Avatar src="/posts/aus/aus1.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/aus/aus2.jpg" alt="2"  width={200} height={50}/></div>
          <div><Avatar src="/posts/aus/aus5.jpg" alt="3" width={200} height={50}/></div>
           <div><Avatar src="/posts/aus/aus9.jpg" alt="5"  width={200} height={50}/></div>
        </div>
        <div><Avatar src="/posts/aus/aus4.jpg" alt="4" width={600} height={100}/></div>
         <div style={{display:"flex", flexDirection:"row",}}>
        <div><Avatar src="/posts/aus/aus3.jpg" alt="5" width={50} height={50}/></div>
        <div><Avatar src="/posts/aus/aus7.jpg" alt="5"  width={50} height={50}/></div>
         <div><Avatar src="/posts/aus/aus6.jpg" alt="5"  width={50} height={50}/></div>
          <div><Avatar src="/posts/aus/aus8.jpg" alt="5"  width={50} height={50}/></div>
        </div>
        <p></p>
        <Fieldset >
        <h3>9ᄅ0ᄅ lᴉɹdɐ || ︎☹ǝuɐq$ᴉɹq᯽</h3>
        <p>🂱🂾🂽🂻🂺</p>
        </Fieldset>
      </Tab>

      <Tab  title="II">
        <div style={{display:"flex", flexDirection:"row",}}>
          <div><Avatar src="/posts/2026/261.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/263.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/264.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/267.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/265.jpg" alt="1" width={200} height={50} /></div>
        </div>
         <div style={{display:"flex", flexDirection:"row",}}>
        <div><Avatar src="/posts/2026/268.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/269.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/2610.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/2612.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/2611.jpg" alt="1" width={200} height={50} /></div>
        </div>
         <div style={{display:"flex", flexDirection:"row",}}>
          <div><Avatar src="/posts/2026/266.jpg" alt="1" width={200} height={50} /></div>
          <div><Avatar src="/posts/2026/262.jpg" alt="1" width={200} height={50} /></div>
        </div>
        
        <p></p>
        <Fieldset >
        <h3>9ᄅ0ᄅ || ︎𝔵ᴉsʎʇuǝʍʇʎʇuǝʍʇ</h3>
        <p>⍟𝔲𝖙𝖙𝖆 𝕿𝖎𝖒𝟛.</p>
        </Fieldset>
      </Tab>
      
    </Tabs>
  );
}

export default Resume;