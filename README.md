# Smart Web App

Smart Web App เป็นแอปพลิเคชันเว็บสมัยใหม่ที่ออกแบบเพื่อการใช้งานในระดับองค์กร พัฒนาด้วย Vite, React และ Tailwind CSS โดยรวมไลบรารี UI และเครื่องมือแสดงข้อมูลที่หลากหลาย รองรับการออกแบบที่ตอบสนองต่อทุกหน้าจอ (responsive design), Progressive Web App (PWA), และการปรับแต่งธีมเพื่อเพิ่มความสะดวกสบายในการใช้งาน

## รายละเอียดโปรเจกต์

- **ชื่อโปรเจกต์:** smart-web-app
- **เวอร์ชัน:** 1.0.0
- **ประเภท:** โมดูล (ESM)
- **สภาพแวดล้อม:** Vite สำหรับการพัฒนา, ESLint สำหรับตรวจสอบโค้ด และรองรับ PWA

## ไลบรารีและเครื่องมือที่ใช้

### Dependencies หลัก

- **@mui/material และ @mui/icons-material:** คอมโพเนนต์ UI และไอคอนจาก Material-UI
- **antd:** คอมโพเนนต์ UI ในระดับองค์กรจาก Ant Design
- **@emotion/react และ @emotion/styled:** ชุดเครื่องมือสำหรับจัดการ CSS-in-JS
- **react-router-dom:** สำหรับการจัดการการนำทางในแอป
- **axios:** สำหรับการทำ HTTP Requests ไปยัง API
- **apexcharts และ react-apexcharts:** ไลบรารีสำหรับการแสดงกราฟข้อมูล
- **sweetalert2 และ react-toastify:** เครื่องมือแสดงการแจ้งเตือนและคำเตือน
- **localforage:** จัดการข้อมูลใน local storage
- **xlsx และ papaparse:** สำหรับจัดการไฟล์ข้อมูล CSV และ Excel
- **framer-motion:** ไลบรารีสำหรับการทำแอนิเมชันที่มีประสิทธิภาพสูง

### Dev Dependencies

- **eslint และ eslint-plugin-react:** ใช้ในการตรวจสอบคุณภาพโค้ด
- **tailwindcss และ daisyUI:** เครื่องมือจัดการ CSS และธีมที่ยืดหยุ่นเพื่อการออกแบบ UI
- **@vitejs/plugin-react:** ปลั๊กอิน Vite สำหรับรองรับ React
- **@tailwindcss/typography:** ปลั๊กอิน TailwindCSS สำหรับการจัดการรูปแบบของข้อความ

## คุณสมบัติพิเศษ

- **PWA Support:** รองรับการทำงานในโหมดออฟไลน์ และสามารถเพิ่มแอปลงในหน้าแรกของอุปกรณ์ได้
- **Responsive Design:** รองรับการใช้งานบนอุปกรณ์ทุกประเภท
- **Data Visualization:** แสดงข้อมูลเชิงกราฟที่สวยงามและอินเทอร์แอคทีฟผ่าน ApexCharts
