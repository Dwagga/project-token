//% weight=100 color=#FF5733 icon=\2707
namespace centrifuge {
  
//% help=loops/pause weight=99
function pause(ms: number): void {
    loops.pause(ms);
}

//% block="Centrifugue: servo write|pin %mypin|to %value" blockGap=8
//% value.min=0 value.max=180
//% mypin.defl=D13
//% value.defl=160
//% mypin.fieldEditor="gridpicker" mypin.fieldOptions.columns=6
//% mypin.fieldOptions.tooltips="false" mypin.fieldOptions.width="250"
//% weight=100 color=#FF5733
export function dwagga(value: number): void {
  PIN_LED.servoWrite(value)
}
  
/*
//% block="Start the centrifuge" blockGap=8
//% weight=100 color=#FFA533
export function Start_centrifuge(): void {
  var D13: PwmOnlyPin;
  D13.servoWrite(150)
  pause(7000)
}
  */
}

