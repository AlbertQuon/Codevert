window.addEventListener("resize", matchHeight)

function matchHeight() {
    var height = document.getElementById("codevert-premium")
    var getHeight = height.offsetHeight
    let root = document.documentElement;

    root.style.setProperty('--height', getHeight + 'px')
}