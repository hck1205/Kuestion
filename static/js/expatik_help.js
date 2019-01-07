export const formatDatetime = (datetime) => {
    if(datetime === "" || datetime === undefined) return ""
    const addZero = (num) => num < 10 ? "0" + num : num
    const dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    const monthArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const today = new Date(datetime)

    let dd = addZero(today.getDate())
    let mm = monthArr[today.getMonth()]
    let yy = today.getFullYear().toString().substr(-2);
    let day = dayArr[today.getDay()]
    let hr = addZero(today.getHours())
    let min = addZero(today.getMinutes())
    let sec = addZero(today.getSeconds())

    return hr + ":" + min + ":"+ sec + " " + dd + ". " + mm + ". (" + day  + ")"
}