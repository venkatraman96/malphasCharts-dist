import MillisecondInterval from'./time-interval-ms.js';const millisecond=new MillisecondInterval('millisecond',()=>{},(a,b)=>a.setTime(+a+ +b),(a,b)=>b-a);export default millisecond;