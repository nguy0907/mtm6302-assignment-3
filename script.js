const $container = document.getElementById('container')
const $monthSelector = document.getElementById('monthSelector')
const $daySelector = document.getElementById('daySelector')
const $yearSelector = document.getElementById('yearSelector')
const $form = document.getElementById('form')
const $timer = document.getElementById('timer')

const today = new Date()
const futureTime = new Date()



const $selectedDate = document.getElementById('selectedDate')
const $months = document.getElementById('months')

const year = [2021,2022]
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

//function to get the timer counting down


//Function to update the time
// function updateTime(){
//     $day.textContent = today.getDay()
//     $year.textContent = today.getFullYear()
// }

//Function for month and year selection






// $currentTime.innerText = today






$monthSelector.addEventListener('change', function () {
    switch ($monthSelector.value) {
        case '0':
            futureTime.setMonth(0)
        
            break

        case '1':
            futureTime.setMonth(1)
   
            break

        case '2':
            futureTime.setMonth(2)

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
            futureTime.setDate(31) 
            console.log(futureTime.getDate())

            break

        case '10':
            upto29days()

            futureTime.setMonth(10)
            futureTime.setDate(30)  
              console.log(futureTime.getDate())
          
            break

        case '11':
            upto30days()

            futureTime.setMonth(11)
            futureTime.setDate(31) 
            console.log(futureTime.getDate())
            break
    }
    $selectedDate.innerText = futureTime
})

function upto29days (){
    
   $daySelector.innerHTML += ` <option value="0">${daysInMonth[1]}</option>
    ` 
 $daySelector.innerHTML = `<select id="daySelector">
<option value="0">${daysInMonth[0]}</option>
<option value="1">${daysInMonth[1]}</option>
<option value="2">${daysInMonth[2]}</option>
<option value="3">${daysInMonth[3]}</option>
<option value="4">${daysInMonth[4]}</option>
<option value="5">${daysInMonth[5]}</option>
<option value="6">${daysInMonth[6]}</option>
<option value="7">${daysInMonth[7]}</option>
<option value="8">${daysInMonth[8]}</option>
<option value="9">${daysInMonth[9]}</option>
<option value="10">${daysInMonth[10]}</option>
<option value="11">${daysInMonth[11]}</option>
<option value="12">${daysInMonth[12]}</option>
<option value="13">${daysInMonth[13]}</option>
<option value="14">${daysInMonth[14]}</option>
<option value="15">${daysInMonth[15]}</option>
<option value="16">${daysInMonth[16]}</option>
<option value="17">${daysInMonth[17]}</option>
<option value="18">${daysInMonth[18]}</option>
<option value="19">${daysInMonth[19]}</option>
<option value="20">${daysInMonth[20]}</option>
<option value="21">${daysInMonth[21]}</option>
<option value="22">${daysInMonth[22]}</option>
<option value="23">${daysInMonth[23]}</option>
<option value="24">${daysInMonth[24]}</option>
<option value="25">${daysInMonth[25]}</option>
<option value="26">${daysInMonth[26]}</option>
<option value="27">${daysInMonth[27]}</option>
<option value="28">${daysInMonth[28]}</option>
<option value="29">${daysInMonth[29]}</option>

</select>` 
}

