const date = document.getElementById("date");
const NewsSearch = document.getElementById('NewsSearch')
const error = document.getElementById('error')


function DateFormat()
{
    let dateNow = new Date();
    let FormmatedDate = dateNow.toLocaleDateString()
    let verifyYear = 
     {  
        dateFormat:  {
            date : FormmatedDate
        }
    }
        let DatePass = verifyYear.dateFormat.date
         let DateInput = date.value
         if(DateInput > DatePass)
         {
          let shoeError =  error.setAttribute("style", "display: block")
            error.innerHTML = `
            Sorry can't find History base on the date . wait until ${DateInput}
            `
           
         } else 
         {
            const googleSearch = `${NewsSearch.value} in ${DateInput}`
            const slitUrl = googleSearch.split("?")
            const toStr = slitUrl[0]
            location.assign(`https://www.google.com/search?q= ${toStr}`)

          

           
         }
}


function Dated() {
    if (NewsSearch.value == "") {
       
        let shoeError =  error.setAttribute("style", "display: block")
        error.innerHTML = `
        Oop! Sorry seem your search is empty try again
        `
      
    } else {
     
    if(date.value === '')
    {
        let shoeError =  error.setAttribute("style", "display: block")
        error.innerHTML = `
        enter date to search from
        `
    } else 
    {
        DateFormat()
    }
  }
  }
