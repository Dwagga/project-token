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

/**
   * Run a motor
   * @param value description,
   *      eg: 100, 110, 120
   * @param duration description,
   *      eg: 2000
   */
//% block="Run the centrifugue at %value during %duration" blockGap=8
//% duration.shadow=timePicker
//% value.min=0 value.max=180
//% value.defl=100
//% weight=100 color=#FF5733
export function run_centrifuge(value: number): void {
  pins.D13.servoWrite(value)
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

