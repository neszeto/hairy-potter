

let potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === false && potteryObject.weight < 6) {
        potteryObject.price = 20
        potteryToSell.push(potteryObject)
    } else if (potteryObject.cracked === false && potteryObject.weight >= 6) {
        potteryObject.price = 40
        potteryToSell.push(potteryObject)
    }
    return potteryToSell
}

export const usePottery = () => {
    let copy = [...potteryToSell]
    return copy
}






