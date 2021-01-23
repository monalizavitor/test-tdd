const applyDiscount = (value, discount) => {
    if (value < discount) return 0
        return value - discount
}


module.exports = {
    applyDiscount
}