import * as moment from "jalali-moment";

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
        case 'new': return { text: 'جدید', class: "text-white bg-blue text-[11px]" }
        case 'pending': return { text: 'درحال بررسی', class: "text-orange bg-[#FFF5DC]" }
        case 'failed': return { text: 'رد شده', class: "text-red bg-[#FDF2F2]" }
        case 'success': return { text: 'تایید شده', class: "text-green bg-[#D8FDEC]" }
        case 'failed-user': return { text: 'لغو شده توسط کاربر', class: "text-red bg-[#FDF2F2]" }
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

export default { converPrice, getUserType, getRequestStatus, converDate }