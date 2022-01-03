export const formatMoney = (number, showMoney = false) => {
    if(number === null || number === undefined || typeof number !== 'number') {
        number = 0
    }
    showMoney = showMoney ? "MXN" : ""
    return `$${Math.floor(Number(number)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00 ${showMoney}`
}