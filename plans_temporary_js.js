window.addEventListener("resize", plansLayout)
window.addEventListener("resize", responsiveNav)

const mobileMenu = document.getElementById("toggle")
mobileMenu.addEventListener("mouseover", changeColor)
mobileMenu.addEventListener("mouseout", changeColorOff)

function responsiveNav() {
    const mq = window.matchMedia( "(max-width: 850px)" )
    let hamburg = document.getElementById("toggle")
    let navLinks = document.getElementById("nav-links")
    let user = document.getElementById("user2")

    if (mq.matches) {
        navLinks.style.display = "none"
        user.style.opacity = "0"
        hamburg.style.display = "flex"
        user.style.display = "block"
    } else {
        navLinks.style.display = "flex"
        user.style.display = "none"
        hamburg.style.display = "none"
    }

}

function changeColor() {
    let line1 = document.getElementById("line1")
    let line2 = document.getElementById("line2")
    let line3 = document.getElementById("line3")
    line1.style.background = "var(--mid_blue)"
    line2.style.background = "var(--mid_blue)"
    line3.style.background = "var(--mid_blue)"
}

function changeColorOff() {
    let line1 = document.getElementById("line1")
    let line2 = document.getElementById("line2")
    let line3 = document.getElementById("line3")
    line1.style.background = "var(--off_black)"
    line2.style.background = "var(--off_black)"
    line3.style.background = "var(--off_black)"
}

function plansLayout() {
    const mq = window.matchMedia( "(max-width: 950px)" )
    let root = document.documentElement
    var plans = document.getElementById("plans")
    var cp = document.getElementById("codevert-premium")
    var cd = document.getElementById("plans-trial")
    var getHeightCP = cp.offsetHeight
    var whyP = document.getElementById("why-premium")
    var cost = document.getElementById("premium-cost")

    if (mq.matches) {
        plans.style.flexDirection = "column"
        plans.style.marginLeft = "calc(10px + 3vw)"
        plans.style.marginRight = "calc(10px + 3vw)"
        plans.style.marginBottom = "10vh"
        plans.style.height = "min-content"
        cp.style.height = "min-content"
        cd.style.borderRadius = "0 0 7px 7px"
        root.style.setProperty("--height", "min-content")
        root.style.setProperty("--width", "100%")
        whyP.style.margin = "0"
        cost.style.padding = "0"

    } else {
        plans.style.flexDirection = "row"
        root.style.setProperty('--height', getHeightCP + 'px')
        root.style.setProperty("--width", "auto")
        cd.style.borderRadius = "0 7px 7px 0"
    }
}

function toggle() {
    var mobileMenu = document.getElementById("mobile-menu")
    var pos = mobileMenu.getBoundingClientRect()
    let user = document.getElementById("user2")
    let root = document.documentElement
    let line1 = document.getElementById("line1")
    let line2 = document.getElementById("line2")
    let line3 = document.getElementById("line3")


    if (pos.top == "-530") {
        mobileMenu.style.top = "80px"
        mobileMenu.style.opacity = "1"
        //user icon animation
        user.style.opacity = "1"
        user.style.transform = "scale(1)"
        user.style.marginRight = "0"
        //hamburger menu animation
        line2.classList.add("line2-scaled")
        line1.classList.add("line1-rotated")
        line3.classList.add("line3-rotated")
    } else {
        mobileMenu.style.top = "-530px"
        mobileMenu.style.opacity = "0"
        //user icon animation
        user.style.marginRight = "-42px"
        user.style.transform = "scale(0)"
        user.style.opacity = "0"
        //hamburger menu animation
        line1.classList.remove("line1-rotated")
        line3.classList.remove("line3-rotated")
        line2.classList.remove("line2-scaled")
    }
}

