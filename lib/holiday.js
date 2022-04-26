const fs = require('fs');
function isHoliday(day, month, type = "PersianCalendar") {
    let data = getDataCalender(type);
    let result = data.filter(function (currentElement) {
        return currentElement.month == month && currentElement.day == day
    });
    if (result.length == 0) {
        return false;
    } else {
        return result[0]['holiday'];
    }
}
function getHolidaysMonth(month, type = "PersianCalendar") {
    let data = getDataCalender(type);
    return data.filter(function (currentElement) {
        return currentElement.month == month
    });
}
function getDetailDay(day, month, type = "PersianCalendar") {
    let data = getDataCalender(type);
    let result = data.filter(function (currentElement) {
        return currentElement.month == month && currentElement.day == day
    });
    if (result.length == 0) {
        return false;
    } else {
        return result[0];
    }
}
function getDataCalender(type) {
    const data = JSON.parse(fs.readFileSync('../event.json'));
    return data[type];
}
module.exports = {
    isHoliday: isHoliday,
    getHolidaysMonth: getHolidaysMonth,
    getDetailDay:getDetailDay,
};

