window.addEventListener("resize", plansLayout)

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