//ดึงข้อมูลเวลาจากเวลาจริง
const timeEl = document.querySelector('.time')
const btnToggle = document.querySelector('.toggle')

//functionเปลี่ยนแปลงเวลา
function setTime(){
    //ในconsoleที่เราแสดงผลออกมามันมีทั้งวันที่และเวลา เราต้องกรองแค่เวลาออกมาอย่างเดียว
    const time = new Date()
    //สร้างตัวแปรเพื่อเก็บเวลา ชั่วโมง นาที วินาที ดีงมาจาก time โดยใช้ function getช่วงเวลา
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    //แสดงผลโดยการอ้างอิงตัวแปร timeEl ที่เราเขียนไว้ใน html
    timeEl.innerHTML = `${hours}:${minutes<10 ? `0${minutes}`: minutes}
    :${seconds<10 ? `0${seconds}`: seconds}` 
    //เราต้องการให้มีเลข 0 ด้านหน้าหากเป็นหลักหน่วงก็ต้องเขียนเงื่อนไขแบบย่อขึ้นมา
}

//ดักจับอีเวนต์เมื่อมีการคลิกปุ่ม 
btnToggle.addEventListener("click",(e)=>{
    //ต้องการอยากให้เปลี่ยนการแสดงผลในพื้นที่ของ html
    const html = document.querySelector('html')
    //ความหมายในช่อง if คือ ในแท็ก html มีการใส่ class ว่า dark มั้ย ถ้าใส่จะให้เกิดผล
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML = "โหมดกลางคืน" //ถ้าตอนนี้ผลเป็นดาร์คอยู่ให้เอาดาร์กออกและเปลี่ยนชื่อปุ่มเป็นโหมดกลางคืน ในกลุ่มนี้เป็นโหมดกลางวัน
    }else{
        html.classList.add("dark")
        e.target.innerHTML = "โหมดกลางวัน" //ถ้าไม่ก็ให้เป็นปุ่มโหมดกลางวัน ในกลุ่มนี้เป็นโหมดกลางคืน
    }

})

setTime()
setInterval(setTime,1000) //functionนี้จะถูกเรียกทำงานทุกๆ 1 วินาทีเพื่อทำการเปลี่ยนแปลงเวลาโดยใช้ setInterval
