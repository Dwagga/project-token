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

enum AlarmSound {
    //% block="annoy"
    Annoy,
    //% block="alert"
    Alert
}

/**
 * Play an alarm sound for some time
 * @param value of the alarm to play, eg: AlarmSound.Annoy
 */
//% block="Run the centrifugue at %value during" blockGap=8
//% value.defl="nullvalue"
//% expandableArgumentMode="toggle"
//% weight=100 color=#FF5733
export function run_centrifuge(value?: AlarmSound): void {

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

