// const monthsShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
// const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
// const day = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
//
// const today = new Date()
//
// const addZero = (num) => {
//     if(num < 10) num = "0" + num
//     return num
// }
//
// const getDate = () => {
//     let dd = addZero(today.getDate())
//     let mm = addZero(today.getMonth() + 1) // let mm = monthsShort[today.getMonth()]
//     let yyyy = today.getFullYear()
//
//     return dd + "." + mm + "." + yyyy
// }
//
// const getDay = () => {
//     return day[today.getDay()]
// }
//
// const getTime = () => {
//     let hour = addZero(today.getHours())
//     let min = addZero(today.getMinutes())
//     // let sec = today.getSeconds()
//
//     return hour + ":" + min
// }

exports.get = (req, res) => {
    // let today = {
    //     date: getDate(),
    //     time: getTime(),
    //     day: getDay()
    // }
    let now = new Date();
    let koreanTime = now.getTime() + (now.getTimezoneOffset() * 60000) + (9 * 3600000); // + 9 = 한국표준시

    res.send(koreanTime.toString());
};