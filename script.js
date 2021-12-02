const $container = document.getElementById('container')
const $monthSelector = document.getElementById('monthSelector')
const $daySelector = document.getElementById('daySelector')
const $yearSelector = document.getElementById('yearSelector')
const $form = document.getElementById('form')
const $timer = document.getElementById('timer')
const $showdate = document.getElementById('showdate')
const $stop = document.getElementById('stop')
const $stopTimer = document.getElementById('stopTimer')


const today = new Date()
const futureTime = new Date()


const $selectedDate = document.getElementById('selectedDate')
const $months = document.getElementById('months')

const year = [2021, 2022]
const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
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

const test = document.getElementById('test')

//function to get the timer counting down
for (let days = 0; days < 31; days++) {
    $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
}

function upto31days() {
    for (let days = 0; days < 31; days++) {
        $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
    }
}

function upto28days() {
    for (let days = 0; days < 28; days++) {
        $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
    }
}


function upto29days() {
    for (let days = 0; days < 29; days++) {
        $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
    }
}

function upto30days() {
    for (let days = 0; days < 30; days++) {

        $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
    }
}

$monthSelector.addEventListener('change', function () {
    switch ($monthSelector.value) {
        //January
        case 'January':

            // futureTime.setMonth(0)
            futureTime.setFullYear(2022, 0)
            $daySelector.innerHTML = ` `
            upto31days()
            break
            //February
        case 'February':

            // futureTime.setMonth(1)
            futureTime.setFullYear(2022, 1)
            $daySelector.innerHTML = ` `
            upto28days()
            break
            //March
        case 'March':

            // futureTime.setMonth(2)
            futureTime.setFullYear(2022, 2)
            $daySelector.innerHTML = ` `
            upto31days()
            break
            //April
        case 'April':

            // futureTime.setMonth(3)
            futureTime.setFullYear(2022, 3)
            $daySelector.innerHTML = ` `
            upto30days()
            break
            //May
        case 'May':

            // futureTime.setMonth(4)
            futureTime.setFullYear(2022, 4)
            $daySelector.innerHTML = ` `
            upto31days()
            break
            //June
        case 'June':

            // futureTime.setMonth(5)
            futureTime.setFullYear(2022, 5)
            $daySelector.innerHTML = ` `
            upto30days()
            break
            //July
        case 'July':

            // futureTime.setMonth(6)
            futureTime.setFullYear(2022, 6)
            $daySelector.innerHTML = ` `
            upto31days()
            break
            //August
        case 'August':

            // futureTime.setMonth(7)
            futureTime.setFullYear(2022, 7)
            $daySelector.innerHTML = ` `
            upto31days()
            break
            //September
        case 'September':

            // futureTime.setMonth(8)
            futureTime.setFullYear(2022, 8)
            $daySelector.innerHTML = ` `
            upto30days()
            break
            //October
        case 'October':

            // futureTime.setMonth(9)
            futureTime.setFullYear(2022, 9)
            $daySelector.innerHTML = ` `
            upto31days()
            console.log(futureTime.getDate())

            break
            //November
        case 'November':

            futureTime.setFullYear(2022, 10)
            $daySelector.innerHTML = ` `
            upto30days()
            // futureTime.setMonth(10)
            console.log(futureTime.getDate())
            break
            //December
        case 'December':


            futureTime.setFullYear(2021, 11, 1)
            $daySelector.innerHTML = ` `
            upto30days()
            // futureTime.setMonth(11)
            console.log(futureTime.getDate())
            break
    }

})

$daySelector.addEventListener('change', function () {
    switch ($daySelector.value) {
        case '0':
            futureTime.setDate(0)
            break

        case '1':
            futureTime.setDate(1)
            break

        case '2':
            futureTime.setDate(2)
            break

        case '3':
            futureTime.setDate(3)
            break

        case '4':
            futureTime.setDate(4)
            break

        case '5':
            futureTime.setDate(5)
            break

        case '6':
            futureTime.setDate(6)
            break

        case '7':
            futureTime.setDate(7)
            break

        case '8':
            futureTime.setDate(8)
            break

        case '9':
            futureTime.setDate(9)
            break

        case '10':
            futureTime.setDate(10)
            break

        case '11':
            futureTime.setDate(11)
            break

        case '12':
            futureTime.setDate(12)
            break

        case '13':
            futureTime.setDate(13)
            break

        case '14':
            futureTime.setDate(14)
            break

        case '15':
            futureTime.setDate(15)
            break

        case '16':
            futureTime.setDate(16)
            break

        case '17':
            futureTime.setDate(17)
            break

        case '18':
            futureTime.setDate(18)
            break

        case '19':
            futureTime.setDate(19)
            break

        case '20':
            futureTime.setDate(20)
            break

        case '21':
            futureTime.setDate(21)
            break

        case '22':
            futureTime.setDate(22)
            break

        case '23':
            futureTime.setDate(23)
            break


        case '24':
            futureTime.setDate(24)
            break

        case '25':
            futureTime.setDate(25)
            break

        case '26':
            futureTime.setDate(26)
            break

        case '27':
            futureTime.setDate(27)
            break

            case '28':
                futureTime.setDate(28)
                break
    
            case '29':
                futureTime.setDate(29)
                break
    
            case '30':
                futureTime.setDate(30)
                break
               
                case '31':
                    futureTime.setDate(31)
                    break


    }
})



//For the timer, I used a bit of W3school and combined it with what we did for that lecture.

$showdate.addEventListener('click', function () {
    $selectedDate.innerText = futureTime

    $stop.innerHTML = '<button> Stop </button>'

    //Local Storage
    localStorage.setItem('date', futureTime)

    let differentdate = 0

    let difference = futureTime.getTime() - today.getTime()

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

        return minutesLeft

    }

    function toSeconds(ms) {

        const seconds = Math.floor((ms % (1000 * 60)) / 1000)



        return seconds
    }

  

    TimerCountdown = setInterval(function () {
        difference -= 1000
        $timer.innerHTML = `
<p>day: ${toDays(difference)}d</p>
<br> </br>
<p>hours: ${toHours(difference)}h</p>
<br> </br>
<p>minutes: ${toMinutes(difference)}m</p>
<br> </br>
<p>seconds: ${toSeconds(difference)}s</p>
`
    }, 1000)

})

$stop.addEventListener('click', function(){

    $selectedDate.innerText = ''
    $timer.innerHTML = ''
    $stop.innerHTML = ''
    clearInterval(TimerCountdown)
})

function initialize(){
   const storedDate = localStorage.getItem('date') 
}