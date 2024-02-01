'use strict'

function onBallClick(elBall) {
    const newWidth = (elBall.innerText === '100') ?
        +(elBall.style.width.split('p')[0]) + 150 + 'px' :
        +(elBall.style.width.split('p')[0]) + 50 + 'px'
    const newHeight = (elBall.innerText === '100') ?
        +(elBall.style.height.split('p')[0]) + 150 + 'px' :
        +(elBall.style.height.split('p')[0]) + 50 + 'px'
    const newText = +elBall.innerText + 50 + ''

    elBall.style.width = newWidth
    elBall.style.height = newHeight
    elBall.innerText = newText
}
