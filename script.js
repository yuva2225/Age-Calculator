let userInput = document.querySelector('#date')
userInput.max = new Date().toISOString().split("T")[0]
let result = document.querySelector('#result')
function calAge(){
    let birthDate = new Date(userInput.value)

    let date = birthDate.getDate()
    let month = birthDate.getMonth()+1
    let year = birthDate.getFullYear()

    let today = new Date()

    let date1 = today.getDate()
    let month1 = today.getMonth() + 1
    let year1 = today.getFullYear()

    let date2, month2, year2

    year2 = year1-year
    
    if(month1>=month)
    {
        month2 = month1-month 
    }
    else
    {
        year2--
        month2 = 12 +(month1-month)
    }
    if(date1>=date)
    {
        date2 = date1-date;
    }
    else
    {
        month2--
        date2 = getDays(year,month)+ date1 - date
    }
    if(month2<0)
    {
        month2 = 11
        year2--
    }
    result.innerHTML = 'You are'+" "+year2+" "+'Years'+" "+month2+" "+'Months'+" "+date2+" "+'days old'
}
function getDays(year, month)
{
    return new Date(year,month,0).getDate();
}