//% weight=100 color=#FF5733 icon=\2707
namespace centrifuge {
  
/*enum potency {
    100_RPM = 100,
    120_RPM = 120,
    130_RPM = 130
}*/
  
//% help=loops/pause weight=99
function pause(ms: number): void {
    loops.pause(ms);
}


//% block="Run the centrifugue at %value during %duration" blockGap=8
//% duration.fieldEditor="textdropdown" duration.fieldOptions.decompileLiterals=true
//% duration.fieldOptions.data='[["5 seconds", 4], ["10 seconds", 4]]'
//% value.fieldEditor="textdropdown" value.fieldOptions.decompileLiterals=true
//% value.fieldOptions.data='[["3000 RPM", 3], ["5000 RPM", 5]]'
//% weight=100 color=#FF5733
export function run_centrifuge(value: string, duration: string): void {

  //pins.D13.servoWrite(value)
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

