
function checkValidData(name, email, password, confirmPassword){
    if (name === '' || email === '' || password === '' || confirmPassword === '') return "No field shoud be empty";

    const isEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if (name.length <= 2) return "Name should be more than 2 letters";
    if (isEmail === false) return "Enter Valid Email";
    if (isPassword === false) return "Password should be more than 8 characters and should contain atleast 1 uppercase, lowercase and special character";
    if (password !== confirmPassword) return "Password didn't match";

    return null;
}


export default checkValidData;