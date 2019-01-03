exports.get = (req, res) => {
    let now = new Date();
    let koreanDatetime = now.getTime() + (now.getTimezoneOffset() * 60000) + (9 * 3600000); // + 9 = 한국표준시
    res.send(koreanDatetime.toString());
};