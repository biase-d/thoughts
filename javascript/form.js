import { host } from "./pocketbase/pocketbase.js"
export { createForm, updateForm }

async function createForm(userID, form, isValid){

    if (!(form === "") && isValid) {
        console.log(form)

        const data = {
            'user': userID,
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
