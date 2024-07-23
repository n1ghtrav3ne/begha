function converPrice(input: any) {
    try {
        return input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } catch (e) {
        return input;
    }
}

export default { converPrice }