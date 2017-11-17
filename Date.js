/**
 * 日期转换类
 */
class DateFormat {
    /**
     * 构造器
     * @param format {String} 格式  //  YYYY-MM-dd-hh-mm-ss-ww
     */
    constructor(format) {
        this.f = format;
    }

    /**
     * 通过时间戳获取格式化的日期字符串
     * @param timestamp {Number} 时间戳
     * @return {String} 转换的日期
     */
    format(timestamp) {
        date = new Date(timestamp);
        return this.f
            .replace('yyyy', date.getFullYear())
            .replace('MM', ('0' + (date.getMonth() + 1)).slice(-2))
            .replace('dd', ('0' + date.getDate()).slice(-2))
            .replace('hh', ('0' + date.getHours()).slice(-2))
            .replace('mm', ('0' + date.getMinutes()).slice(-2))
            .replace('ss', ('0' + date.getSeconds()).slice(-2))
    }

    /**
     * 将日期字符串转换成日期对象
     * @param dateString {String} 日期字符串
     * @returns {Date} 日期对象
     */
    parse(dateString) {
        let units = {
            year: 'yyyy', month: 'MM', date: 'dd', hour: 'hh',
            minutes: 'mm', second: 'ss'
        };
        let dateObj = {};
        for (let item in units) {
            let f = units[item];
            let index = this.f.indexOf(f);
            let value = 0;
            if (index != -1) {
                value = dateString.substr(index, f.length);
            }
            dateObj[item] = '' != value ? parseInt(value, 10) : 0;
        }
        let date = new Date(dateObj.year, dateObj.month, dateObj.date);
        date.setYear(dateObj.year);
        date.setMonth(dateObj.month - 1);
        date.setDate(dateObj.date);
        date.setHours(dateObj.hour);
        date.setMinutes(dateObj.minutes);
        date.setSeconds(dateObj.second);
        return date;
    }

    /**
     * 通过时间戳获取格式化日期星期字符串
     *
     * @timestamp  时间搓
     * @returns {Date} 日期对象
     * */
    formatDate(timestamp) {
        let weekday
        date = new Date(timestamp);
        switch (date.getDay()) {
            case 0:
                weekday = '星期天';
                break;
            case 1:
                weekday = '星期一';
                break;
            case 2:
                weekday = '星期二';
                break;
            case 3:
                weekday = '星期三';
                break;
            case 4:
                weekday = '星期四';
                break;
            case 5:
                weekday = '星期五';
                break;
            case 6:
                weekday = '星期六';
                break;
        }
        return this.f
            .replace('yyyy', date.getFullYear())
            .replace('MM', ('0' + (date.getMonth() + 1)).slice(-2))
            .replace('dd', ('0' + date.getDate()).slice(-2))
            .replace('hh', ('0' + date.getHours()).slice(-2))
            .replace('mm', ('0' + date.getMinutes()).slice(-2))
            .replace('ss', ('0' + date.getSeconds()).slice(-2))
            .replace('ww', (weekday));
    }

    /**
     * 通过时间戳获取格式化的日期字符串
     * @param format {String} 格式
     * @param timestamp 时间戳
     * @return {String} 转换的日期
     */
    static format(format, timestamp) {
        let entity = new DateFormat(format);
        return entity.format(timestamp);
    }

    /**
     * 将日期字符串转换成日期对象
     * @param format {String} 格式
     * @param dateString {String} 日期字符串
     * @returns {Date} 日期对象
     */
    static parse(format, dateString) {
        let entity = new DateFormat(format);
        return entity.parse(dateString);
    }
}


