const $container = document.getElementById('container')
const $monthSelector = document.getElementById('monthSelector')
const $daySelector = document.getElementById('daySelector')
const $yearSelector = document.getElementById('yearSelector')
const today = new Date()
const futureTime = new Date()


const $currentTime = document.getElementById('currentTime')
const $months = document.getElementById('months')
const $day = document.getElementById('day')
const $year = document.getElementById('year')
const $hours = document.getElementById('hours')
const $minutes = document.getElementById('minutes')





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

function setMonth(month){

}


const daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


$monthSelector.addEventListener('change', function(){
switch ($monthSelector.value){
case '0':
    today.setMonth(0)
    console.log(today.getDay())
    break

    case '1':
        today.setMonth(1)
        console.log(today.getDay())
    break
   
    case '2':
        today.setMonth(2)

        
    break
   
    case '3':
        today.setMonth(3)
 
    break
    
    case '4':
        today.setMonth(4)

    break
   
    case '5':
        today.setMonth(5)
     
    break
    
    case '6':
        today.setMonth(6)
   
    break
   
    case '7':
        today.setMonth(7)
      
    break
    
    case '8':
        today.setMonth(8)
    
    break
   
    case '9':
        today.setMonth(9)
 
    break
   
    case '10':
        today.setMonth(10)
    
        console.log(today.getDate())
    break
    
    case '11':
        today.setMonth(11)
   
    break
}
$currentTime.innerText = today 
})

$yearSelector.addEventListener('change', function (){
    switch ($yearSelector.value){
        case '0':
            today.setFullYear(2021)
         
            console.log(today.getFullYear())
            break 
            case '1':
                today.setFullYear(2022)
            
                console.log(today.getFullYear()+1)
                break 
                case '2':
                    today.setFullYear(2023)
                  
                    console.log(today.getFullYear()+2)
                    break 
                    case '3':
                        today.setFullYear(2024)
                
                        console.log(today.getFullYear()+3)
                        break 
                        case '4':
                            today.setFullYear(2025)
         
                            console.log(today.getFullYear()+4)
                            break 
                            case '5':
                                today.setFullYear(2026)
    
                                console.log(today.getFullYear()+5)
                                break 
                                case '6':
                                    today.setFullYear(2027)
   
                                    console.log(today.getFullYear()+6)
                                    break 
                                    case '7':
                                        today.setFullYear(2028)

                                        console.log(today.getFullYear()+7)
                                        break 
                                        case '8':
                                            today.setFullYear(2029)

                                            console.log(today.getFullYear()+8)
                                            break
                                            case '9':
                                                today.setFullYear(2030)
                                                console.log(today.getFullYear()+9)
                                                break
                                                
        }

        $currentTime.innerText = today   
})