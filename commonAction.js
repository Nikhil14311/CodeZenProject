import { USER_DATA } from "./constants"

export function userProfile(value) {
    console.log("success actions",value)
    return {
        type: USER_DATA,
        payload: value
    }
}