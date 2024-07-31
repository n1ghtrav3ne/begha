import moment, { type MomentInput } from "jalali-moment";

function converPrice(input: any) {
    try {
        return input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } catch (e) {
        return input;
    }
}

function getUserType(type: String) {
    switch (type) {
        case 'normal': return 'کاربر عادی '
        case 'emam': return 'امام جماعت'
        case 'admin': return "ادمین"
    }
}

function getRequestStatus(status: String) {
    switch (status) {
        case 'new': return { text: 'جدید', class: "text-white bg-secondary-700  text-tiny" }
        case 'pending': return { text: 'درحال بررسی', class: "text-orange bg-warning-200" }
        case 'failed': return { text: 'رد شده', class: " bg-error-700 bg-error-100" }
        case 'success': return { text: 'تایید شده', class: "text-green bg-primary-200" }
        case 'failed-user': return { text: 'لغو شده توسط کاربر', class: " bg-error-700 bg-error-100" }
    }
}

function converDate(input: string, format?: string, def?: string) {
    try {
        if (input == null || input.length <= 0) return def;

        if (format == null) format = 'jYYYY/jMM/jDD';
        if (format == 'time') format = 'jYYYY/jMM/jDD  ساعت  hh:mm'
        return moment.utc(input).format(format);

    } catch (e) {
        return def;
    }
}
///
function getDateWithMounthName(date: string) {
    const dayOfWeek = moment(date).utc().format("ddd");
    const monthNumber = moment(date).utc().format("jMM");

    return (

        moment(date).format("jD") +
        " " +
        getMonthName(monthNumber) +
        " " +
        moment(date).format("jYYYY")
    );
}

function getMonthName(value: string): string {
    var mounth = "";

    switch (value) {
        case "01":
            mounth = "فروردین";
            break;
        case "02":
            mounth = "اردیبهشت";
            break;
        case "03":
            mounth = "خرداد";
            break;
        case "04":
            mounth = "تیر";
            break;
        case "05":
            mounth = "مرداد";
            break;
        case "06":
            mounth = "شهریور";
            break;
        case "07":
            mounth = "مهر";
            break;
        case "08":
            mounth = "آبان";
            break;
        case "09":
            mounth = "آذر";
            break;
        case "10":
            mounth = "دی";
            break;
        case "11":
            mounth = "بهمن";
            break;
        case "12":
            mounth = "اسفند";
            break;
    }

    return mounth;
}

export default { converPrice, getUserType, getRequestStatus, converDate, getDateWithMounthName }