enum RPM {
    //% block="5.000 RPM"
    fiverpm,
    //% block="8.000 RPM"
    eigthrpm,
    //% block="10.000 RPM"
    tenrpm,
    //% block="12.000 RPM"
    twelverpm
}

enum centrifugation_times{
    //% block="10 seconds"
    tenseconds,
    //% block="20 seconds"
    twentiseconds,
    //% block="30 seconds"
    thirtyseconds,
    //% block="1 minute"
    oneminute
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
 * @param value, eg: RPM.fiverpm
 * @param time, eg: centrifugation_times.tenseconds
 */
//% block="Run the centrifugue at %value during %time" blockGap=8
//% weight=500 color=#FF5733
export function run_centrifuge(value: RPM, time: centrifugation_times): void {
    switch(value) {
        case RPM.fiverpm:
            pins.D13.servoWrite(110)
        ;
        case RPM.eigthrpm: pins.D13.servoWrite(120);
        case RPM.tenrpm: pins.D13.servoWrite(130);
        case RPM.twelverpm: pins.D13.servoWrite(140);    
    }
}
  

//% block="Start the centrifuge" blockGap=8
//% weight=100 color=#FFA533
export function Start_centrifuge(): void {
  pins.D13.servoSetPulse(1000)
  pause(5000)
}
  
}

