/*
Write a function that turns a string of 24-hour time into words.

You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

Handle noon and midnight specially:

timeWord("00:00")
// 'midnight'

timeWord("12:00")
// 'noon'
Otherwise, covert times to text:

timeWord("01:00")
// "one o'clock am"

timeWord("06:01")
// 'six oh one am'

timeWord("06:10")
// 'six ten am'

timeWord("06:18")
// 'six eighteen am'

timeWord("06:30")
// 'six thirty am'

timeWord("10:34")
// 'ten thirty four am'
Don’t forget to handle early morning properly:

timeWord("00:12")
// 'twelve twelve am'
For times after noon, add ‘pm’:

timeWord("12:09")
// 'twelve oh nine pm'

timeWord("23:23")
// 'eleven twenty three pm'
*/

const timeWord=(time)=>{
    const ones =['', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']
    if (time === '00:00') {
        return 'midnight'
    }
    if (time === '12:00') {
        return 'noon'
    }
    let [hour,minute] = [...time.split(`:`)]
    parseInt(hour)
    parseInt(minute)
    console.log(hour,minute)
    if (hour>=12){
        if(minute===0){
        return `${ones[hour]} oclock PM`
        }else{
            if(minute>=20){
                let [ten, one] = [...minute.split(``)]
                return `${ones[hour]} ${tens[ten]}${ones[one]} PM`
            }else if (minute >=10){
                return`${ones[hour]} ${ones[minute]} PM`
            }else{
                let [ten, one] = [...minute.split(``)]
                return`${ones[hour]} oh ${ones[one]} PM`
            }
        }
    }else{
        if(minute==0){
            return `${ones[+hour]} oclock AM`
        }else{
            if(minute>=20){
                let [ten, one] = [...minute.split(``)]
                return `${ones[+hour]} ${tens[ten]}${ones[one]} AM`
            }else if (minute >=10){
                return`${ones[+hour]} ${ones[minute]} AM`
            }else{
                let [ten, one] = [...minute.split(``)]
                return`${ones[+hour]} oh ${ones[one]} AM`
            }
        }
    }
}

console.log(timeWord("00:00")) // 'midnight'
console.log(timeWord("12:00")) // 'noon'
console.log(timeWord("01:00")) // "one o'clock am"
console.log(timeWord("06:01")) // 'six oh one am'
console.log(timeWord("06:10")) // 'six ten am'
console.log(timeWord("06:18")) // 'six eighteen am'
console.log(timeWord("06:30")) // 'six thirty am'
console.log(timeWord("10:34")) // 'ten thirty four am'
console.log(timeWord("00:12")) // 'twelve twelve am'
console.log(timeWord("12:09")) // 'twelve oh nine pm'
console.log(timeWord("23:23")) // 'eleven twenty three pm'