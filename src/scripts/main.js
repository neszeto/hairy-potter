import {makePottery} from './PotteryWheel.js'
import {firePottery} from './Kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'
import {usePottery} from './PotteryCatalog.js'



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 5)
console.log(mug)
let platter = makePottery("Platter", 5, 3)
console.log(platter)
let vase = makePottery("Vase", 5, 7)
console.log(vase)
let bowl = makePottery("Bowl", 4, 4)
console.log(bowl)
let cup = makePottery("Cup", 2, 4)
console.log(cup)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1800)
console.log(firedMug)
let firedPlatter = firePottery(platter, 3000)
console.log(firedPlatter)
let firedVase = firePottery(vase, 2100)
console.log(firedVase)
let firedBowl = firePottery(bowl, 1900)
console.log(firedBowl)
let firedCup = firePottery(cup, 2200)
console.log(firedCup)

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(firedMug)
console.log(sellMug)
let sellPlatter = toSellOrNotToSell(firedPlatter)
console.log(sellPlatter)
let sellVase = toSellOrNotToSell(firedVase)
console.log(sellVase)
let sellBowl = toSellOrNotToSell(firedBowl)
console.log(sellBowl)
let sellCup = toSellOrNotToSell(firedCup)
console.log(sellCup)

let soldPottery = usePottery()
console.log(soldPottery)

// Invoke the component function that renders the HTML list



