
function gettingData() {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let cnic = document.getElementById("cnic").value;
    let language = document.getElementsByClassName("radio").value;
    let contactNo = document.getElementById("contactNo").value;
    let newPass = document.getElementById("newPass").value;
    let confirmPass = document.getElementById("confirmPass").value;
    if(newPass === confirmPass) {
        return `${confirmPass}`
    }else{
        alert("Your password must match above password")
    }
    let userData= document.getElementById("formData").innerHTML =
        `<h4>Name : ${firstName} + ${lastName}</h4><br>
        <h4>Email : ${email}</h4><br>
        <h4>CNIC : ${cnic}</h4><br>
        <h4>Language : ${language}</h4><br>
        <h4>Contact No : ${contactNo}</h4><br>
        <h4>Password : ${confirmPass}</h4>`;
        console.log(userData);
}


// function userName() {
//     var user = document.getElementById("name");
//     var userName = document.getElementById("username");
//     userName.innerHTML = `${user.value}`
//     return  userName
// }