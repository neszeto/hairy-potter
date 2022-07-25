
let primaryKey = 1

export const makePottery = (shapeValue, weightValue, heightValue) => {
    let pottery = {
        id: primaryKey,
        shape: shapeValue,
        weight: weightValue,
        height: heightValue
        }
    primaryKey += 1
    return pottery
    
}