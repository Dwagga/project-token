//% weight=100 color=#0fbc11 icon=“”

namespace centrifuge {

//% help=pins/servo-write-pin weight=20
//% blockId=device_set_servo_pin block="servo write|pin %mypin|to %value" blockGap=8
//% parts=microservo trackArgs=0
//% value.min=0 value.max=180
//% mypin.fieldEditor="gridpicker" mypin.fieldOptions.columns=6
//% mypin.fieldOptions.tooltips="false" mypin.fieldOptions.width="250"
//% weight=100 color=#0fbc11
export function servo(mypin:PwmOnlyPin ,value: number): void {

  mypin.servoWrite(value)
}

}
