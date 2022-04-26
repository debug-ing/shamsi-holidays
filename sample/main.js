const d = require('shamsi-holidays');
let sample =d.isHoliday(2,1);

let sampleDays =d.getHolidaysMonth(1);
console.log(sample);

let infoDay = d.getDetailDay(1,1);
console.log(sampleDays);

console.log(infoDay);
