var productContainer = document.getElementById("product")
var search = document.getElementById("search")
var productsList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productsList.length;count=count+1)
    {
        var productname = productsList[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue) < 0)
        {
            productsList[count].style.display = "none"
        }
        else
        {
            productsList[count].style.display = "block"
        }
    }
})  

var sidenav = document.getElementById("sidenavbar")

function shownavbar() {
    sidenav.style.left = "0%"
}

function closenavbar() {
    sidenav.style.left = "-60%"
}
