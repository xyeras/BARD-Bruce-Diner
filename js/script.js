function submitInfo {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email");
    console.log(firstName + ' ' + lastName + ' - ' + email);
}

const button = document.getElementById('btnID');
button.addEventListener('click', submitInfo());