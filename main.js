'use strict'

function onBallClick(elBall) {
    var newWidth
    var newHeight
    var newText
    if (elBall.innerText === '400') {
        newWidth = '100px'
        newHeight = '100px'
        newText = '100'
    } else {
        newWidth = (!elBall.style.width) ?
            +(elBall.style.width.split('p')[0]) + 150 + 'px' :
            +(elBall.style.width.split('p')[0]) + 50 + 'px'
        newHeight = (!elBall.style.height) ?
            +(elBall.style.height.split('p')[0]) + 150 + 'px' :
            +(elBall.style.height.split('p')[0]) + 50 + 'px'
        newText = +elBall.innerText + 50 + ''
    }

    elBall.style.width = newWidth
    elBall.style.height = newHeight
    elBall.innerText = newText
}
