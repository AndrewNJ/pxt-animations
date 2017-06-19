enum animationID {
    //% block="Intro-Spin-Outro-X"
    introOutro,
    //% block="Hashtag"
    hashtag,
	//% block="Count Down"
	countdown,
	//% block="Mood Swing"
	moodswing,
	//% block="Diag-Fill Diag-Empty"
	diagfillempt,
	//% block="Diag Wipe"
	diagwipe,
	//% block="Looping Loading Circle"
	looploadcirc,
	//% block="Inside Out Swirl"
	inoutswirl,
	//% block="Outside In Swirl"
	outinswirl,
	//% block="Start-up Animation"
	startup
}

//% color=#FF0000  block="Andrimations" icon="\uf2b0"
namespace Andrimations {
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
		case animationID.countdown:
			 images.createBigImage(`
        # # # # # . . # # .
        # . . . . . # . # .
        # # # # . # . . # .
        . . . . # # # # # #
        # # # # . . . . # .
        `).scrollImage(5, 800)
    images.createBigImage(`
        # # # # # # # # # .
        . . . . # . . . . #
        . . # # . . # # # .
        # . . . # # . . . .
        . # # # . # # # # #
        `).scrollImage(5, 800)
    images.createBigImage(`
        . . # . . . # # # .
        . # # . . # . . # #
        . . # . . # . # . #
        . . # . . # # . . #
        . # # # . . # # # .
        `).scrollImage(5, 800)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . # . # .
        . . . . . . . . . .
        . . . . . # . . . #
        . . . . . . # # # .
        `).scrollImage(5, 500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).scrollImage(5, 800)
			break;
		case animationID.moodswing:
		 images.createBigImage(`
        . # . # . . # . # .
        . . . . . . . . . .
        # . . . # . . . . .
        . # # # . # # # # #
        . . . . . . . . . .
        `).scrollImage(5, 1000)
    images.createBigImage(`
        . # . # . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . # # # . . . . . .
        # . . . # . . . . .
        `).scrollImage(5, 1000)
		break;
	case animationID.diagfillempt:
	images.createBigImage(`
    # . . . . # # . . .
    . . . . . # . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 200)
images.createBigImage(`
    # # # . . # # # # .
    # # . . . # # # . .
    # . . . . # # . . .
    . . . . . # . . . .
    . . . . . . . . . .
    `).scrollImage(5, 200)
images.createBigImage(`
    # # # # # # # # # #
    # # # # . # # # # #
    # # # . . # # # # .
    # # . . . # # # . .
    # . . . . # # . . .
    `).scrollImage(5, 200)
images.createBigImage(`
    # # # # # # # # # #
    # # # # # # # # # #
    # # # # # # # # # #
    # # # # . # # # # #
    # # # . . # # # # .
    `).scrollImage(5, 200)
images.createBigImage(`
    # # # # # . # # # #
    # # # # # # # # # #
    # # # # # # # # # #
    # # # # # # # # # #
    # # # # # # # # # #
    `).scrollImage(5, 200)
images.createBigImage(`
    . . # # # . . . # #
    . # # # # . . # # #
    # # # # # . # # # #
    # # # # # # # # # #
    # # # # # # # # # #
    `).scrollImage(5, 200)
images.createBigImage(`
    . . . # # . . . . #
    . . # # # . . . # #
    . # # # # . . # # #
    # # # # # . # # # #
    # # # # # # # # # #
    `).scrollImage(5, 200)
images.createBigImage(`
    . . . . . . . . . .
    . . . . # . . . . .
    . . . # # . . . . #
    . . # # # . . . # #
    . # # # # . . # # #
    `).scrollImage(5, 200)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . # . . . . .
    . . . # # . . . . #
    `).scrollImage(5, 200)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 200)
	break;
case animationID.diagwipe:
 images.createBigImage(`
        # . . . . # # . . .
        . . . . . # . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        `).scrollImage(5, 200)
    images.createBigImage(`
        # # # . . . # # # .
        # # . . . # # # . .
        # . . . . # # . . .
        . . . . . # . . . .
        . . . . . . . . . .
        `).scrollImage(5, 200)
    images.createBigImage(`
        . . # # # . . . # #
        . # # # . . . # # #
        # # # . . . # # # .
        # # . . . # # # . .
        # . . . . # # . . .
        `).scrollImage(5, 200)
    images.createBigImage(`
        . . . . # . . . . .
        . . . # # . . . . #
        . . # # # . . . # #
        . # # # . . . # # #
        # # # . . . # # # .
        `).scrollImage(5, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . # . . . . .
        . . . # # . . . . #
        . . # # # . . . # #
        `).scrollImage(5, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . # . . . . .
        `).scrollImage(5, 200)
		break;
		case animationID.looploadcirc:
		images.createBigImage(`
    . . . . . . . . . .
    . . . . . . # . . .
    . # . . . . # . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
for (let i = 0; i < 4; i++) {
    images.createBigImage(`
        . . . . . . . . . .
        . # # . . . # # # .
        . # . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        `).scrollImage(5, 100)
    images.createBigImage(`
        . . . . . . . . . .
        . . # # . . . . # .
        . . . # . . . . # .
        . . . . . . . . # .
        . . . . . . . . . .
        `).scrollImage(5, 100)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . # . . . . . .
        . . # # . . # # # .
        . . . . . . . . . .
        `).scrollImage(5, 100)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . # . . .
        . # . . . . # . . .
        . # # . . . # . . .
        . . . . . . . . . .
        `).scrollImage(5, 100)
}
images.createBigImage(`
    . . . . . . . . . .
    . # # . . . # # # .
    . # . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . # # . . . . # .
    . . . # . . . . # .
    . . . . . . . . # .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . # . . . . . .
    . . # # . . # # # .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . # . . .
    . # . . . . # . . .
    . # # . . . # . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . # # . . . # # . .
    . # . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . # . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
	break;
		case animationID.inoutswirl:
	images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . # . . . # # . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . # # . . . # . . .
    . # . . . . # # . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . # .
    . # # # . . . # # .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . # . . . # # .
    . . . # . . . . # .
    . . . # . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . # # # . # # # . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    # # . . . # . . . .
    # . . . . # . . . .
    . . . . . # . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    # . . . . . . . . .
    # . . . . # . . . .
    # . . . . # # . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    # # # . . . # # # .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . #
    . . # # # . . . # #
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . #
    . . . . # . . . . #
    . . . . # . . . . #
    . . . . # . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . . . # . . . # #
    . . . . # . . . . #
    . . . . # . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    . . # # # . # # # .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    # # # . . # # . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
images.createBigImage(`
    # . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 100)
	break;
	case animationID.outinswirl:
	images.createBigImage(`
    # . . . . # # . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    # # # . . . # # # .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . # # # . . . # #
    . . . . . . . . . #
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . # . . . . .
    . . . . # . . . . #
    . . . . # . . . . #
    . . . . . . . . . #
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . # . . . . .
    . . . . # . . . . #
    . . . . # . . . # #
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . # # # . # # # .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . # . . . .
    # # # . . # # . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . # . . . .
    # . . . . # . . . .
    # . . . . # . . . .
    # . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    # # . . . # # # . .
    # . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . # # # . . . # # .
    . . . . . . . . # .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . . . # . . . . . .
    . . . # . . . . # .
    . . . # . . . # # .
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . # . . .
    . # # # . . # # . .
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . # # . . . # # . .
    . # . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 150)
images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . # . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `).scrollImage(5, 150)
break;
case animationID.startup:
images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . # . .
        . . # . . . # # # .
        . . . . . . . # . .
        . . . . . . . . . .
        `).scrollImage(5, 60)
    images.createBigImage(`
        . . # . . . # # # .
        . # # # . # # # # #
        # # # # # # # # # #
        . # # # . # # # # #
        . . # . . . # # # .
        `).scrollImage(5, 60)
    images.createBigImage(`
        # . . . # . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        # . . . # . . . . .
        `).scrollImage(5, 60)
		break;

        }
    }
}