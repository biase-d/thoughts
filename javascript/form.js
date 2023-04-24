import { userSignIn, userRegistration, host } from "./auth.js"

export { createForm, updateForm }

async function createForm(form, isValid){

    if (!(form === "") && isValid) {
        console.log(form)

        const data = {
            'user': host.authStore.model.id,
            'form_question': "not yet implemented", 
            'form_reply': form
        }

        await host.collection('forms').create(data)

    } else if (form === ""){
        console.log(" Reply cannot be empty  ")

    } else if (!isValid){
        console.log(' Please log in first ')
        console.log(' Or you can create an account ')

    } else {
        console.log(' something went wrong ')
    }
}

async function updateForm(formID, userID){
    // add code 
}
