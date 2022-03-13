const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
export const validateEmail = ( email ) => regex.test(email)
        

export const createNotification = ( msg, color ) => {
    const obj ={
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        }
    }

    return Toastify( obj ).showToast()

}
