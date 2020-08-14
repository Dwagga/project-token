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

//% weight=100 color=#FF5733 icon=\uf1ec
namespace centrifuge {

/**
 * Play an alarm sound for some time
 * @param value, eg: RPM.fiverpm
 * @param time, eg: centrifugation_times.tenseconds
 */
//% block="Run the centrifugue at %value during %time" blockGap=8
//% weight=500 color=#FF5733
export function run_centrifuge(value: RPM, time: centrifugation_times): void {
    
    /*var cent_time_sec: number;
    switch(time) {
        case centrifugation_times.tenseconds: cent_time_sec = 10;
        case centrifugation_times.twentiseconds: cent_time_sec = 20;
        case centrifugation_times.thirtyseconds: cent_time_sec = 30;
        case centrifugation_times.oneminute: cent_time_sec = 1;
        case centrifugation_times.twominutes: cent_time_sec = 2;
        case centrifugation_times.fiveminutes: cent_time_sec = 5;
        case centrifugation_times.tenminutes: cent_time_sec = 10;
        case centrifugation_times.thirtyminutes: cent_time_sec = 30;
        case centrifugation_times.onehour: cent_time_sec = 60;
    }*/
    
    switch(value) {
        case RPM.fiverpm: pins.D13.servoWrite(110);
        case RPM.eigthrpm: pins.D13.servoWrite(120);
        case RPM.tenrpm: pins.D13.servoWrite(130);
        case RPM.twelverpm: pins.D13.servoWrite(140);   
    }
    pause(5000);
    pins.D13.servoWrite(0);
}

//% block="Start the centrifuge" blockGap=8
//% weight=100 color=#FFA533
export function Start_centrifuge(): void {
  pins.D13.servoSetPulse(1000)
  pause(5000)
}
  
}

