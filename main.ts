basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Heart)
        music.ringTone(262)
    } else {
        music.ringTone(0)
        basic.clearScreen()
    }
})
