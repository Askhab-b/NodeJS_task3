import os, { homedir } from "os"
export function func() {
    return `Привет, юзер. Вижу ты зашел ${os.type()}`
}


export function func2() {
    return `Привет, юзер. Вижу ты зашел ${os.homedir()}`
}

export function func3() {
    return `Привет, юзер. Вижу ты зашел ${os.hostname()}`
}

export function func4() {
    return `Привет, юзер. Вижу ты зашел ${os.version()}` 
}