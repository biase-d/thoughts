import { userSignIn, userRegistration, userSignOut } from "./auth.js";
import { createForm } from "./form.js";
import { host } from "./pocketbase/pocketbase.js";

const authStore = host.authStore
const user = authStore.model

// check if the user is logged in then hide registering or login elements
if (authStore.isValid){
    document.getElementById('login').style.display = 'none';
    document.getElementById('registration').style.display = 'none'
    document.getElementById('loggedIn').style.display = 'flex'
    document.getElementById('userLoggedIn').innerHTML = `Hello, ${userModel.name}`
    document.getElementById('previousEntries').style.display = 'block'
}

// Create a user account 
document.querySelector('button[name="register"]').addEventListener("click", (event) => {
    event.preventDefault()

    console.log(' creating account ')

    const data = {
        "username": document.getElementById('register_username').value.trim(),
        "email": document.getElementById('register_email').value.trim(),
        "password": document.getElementById('register_password').value,
        "passwordConfirm": document.getElementById('passwordConfirm').value,
        "name":  document.getElementById('fullName').value.trim(),
    }
    
    userRegistration(data)
})

// Signing in a user
document.querySelector('button[name="login"]').addEventListener("click", (event) => {
    event.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    userSignIn(username, password)
})

// Signing out a user
document.querySelector('button[name="logout"').addEventListener("click", (event) => {
    event.preventDefault()
    userSignOut();
})

// Creating forms

document.querySelector('button[name="submit"]').addEventListener("click", (event) => {
    event.preventDefault()

    const form = document.getElementById( 'formPost' ).value

    try{
        createForm(user.id, form, authStore.isValid)
    } catch (TypeError){
        console.log( 'Please Log in first' )
    }

})