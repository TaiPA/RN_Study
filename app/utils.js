export default class Utils {
    // format number to printout
    static formatNumber(type, value) {
        console.log(type + '   -   ' + value);

        if (value === undefined) {
            return 0;
        }

        switch (type) {
            case 'BTC':
                return parseFloat(value.toFixed(6));
            case 'LTC':
                return parseFloat(value.toFixed(4));
            case 'DOGE':
                return parseFloat(value.toFixed(2));
            case 'DASH':
                return parseFloat(value.toFixed(4));
            case 'ETH':
                return parseFloat(value.toFixed(4));
            case 'USD':
                return parseFloat(value.toFixed(2));
            default:
                return parseFloat(value.toFixed(0));
        }
    }

}