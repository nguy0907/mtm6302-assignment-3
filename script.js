const $container = document.getElementById('container')
const $monthSelector = document.getElementById('monthSelector')
const $daySelector = document.getElementById('daySelector')
const $yearSelector = document.getElementById('yearSelector')
const $form = document.getElementById('form')
const $timer = document.getElementById('timer')
const $showdate = document.getElementById('showdate')

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

const test = document.getElementById('test')

//function to get the timer counting down
for (let days = 0; days <31; days++){   
    $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
    }

function upto31days(){
for (let days = 0; days <31; days++){   
$daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
}
}
function upto28days(){
    for (let days = 0; days <28; days++){
        $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
        }
        }


function upto29days(){
    for (let days = 0; days <29; days++){
        $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
        }
        }

function upto30days(){
for (let days = 0; days <30; days++){
    
    $daySelector.innerHTML += `<option value="${daysInMonth[days]}">${daysInMonth[days]}</option>`
    }
    }

$monthSelector.addEventListener('change', function () {
    switch ($monthSelector.value) {
       //January
        case 'January':
          
            // futureTime.setMonth(0)
            futureTime.setFullYear(2022,0)
            $daySelector.innerHTML = ` `
            upto31days()
            break
//February
        case 'February':
           
            // futureTime.setMonth(1)
            futureTime.setFullYear(2022,1)
            $daySelector.innerHTML = ` ` 
            upto28days()
            break
//March
        case 'March':
     
            // futureTime.setMonth(2)
            futureTime.setFullYear(2022,2)
            $daySelector.innerHTML = ` ` 
            upto31days()
            break
//April
        case 'April':
            
            // futureTime.setMonth(3)
            futureTime.setFullYear(2022,3)
            $daySelector.innerHTML = ` ` 
            upto30days()
            break
//May
        case 'May':
       
            // futureTime.setMonth(4)
            futureTime.setFullYear(2022,4)
            $daySelector.innerHTML = ` `
            upto31days() 
            break
//June
        case 'June':
           
            // futureTime.setMonth(5)
            futureTime.setFullYear(2022,5)
            $daySelector.innerHTML = ` ` 
            upto30days()
            break
//July
        case 'July':
    
            // futureTime.setMonth(6)
            futureTime.setFullYear(2022,6)
            $daySelector.innerHTML = ` ` 
            upto31days() 
            break
//August
        case 'August':
       
            // futureTime.setMonth(7)
            futureTime.setFullYear(2022,7)
            $daySelector.innerHTML = ` ` 
            upto31days() 
            break
//September
        case 'September':
            
            // futureTime.setMonth(8)
            futureTime.setFullYear(2022,8)
            $daySelector.innerHTML = ` ` 
            upto30days()
            break
//October
        case 'October':
   
            // futureTime.setMonth(9)
            futureTime.setFullYear(2022,9)
            $daySelector.innerHTML = ` ` 
            upto31days()
            console.log(futureTime.getDate())

            break
//November
        case 'November':
         
            futureTime.setFullYear(2022,10)
            $daySelector.innerHTML = ` ` 
               upto30days()
            // futureTime.setMonth(10)
              console.log(futureTime.getDate())    
            break
//December
        case 'December':
            
           
            futureTime.setFullYear(2021,11,1)
            $daySelector.innerHTML = ` ` 
             upto30days()
            // futureTime.setMonth(11)
            console.log(futureTime.getDate())
            break
    }
  
})

$daySelector.addEventListener('change', function(){
    switch ($daySelector.value){
        case '0':
            futureTime.setDate(1)
          
            break 

            case '1':
                futureTime.setDate(2)
              
                break 
                
                case '2':
                    futureTime.setDate(3)
                  
                    break 
                    case '3':
                        futureTime.setDate(4)
                      
                        break 
                        case '4':
                            futureTime.setDate(5)
                          
                            break 
    }
})



// function upto29days (){
    
//  $daySelector.innerHTML = `<select id="daySelector">
// <option value="0">${daysInMonth[0]}</option>
// <option value="1">${daysInMonth[1]}</option>
// <option value="2">${daysInMonth[2]}</option>
// <option value="3">${daysInMonth[3]}</option>
// <option value="4">${daysInMonth[4]}</option>
// <option value="5">${daysInMonth[5]}</option>
// <option value="6">${daysInMonth[6]}</option>
// <option value="7">${daysInMonth[7]}</option>
// <option value="8">${daysInMonth[8]}</option>
// <option value="9">${daysInMonth[9]}</option>
// <option value="10">${daysInMonth[10]}</option>
// <option value="11">${daysInMonth[11]}</option>
// <option value="12">${daysInMonth[12]}</option>
// <option value="13">${daysInMonth[13]}</option>
// <option value="14">${daysInMonth[14]}</option>
// <option value="15">${daysInMonth[15]}</option>
// <option value="16">${daysInMonth[16]}</option>
// <option value="17">${daysInMonth[17]}</option>
// <option value="18">${daysInMonth[18]}</option>
// <option value="19">${daysInMonth[19]}</option>
// <option value="20">${daysInMonth[20]}</option>
// <option value="21">${daysInMonth[21]}</option>
// <option value="22">${daysInMonth[22]}</option>
// <option value="23">${daysInMonth[23]}</option>
// <option value="24">${daysInMonth[24]}</option>
// <option value="25">${daysInMonth[25]}</option>
// <option value="26">${daysInMonth[26]}</option>
// <option value="27">${daysInMonth[27]}</option>
// <option value="28">${daysInMonth[28]}</option>
// <option value="29">${daysInMonth[29]}</option>

// </select>` 
// }


// function getLocalTime(time){
//     let UTCTime = new Date()
//     const offsets = month[time]

//     let hours = parseInt(UTCTime.slice(0, 2)) + offset

//     if (hours >= 24) {
//         hours -= 24
//     } else if (hours < 0) {
//         hours += 24
//     }
// }



// function showdata(){
//     $selectedDate.innerText = futureTime + ` 
//     <p id='time-display'>${getLocalTime(city)}</p>
//     <button id='update'>Update</button>`

//     document,getElementById('update').addEventListener('click', function (){

//     })

// }


$showdate.addEventListener('click', function(){
    $selectedDate.innerText = futureTime
   
//Local Storage
localStorage.setItem('date',futureTime)

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

function toSeconds(ms){
    const days = toDays(ms)
    const hours = toHours(ms)
    const minutes = toMinutes(ms)
    const seconds = Math.floor(ms / 1000)

    const secondsleft = seconds - (minutes) - (hours * 60) - (days * 24)

return secondsleft 
}

let TimerCountdown = undefined

TimerCountdown = setInterval(function(){
    difference -= 1000
   timer.innerHTML = `
<p>day: ${toDays(difference)}</p>
<br> </br>
<p>hours: ${toHours(difference)}</p>
<br> </br>
<p>minutes: ${toMinutes(difference)}</p>
<br> </br>
<p>seconds: ${toSeconds(difference)}</p>
`
}, 1000)

})




  
  







