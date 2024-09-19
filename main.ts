/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2024
 * This program measures the temperature of the room.
*/

//basic.showString('Hello, World!')
basic.clearScreen()
let celsius
basic.pause(1000)

let temperature = 25 
input.onButtonPressed(Button.A,function(){
    input.temperature()
    basic.showString(" The temperature is")
    basic.showNumber(temperature)
})
