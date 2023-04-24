import { host } from "./pocketbase/pocketbase.js"
export { userSignIn, userRegistration, userSignOut }

async function userRegistration( userCredentialsObj ) {
    try {
        await host.collection('users').create(userCredentialsObj)
    } catch (error) {
        console.error(error)
    }

    // Sign in the user after successfully making an account
    userSignIn( userCredentialsObj.username, userCredentialsObj.password )
}

async function userSignIn( username, password ) {
    try {
        await host.collection('users').authWithPassword( username, password )
    } catch ( error ) {
        console.error( error )
    }
}

// Check aunthentication token 
/*
async function isValid(){
    if (host.authStore.isValid != null){
        return true
    } else {
        return false
    }
}
*/

function userSignOut(){
    host.authStore.clear()
    location.reload()
}