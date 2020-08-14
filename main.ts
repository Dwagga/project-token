enum RPM {
    //% block="5.000 RPM"
    fiverpm,
    //% block="8.000 RPM"
    eigthrpm
}

//% weight=100 color=#FF5733 icon=\uf1ec
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
 * Play an alarm sound for some time
 * @param value of the alarm to play, eg: RPM.fiverpm
 */
//% block="Run the centrifugue at %value during" blockGap=8
//% weight=100 color=#FF5733
export function run_centrifuge(value?: RPM): void {

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

