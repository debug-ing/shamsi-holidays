
import Holiday from './lib/holiday.js';
//export { holiday as default}

let s =Holiday.isHoliday(1,1);
console.log(s);
let days = Holiday.getHolidaysMonth(1);
console.log(days);
