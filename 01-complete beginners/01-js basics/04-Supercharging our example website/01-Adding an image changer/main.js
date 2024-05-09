const myImage = document.querySelector("img");
myImage.setAttribute("src", "image/kratos.jpg")

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/kratos.jpg") {
    myImage.setAttribute("src", "image/River.jpg");
  } else {
    myImage.setAttribute("src", "image/kratos.jpg");
  }
};
