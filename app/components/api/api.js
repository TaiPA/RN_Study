let baseURL = 'https://apitest.altaapps.io:8083/api/'
let getAddrBalancePath = 'get_address_balance/' + this.address;

module.exports = function (addr) {
    let url = baseURL + getAddrBalancePath + "BTC/" + addr;
    fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('Bitcoin:getBalance:confirmed_balance: ' + responseJson.data.confirmed_balance);
            return { balance: responseJson.data.confirmed_balance }
        })
        .catch((error) => {
            console.error(error);
        });
}