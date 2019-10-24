var premium_package = document.getElementById("premium-package")
premium_package.addEventListener("mouseover", bv_translate)
premium_package.addEventListener("mouseout", un_bv_translate)

function bv_translate() {
    var bv_box = document.getElementById("premium-wrapper")
    bv_box.style.transform = "translate(0px, 0px)"
}


function un_bv_translate() {
    var bv_box = document.getElementById("premium-wrapper")
    bv_box.style.transform = "translate(0px, 57px)"
}


/* function flexContent() {
    const mq = window.matchMedia( "(max-width: 1400px)" )
    var wrapper = document.getElementById("package-containers")
    var package = document.getElementsByClassName("package")

    if (mq.matches) {
        wrapper.style.flexDirection = "column"
        package.style.marginBottom = "65px"
    } else {
        wrapper.style.flexDirection = "row"  
        package.style.marginBottom = "0px"
    }
} */

window.addEventListener("resize", flexContent)