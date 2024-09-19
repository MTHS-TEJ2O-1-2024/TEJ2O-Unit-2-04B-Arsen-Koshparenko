/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2024
 * This program measures the temperature of the room.
*/

//basic.showString('Hello, World!')
basic.clearScreen()
basic.showIcon(IconNames.Happy)
let temp = 0

input.onButtonPressed(Button.A, function () {
    temp = input.temperature()
    basic.showString("The temperature is:" + (temp).toString())
})
