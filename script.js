//your JS code here. If required.

 const element = document.getElementById("level")

    let count = 0
    let currentElement = element

		
    while(currentElement){
        count++

        currentElement = currentElement.parentElement
        console.log(currentElement)
        
    }
    alert(count)
