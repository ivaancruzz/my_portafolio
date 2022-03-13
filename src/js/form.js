import { validateEmail, createNotification } from "./utils.js"

const btn_send = document.querySelector('#send')
const btn_send_loading =  document.querySelector('#send_loading')

const inputs = document.querySelectorAll('input')
const email = inputs[2]
const textarea = document.querySelector('textarea')


btn_send.addEventListener('click', () => {
    sendData()
})

inputs.forEach( i => {
    i.addEventListener('keypress', (e) => {
        if( e.key === 'Enter') sendData()
    })
})

const runBtnLoading = () => {
    btn_send_loading.classList.toggle('hidden')
    btn_send.classList.toggle('hidden')

}


const sendData = ()=>{
    let error = undefined;

    const validateForm = () => {
        let validate = true
        inputs.forEach( i => {
            if( i.value == '' || textarea.value == '') validate = false
        })
    
        return validate
    }  
    
    if( validateForm() ){
        if( !validateEmail( email.value ) ) createNotification('Email invalido.', 'red')
        else{
            runBtnLoading()
            const form = new FormData( document.querySelector('form') )
            sendEmail(form)
        }
        
    } else createNotification('Rellena todos los campos.', 'red')
}


function sendEmail( form ){
    const url = `src/php/send.php`
    console.log(url)
    fetch( url, {
        method: 'POST',
        mode: "same-origin",
        credentials: "same-origin",
        body: form
    } )
    .then(function(response) {
        if(response.ok) {
            return response.text()
        } else {
            runBtnLoading()
            throw createNotification('Intenta mas tarde.', 'orange')
        }
    })
    
    .then( data => {
        runBtnLoading();
        console.log(data)
        if( data == 'ok') createNotification('Se envió tu mensaje!', 'green')
        if( data == 'error_altered') createNotification('Rellena bien los campos!', 'red')
        if( data == 'error_500') createNotification('Intenta mas tarde.', 'orange')
    })
    .catch(function(err) {
        console.log(err);
    });
}



