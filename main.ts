let Degrees = 0
basic.forever(function () {
    Degrees = input.compassHeading()
    if (Degrees < 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Degrees < 90) {
        basic.showLeds(`
            # # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . #
            `)
    } else if (Degrees < 135) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Degrees < 180) {
        basic.showLeds(`
            # . . . #
            . # . . #
            . . # . #
            . . . # #
            # # # # #
            `)
    } else if (Degrees < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Degrees < 270) {
        basic.showLeds(`
            # . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # #
            `)
    } else if (Degrees < 315) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (Degrees < 359) {
        basic.showLeds(`
            # # # # #
            # # . . .
            # . # . .
            # . . # .
            # . . . #
            `)
    }
})
