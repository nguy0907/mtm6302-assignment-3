const $container = document.getElementById('container')
const $monthSelector = document.getElementById('monthSelector')
const today = new Date()

const $currentTime = document.getElementById('currentTime')
const $date = document.getElementById('date')
const $months = document.getElementById('months')
const $day = document.getElementById('day')
const $year = document.getElementById('year')
const $hours = document.getElementById('hours')
const $minutes = document.getElementById('minutes')



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

// $currentTime.innerText = today
//Function to update the time
function updateTime(){
    $day.textContent = today.getDay()
    $year.textContent = today.getFullYear()
}

//Function for month and year selection

function setMonth(month){

}


const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


$monthSelector.addEventListener('change', function(){
switch ($monthSelector.value){
case '0':
    setMonth(console.log(today.getDay))
    break
    case '1':
    setMonth(console.log(today.getDay))
    break
    case '2':
    setMonth(console.log(today.getDay))
    break
    case '3':
    setMonth(console.log(today.getDay))
    break
    case '4':
    setMonth(console.log(today.getDay))
    break
    case '5':
    setMonth(console.log(today.getDay))
    break
    case '6':
    setMonth(console.log(today.getDay))
    break
    case '7':
    setMonth(console.log(today.getDay))
    break
    case '8':
    setMonth(console.log(today.getDay))
    break
    case '9':
    setMonth(console.log(today.getDay))
    break
    case '10':
    setMonth(console.log(today.getDay))
    break
    case '11':
    setMonth(console.log(today.getDay))
    break
}
})

