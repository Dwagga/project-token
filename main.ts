//% weight=100 color=#0fbc11 icon=“”

namespace centrifuge {
  
//% help=loops/pause weight=99
function pause(ms: number): void {
    loops.pause(ms);
}

//% help=pins/servo-write-pin weight=20
//% block="Centrifugue: servo write|pin %mypin|to %value" blockGap=8
//% parts=microservo trackArgs=0
//% value.min=0 value.max=180
//% mypin.fieldEditor="gridpicker" mypin.fieldOptions.columns=6
//% mypin.fieldOptions.tooltips="false" mypin.fieldOptions.width="250"
//% weight=100 color=#0fbc11
export function servo(mypin:PwmOnlyPin ,value: number): void {

  mypin.servoWrite(value)
}
  
//% help=pins/servo-write-pin weight=20
//% block="Start the centrifuge || pin: %mypin value:%value" blockGap=8
//% parts=microservo trackArgs=0
//% mypin.deft="D13"
//% value.deft=150
//% weight=100 color=#0fbc11
export function Start_centrifuge(mypin:PwmOnlyPin ,value: number): void {
  mypin.servoWrite(value)
  pause(7000)
}
  
}

