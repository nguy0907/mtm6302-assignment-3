const $container = document.getElementById('container')
const $monthSelector = document.getElementById('monthSelector')
const $daySelector = document.getElementById('daySelector')
const $yearSelector = document.getElementById('yearSelector')
const $form = document.getElementById('form')
const $timer = document.getElementById('timer')

const today = new Date()
const futureTime = new Date()
const date = new Date()


const $currentTime = document.getElementById('currentTime')
const $months = document.getElementById('months')



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

//function to get the timer counting down


//Function to update the time
// function updateTime(){
//     $day.textContent = today.getDay()
//     $year.textContent = today.getFullYear()
// }

//Function for month and year selection



const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


$currentTime.innerText = today

$monthSelector.addEventListener('change', function () {
    switch ($monthSelector.value) {
        case '0':
            futureTime.setMonth(0)
            //   date.setFullYear(2021)
            //   date.setFullYear(2022)
            console.log(futureTime.getDate())
            break

        case '1':
            futureTime.setMonth(1)
            console.log(futureTime.getDate())
            break

        case '2':
            futureTime.setMonth(2)
            console.log(futureTime.getDate())

            break

        case '3':
            futureTime.setMonth(3)

            break

        case '4':
            futureTime.setMonth(4)

            break

        case '5':
            futureTime.setMonth(5)

            break

        case '6':
            futureTime.setMonth(6)

            break

        case '7':
            futureTime.setMonth(7)

            break

        case '8':
            futureTime.setMonth(8)

            break

        case '9':
            futureTime.setMonth(9)

            break

        case '10':
            futureTime.setMonth(10)
            // date.setDate(0)  
            // console.log(date.getDate())
            break

        case '11':
            futureTime.setMonth(11)
            // date.setDate(0) 
            // console.log(date.getDate())
            break
    }
    $currentTime.innerText = futureTime
})

$yearSelector.addEventListener('change', function () {
    switch ($yearSelector.value) {
        case '0':
            futureTime.setFullYear(2021)
            // date.setMonth(0)
            // date.setMonth(1)
            // date.setMonth(2)
            // date.setMonth(3)
            // date.setMonth(4)
            // date.setMonth(5)
            // date.setMonth(6)
            // date.setMonth(7)
            // date.setMonth(8)
            // date.setMonth(9)
            // date.setMonth(10)
            // date.setMonth(11)
            break
        case '1':
            futureTime.setFullYear(2022)


            break
        case '2':
            futureTime.setFullYear(2023)


            break
        case '3':
            futureTime.setFullYear(2024)


            break
        case '4':
            futureTime.setFullYear(2025)


            break
        case '5':
            futureTime.setFullYear(2026)

            break
        case '6':
            futureTime.setFullYear(2027)

            break
        case '7':
            futureTime.setFullYear(2028)


            break
        case '8':
            futureTime.setFullYear(2029)


            break
        case '9':
            futureTime.setFullYear(2030)

            break
    }

    $currentTime.innerText = futureTime
})

// $daySelector.addEventListener('change', function(){
//     switch ($daySelector.value){

//     }
// })

for (let upto29 = 0; upto29 < 30; upto29++) {
    $daySelector.innerHTML = `<select id="daySelector">
<option value="0">1</option>
<option value="1">2</option>
<option value="2">3</option>
<option value="3">4</option>
<option value="4">5</option>
<option value="5">6</option>
<option value="6">7</option>
<option value="7">8</option>
<option value="8">9</option>
<option value="9">10</option>
<option value="10">11</option>
<option value="11">12</option>
<option value="12">13</option>
<option value="13">14</option>
<option value="14">15</option>
<option value="15">16</option>
<option value="16">17</option>
<option value="17">18</option>
<option value="16">19</option>
<option value="17">20</option>
<option value="18">21</option>
<option value="19">22</option>
<option value="20">23</option>
<option value="21">24</option>
<option value="22">25</option>
<option value="23">26</option>
<option value="24">27</option>
<option value="25">28</option>
<option value="26">29</option>
</select>`
}

//countdown

const difference = futureTime.getTime() - today.getTime()

function toDays(ms) {
    return Math.floor(ms / 1000 / 60 / 60 / 24)
}

function toHours(ms) {
    const days = toDays(ms)
    const hours = Math.floor(ms / 1000 / 60 / 60)
    const hoursLeft = hours - (days * 24)

    return hoursLeft
}

function toMinutes(ms) {
    const days = toDays(ms)
    const hours = toHours(ms)
    const minutes = Math.floor(ms / 1000 / 60)

    const minutesLeft = minutes - (hours * 60) - (days * 24 * 60)

  
let TimerCountdown = undefined

let timer = futureTime
TimerCountdown = setInterval(function(){
    timer--
    console.log(timer)
}, 1000)
  
  
    return minutesLeft

}

console.log(`day:${toDays(difference)}`)
console.log(`hours:${toHours(difference)}`)
console.log(`minutes:${toMinutes(difference)}`)

timer.innerHTML = `
<p>day:${toDays(difference)}</p>
<br> </br>
<p>hours:${toHours(difference)}</p>
<br> </br>
<p>minutes:${toMinutes(difference)}</p>`