function upto30days(){
$daySelector.innerHTML = `<select id="daySelector">
<option value="0">${daysInMonth[0]}</option>
<option value="1">${daysInMonth[1]}</option>
<option value="2">${daysInMonth[2]}</option>
<option value="3">${daysInMonth[3]}</option>
<option value="4">${daysInMonth[4]}</option>
<option value="5">${daysInMonth[5]}</option>
<option value="6">${daysInMonth[6]}</option>
<option value="7">${daysInMonth[7]}</option>
<option value="8">${daysInMonth[8]}</option>
<option value="9">${daysInMonth[9]}</option>
<option value="10">${daysInMonth[10]}</option>
<option value="11">${daysInMonth[11]}</option>
<option value="12">${daysInMonth[12]}</option>
<option value="13">${daysInMonth[13]}</option>
<option value="14">${daysInMonth[14]}</option>
<option value="15">${daysInMonth[15]}</option>
<option value="16">${daysInMonth[16]}</option>
<option value="17">${daysInMonth[17]}</option>
<option value="18">${daysInMonth[18]}</option>
<option value="19">${daysInMonth[19]}</option>
<option value="20">${daysInMonth[20]}</option>
<option value="21">${daysInMonth[21]}</option>
<option value="22">${daysInMonth[22]}</option>
<option value="23">${daysInMonth[23]}</option>
<option value="24">${daysInMonth[24]}</option>
<option value="25">${daysInMonth[25]}</option>
<option value="26">${daysInMonth[26]}</option>
<option value="27">${daysInMonth[27]}</option>
<option value="28">${daysInMonth[28]}</option>
<option value="29">${daysInMonth[29]}</option>
<option value="30">${daysInMonth[30]}</option>

</select>` 
}



function upto31days (){
  $daySelector.innerHTML = `<select id="daySelector">
 <option value="0">${daysInMonth[0]}</option>
 <option value="1">${daysInMonth[1]}</option>
 <option value="2">${daysInMonth[2]}</option>
 <option value="3">${daysInMonth[3]}</option>
 <option value="4">${daysInMonth[4]}</option>
 <option value="5">${daysInMonth[5]}</option>
 <option value="6">${daysInMonth[6]}</option>
 <option value="7">${daysInMonth[7]}</option>
 <option value="8">${daysInMonth[8]}</option>
 <option value="9">${daysInMonth[9]}</option>
 <option value="10">${daysInMonth[10]}</option>
 <option value="11">${daysInMonth[11]}</option>
 <option value="12">${daysInMonth[12]}</option>
 <option value="13">${daysInMonth[13]}</option>
 <option value="14">${daysInMonth[14]}</option>
 <option value="15">${daysInMonth[15]}</option>
 <option value="16">${daysInMonth[16]}</option>
 <option value="17">${daysInMonth[17]}</option>
 <option value="18">${daysInMonth[18]}</option>
 <option value="19">${daysInMonth[19]}</option>
 <option value="20">${daysInMonth[20]}</option>
 <option value="21">${daysInMonth[21]}</option>
 <option value="22">${daysInMonth[22]}</option>
 <option value="23">${daysInMonth[23]}</option>
 <option value="24">${daysInMonth[24]}</option>
 <option value="25">${daysInMonth[25]}</option>
 <option value="26">${daysInMonth[26]}</option>
 <option value="27">${daysInMonth[27]}</option>
 <option value="28">${daysInMonth[28]}</option>
 <option value="29">${daysInMonth[29]}</option>
 
 </select>` 
 }



//countdown


// let difference = futureTime.getTime() - today.getTime()

// function toDays(ms) {
//     return Math.floor(ms / 1000 / 60 / 60 / 24)
// }

// function toHours(ms) {
//     const days = toDays(ms)
//     const hours = Math.floor(ms / 1000 / 60 / 60)
//     const hoursLeft = hours - (days * 24)

//     return hoursLeft
// }

// function toMinutes(ms) {
//     const days = toDays(ms)
//     const hours = toHours(ms)
//     const minutes = Math.floor(ms / 1000 / 60)

//     const minutesLeft = minutes - (hours * 60) - (days * 24 * 60)

  
// let TimerCountdown = undefined

// TimerCountdown = setInterval(function(){
//     difference -= 1000
//     console.log(`day:${toDays(difference)}`)
//     console.log(`hours:${toHours(difference)}`)
//     console.log(`minutes:${toMinutes(difference)}`)
// }, 1000)
  
  
//     return minutesLeft

// }

// function toSeconds(ms){

// }



// timer.innerHTML = `
// <p>day: ${toDays(difference)}</p>
// <br> </br>
// <p>hours: ${toHours(difference)}</p>
// <br> </br>
// <p>minutes: ${toMinutes(difference)}</p>`