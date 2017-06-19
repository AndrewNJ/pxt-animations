enum animationID {
    //% block="Intro-Spin-Outro-X"
    introOutro,
    //% block="Hashtag"
    hashtag
}

//% color=#FF0000  block="Andrimations" icon="\uf2b0"
namespace animations {
    //% blockId=showAndrimation
    //% block="show andrimation %animation"
    export function showAndrewAnimation(animation: animationID): void {
        switch (animation) {
            case animationID.introOutro:
                basic.forever(() => {
                    images.createBigImage(`
        # . . . # # . . . #
        . . . . . . # . # .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        `).scrollImage(5, 200)
                    images.createBigImage(`
        # . . . # # . . . #
        . # . # . . # . # .
        . . # . . . . # . .
        . . . . . . # . # .
        . . . . . . . . . .
        `).scrollImage(5, 200)
                    for (let i = 0; i < 4; i++) {
                        images.createBigImage(`
            # . . . # . # . . .
            . # . # . . . # . #
            . . # . . . # # # .
            . # . # . # . # . .
            # . . . # . . . # .
            `).scrollImage(5, 200)
                        images.createBigImage(`
            . . # . . . . . # .
            . . # . . # . # . .
            # # # # # . # # # .
            . . # . . . . # . #
            . . # . . . # . . .
            `).scrollImage(5, 200)
                    }
                    images.createBigImage(`
        # . . . # . . . . .
        . # . # . . # . # .
        . . # . . . . # . .
        . # . # . . # . # .
        # . . . # # . . . #
        `).scrollImage(5, 200)
                    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . # . . . . . . .
        . # . # . . # . # .
        # . . . # # . . . #
        `).scrollImage(5, 200)
                    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        # . . . # . . . . .
        `).scrollImage(5, 200)
                })
                break;

            case animationID.hashtag:
                basic.forever(() => {
                    images.createBigImage(`
        . . . . . . . . . .
        . . . . # . . . # #
        . . . . . . . . . .
        # . . . . # # . . .
        . . . . . . . . . .
        `).scrollImage(5, 150)
                    images.createBigImage(`
        . . . . . . . . . .
        . . # # # . # # # #
        . . . . . . . . . .
        # # # . . # # # # .
        . . . . . . . . . .
        `).scrollImage(5, 150)
                    images.createBigImage(`
        . . . . . . # . . .
        # # # # # # # # # #
        . . . . . . . . . .
        # # # # # # # # # #
        . . . . . . . . . .
        `).scrollImage(5, 150)
                    images.createBigImage(`
        . # . . . . # . . .
        # # # # # # # # # #
        . # . . . . # . . .
        # # # # # # # # # #
        . . . . . . # . . .
        `).scrollImage(5, 150)
                    images.createBigImage(`
        . # . . . . # . . .
        # # # # # # # # # #
        . # . . . . # . # .
        # # # # # # # # # #
        . # . # . . # . # .
        `).scrollImage(5, 150)
                    images.createBigImage(`
        . # . # . . . . . .
        # # # # # . . . . .
        . # . # . . . . . .
        # # # # # . . . . .
        . # . # . . . . . .
        `).scrollImage(5, 150)
                })
                break;
        }
    }
}