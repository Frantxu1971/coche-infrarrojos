function _2 () {
    wuKong.setAllMotor(-100, 100)
}
function _3 () {
    wuKong.setAllMotor(-100, -100)
}
function parar () {
    wuKong.setAllMotor(0, 0)
}
function _4 () {
    wuKong.setAllMotor(100, -100)
}
function _1 () {
    wuKong.setAllMotor(100, 100)
}
parar()
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        _1()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    }
})
