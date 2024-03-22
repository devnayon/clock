function clock(){
    let htmlEle = document.querySelector('#finalTime')
    let tarik = document.querySelector('#tarik')
    setInterval(()=>{
        let date = new Date();
        let hourse = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let d = date.getDate();
        let m = date.getMonth()+1;
        let y = date.getFullYear();
        hourse = hourse % 12 || 12;
        let amOrPm = hourse >= 12 ? 'AM' : 'PM';
        let fixedHourse = hourse < 10 ? '0' + hourse:hourse;
        let fixedMinutes = minutes < 10 ? '0' + minutes:minutes;
        let fixedSeconds = seconds < 10 ?  '0' + seconds:seconds;
        let result = `${fixedHourse}:${fixedMinutes}:${fixedSeconds} ${amOrPm}`
        let finalDate = `${m}/${d}/${y}`
        htmlEle.textContent=result;
        tarik.textContent=finalDate
    })
}
clock()