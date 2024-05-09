let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
const myName = localStorage.getItem("name")

myButton.addEventListener("click", setUserName)


if (myName !== "") {
    myHeading.textContent = `chrome is cool, ${myName}`;
}
//or:
// if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozilla is cool, ${storedName}`;
//   }

function setUserName() {
    let myName = prompt("Please enter your name.")
    if (myName == "") {
        alert("enter your name please")
        setUserName();
    }
    else if (myName !== null){
        localStorage.setItem("name", myName);
        myHeading.textContent = `chrome is cool, ${myName}`
        console.log(myName);
    }
    else if (!myName) {
        console.log('null');
    }
}
