enum RPM {
    //% block="12.000 RPM"
    fiverpm,
    //% block="13.000 RPM"
    eigthrpm,
    //% block="14.000 RPM"
    tenrpm,
    //% block="15.000 RPM"
    twelverpm
}

enum centrifugation_times {
    //% block="10 seconds"
    tenseconds,
    //% block="20 seconds"
    twentiseconds,
    //% block="30 seconds"
    thirtyseconds,
    //% block="1 minute"
    oneminute,
    //% block="2 minutes"
    twominutes,
    //% block="5 minutes"
    fiveminutes,
    //% block="10 minutes"
    tenminutes,
    //% block="30 minutes"
    thirtyminutes,
    //% block="1 hour"
    onehour
}

//% weight=100 color=#FF5733 icon="\uf021"
namespace centrifuge {

//% block="Start the centrifuge" blockGap=8
//% weight=100 color=#FFA533
export function Start_centrifuge(): void {
  pins.D13.servoSetPulse(1000)
  pause(5000)
}
    
/**
 * Play an alarm sound for some time
 * @param value, centrifugation speed in RPM eg: RPM.fiverpm
 * @param time, centrifugation time eg: centrifugation_times.tenseconds
 */
//% block="Run the centrifugue at %value during %time" blockGap=8
//% weight=90 color=#FF5733
export function run_centrifuge(value: RPM, time: centrifugation_times): void {
    
     switch(value) {
        case RPM.fiverpm: pins.D13.servoWrite(110);
        case RPM.eigthrpm: pins.D13.servoWrite(120);
        case RPM.tenrpm: pins.D13.servoWrite(130);
        case RPM.twelverpm: pins.D13.servoWrite(140);   
    }
    
    switch(time) {
        case centrifugation_times.tenseconds: 
            pause(10*1000)
            pins.D13.servoWrite(0)
            ;
        case centrifugation_times.twentiseconds: 
            pause(20*1000)
            pins.D13.servoWrite(0)
            ;
        case centrifugation_times.thirtyseconds: 
            pause(30*1000)
            pins.D13.servoWrite(0)
            ;
        case centrifugation_times.oneminute: 
            pause(1*60*1000)
            pins.D13.servoWrite(0)
            ;
        case centrifugation_times.twominutes: 
            pause(2*60*1000)
            pins.D13.servoWrite(0)
            ;
        case centrifugation_times.fiveminutes: 
            pause(5*60*1000)
            pins.D13.servoWrite(0)
            ;
        case centrifugation_times.tenminutes: 
            pause(10*60*1000)
            pins.D13.servoWrite(0)
            ;
        case centrifugation_times.thirtyminutes: 
            pause(30*60*1000)
            pins.D13.servoWrite(0)
            ;
        case centrifugation_times.onehour: 
            pause(60*60*1000)
            pins.D13.servoWrite(0)
            ;
    }
    
}
  
}

