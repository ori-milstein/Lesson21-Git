'use strict'

function onBallClick(elBall) {
    var newWidth
    var newHeight
    var newText
    var randInc = getRandomInt(20, 61)

    if (+elBall.innerText + randInc >= '400') {
        newWidth = '100px'
        newHeight = '100px'
        newText = '100'
    } else {
        newWidth = (!elBall.style.width) ?
            +(elBall.style.width.split('p')[0]) + 100 + randInc + 'px' :
            +(elBall.style.width.split('p')[0]) + randInc + 'px'
        newHeight = (!elBall.style.height) ?
            +(elBall.style.height.split('p')[0]) + 100 + randInc + 'px' :
            +(elBall.style.height.split('p')[0]) + randInc + 'px'
        newText = +elBall.innerText + Math.round(randInc) + ''
    }

    elBall.style.width = newWidth
    elBall.style.height = newHeight
    elBall.innerText = newText
    elBall.style.backgroundColor = getRandomColor()
}