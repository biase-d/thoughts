import { host } from "./pocketbase/pocketbase"
export { userCredentialsObj, userSignIn, userRegistration, userSignOut }

const userCredentialsObj = {
    'name': fullName,
    'username': username,
    'email': email,
    'password': password,
    'passwordConfirm': passwordConfirm,
}

async function userRegistration( userCredentialsObj ) {
    try {
        await host.collection('users').create(userCredentialsObj)
    } catch (error) {
        console.error(error)
    }

    // Sign in the user after successfully making an account
    await userSignIn( userCredentialsObj.username, userCredentialsObj.password );
}

async function userSignIn( username, password ) {
    try {
        await host.collection('users').authWithPassword(username, password)
    } catch (error) {
        console.error(error)
    }
}

function userSignOut(){
    host.authStore.clear()
}