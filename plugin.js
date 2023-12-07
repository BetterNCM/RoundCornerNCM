function isWindowMaximized() {
    const isWidthMaximized = window.outerWidth === window.screen.availWidth;
    const isHeightMaximized = window.outerHeight === window.screen.availHeight;

    return isWidthMaximized && isHeightMaximized;
}

function checkWindowMaximized() {
    const isMaximized = isWindowMaximized();

    betterncm.app.setRoundedCorner(!isMaximized);
}

window.addEventListener('resize', checkWindowMaximized);

checkWindowMaximized();
