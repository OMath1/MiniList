var items = document.querySelectorAll(".item")
var tableRemove = document.querySelector("#item-table")

tableRemove.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function() {
        event.target.parentNode.remove()
    }, 500)
})