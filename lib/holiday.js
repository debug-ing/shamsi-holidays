import fs from 'fs';
const Holiday = {
    isHoliday(day,month,type = "PersianCalendar"){
        let data = this.getDataCalender(type);
        let result = data.filter(function (currentElement) {
            return currentElement.month==month && currentElement.day==day
        });
        if(result.length == 0){
            return false;
        }else{
            return result[0]['holiday'];
        }
    },
    getHolidaysMonth(month,type = "PersianCalendar"){
        let data = this.getDataCalender(type);
        return data.filter(function (currentElement) {
            return currentElement.month==month
        });
    },
    getDetailDay(day,month){
        let data = this.getDataCalender(type);
        let result = data.filter(function (currentElement) {
            return currentElement.month==month && currentElement.day==day
        });
        if(result.length == 0){
            return false;
        }else{
            return result[0];
        }
    },
    getDataCalender(type){
        const data  = JSON.parse( fs.readFileSync('./event.json'));
        return data[type];
    }
}
export default Holiday