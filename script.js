const $container = document.getElementById('container')
const $currentTime = document.getElementById('currentTime')
const $date = document.getElementById('date')
const $day = document.getElementById('day')
const $monthSelector = new Date()
const today = new Date()

// const month = {
//     january: 'January',
//     february: 'February',
//     march: 'March',
//     april: 'April',
//     may: 'May',
//     june: 'June',
//     july: 'July',
//     august: 'august',
//     september: 'September',
//     october:'October',
//     november: 'November',
//     december: 'December'
// }

const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'august',
    'September',
    'October',
    'November',
    'December'
]

$currentTime.innerText = today

console.log($monthSelector.getMonth())


const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

