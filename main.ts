//% weight=100 color=#0fbc11 icon=“”

namespace centrifuge {

//% block

export function servo(mypin:PwmOnlyPin ,value: number): void

{

mypin.servoWrite(value)

}

}
