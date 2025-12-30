"use strict";
// //object orianterd programming
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    startEngin() {
        console.log('start the car');
    }
    stopEngin() {
        console.log('stop the car');
    }
    move() {
        console.log('move the car');
    }
}
const toyotaCAr = new Car();
toyotaCAr.startEngin();
toyotaCAr.stopEngin();
toyotaCAr.move();
