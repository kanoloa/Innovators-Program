/*
 * This program is for demonstration. Do not use in any production environment.
 * MAZDA INNOVATORS PROGRAM, 2025 - 2026
 * Created by kanoloa@mac.com
 */

const RPC_STATE_INITIATE = 0;
const RPC_STATE_MOVE = 1;
const RPC_STATE_HALT = 2;
const RPC_STATE_ABORT = 3;
const RPC_STATE_COMPLETE = 9;
const RPC_VEHICLE_DIRECTION_FORWARD = 1;
const RPC_VEHICLE_DIRECTION_REVERSE = 2;

let receiveData;
let sendData;
let lastData;

function init() {
    console.log("status initiating.");
    if (receiveData === RPC_STATE_INITIATE) {
        lastData = sendData;
        sendData = sendData * RPC_VEHICLE_DIRECTION_FORWARD;
    } else {
        sendData = -1;
    }
    return sendData;
}

function onMove() {
    console.log("vehicle is now on move...")
    return 2;
}

function main() {
    console.log("Program starts.");

    let result;
    switch(receiveData) {
        case RPC_STATE_INITIATE:
            result = init();
            break;
        case RPC_STATE_MOVE:
            result = onMove();
    }

    console.log("Program finished successfully.")
}