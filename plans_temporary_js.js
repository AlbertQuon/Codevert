function load() {
    plansLayout();
    responsiveNav();
}

window.addEventListener("resize", plansLayout)
window.addEventListener("resize", responsiveNav)

const mobileMenu = document.getElementById("toggle")
mobileMenu.addEventListener("mouseover", changeColor)
mobileMenu.addEventListener("mouseout", changeColorOff)

function responsiveNav() {
    const mq = window.matchMedia( "(max-width: 800px)" )
    let mobileMenu = document.getElementById("toggle")
    let navLinks = document.getElementById("nav-links")
    let user = document.getElementById("user")

    if (mq.matches) {
        user.style.visibility = "hidden"
        navLinks.style.display = "none"
        mobileMenu.style.display = "flex"
    } else {
        user.style.visibility = "visible"
        navLinks.style.display = "flex"
        mobileMenu.style.display = "none"
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
    var premiumBottom = document.getElementById("premium-bottom")

    if (mq.matches) {
        plans.style.flexDirection = "column"
        plans.style.marginLeft = "calc(10px + 3vw)"
        plans.style.marginRight = "calc(10px + 3vw)"
        plans.style.marginBottom = "10vh"
        plans.style.height = "min-content"
        premiumBottom.style.justifyContent = "space-between"
        cp.style.height = "min-content"
        cd.style.borderRadius = "0 0 7px 7px"
        root.style.setProperty("--height", "min-content")
        root.style.setProperty("--width", "100%")
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

    if (pos.top == "-530") {
        mobileMenu.style.top = "80px"
    } else {
        mobileMenu.style.top = "-530px"
    }
}

