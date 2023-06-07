import './App.css';
import Box from './Box';
import Grid from './Grid';
import Notification from './Notification';

function App() {
  return (
    <section className='app-section'>
      <div className='app-container'>
        <h2>One Piece</h2>
        <Notification title="สมบัติของชั้นน่ะหรอ" description="อยากได้ก็ไปเอาสิ ไปหาเอาเลย" />
        <Grid columns={3}>
          <Box title='วันพีซน่ะมีอยู่จริง'>
            <ul>
              <li>ชั้นมาเพื่อหยุดสงครามนี้</li>
              <li>ชั้นจะเป็นราชาโจรสลัดให้ได้เล้ย</li>
              <li>บาดแผลที่กลางหลังคือความอับอายของนักดาบ</li>
            </ul>
          </Box>
          <Box title='ตัวละคร'>
            <p>หมายเหตุ : คำพูดของตัวละคร</p>
            <ol>
              <li li>แชงคูส</li>
              <li>ลูฟี่</li>
              <li>โซโล</li>
            </ol>
          </Box>
          <Box title='ฉายา'>
            <p>ผมแดง</p>
            <p>หมวกฟาง</p>
            <p>นักล่าค่าหัว</p>
          </Box>
        </Grid>
      </div>
    </section>
  );
}

export default App;
