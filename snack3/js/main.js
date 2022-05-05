const array = [1, 3, 6, 10, 11, 13, 15, 17, 18, 19, 20]
const containeRed = document.querySelector(".container-red")
const containerGreen = document.querySelector(".container-green")
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        containerGreen.innerText += array[i] + " "
    } else {
        containeRed.innerText += array[i] + " "
    }
}
console.log(containeRed, containerGreen)