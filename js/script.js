function checkSubmitInfo() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    console.log(firstName + ' ' + lastName + ' - ' + email);
}

const button = document.getElementById('btnId');
button.addEventListener('click', checkSubmitInfo());