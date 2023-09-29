const input_pass = document.getElementById("input1")
const input_car = document.getElementById("input2")
const button = document.getElementById("btn")
const div = document.getElementById("div")

button.addEventListener("click", ()=>{
    let password = String(input_pass.value)
    let caracters = String(input_car.value)

    div.innerText = execute(password, caracters)
})

function to_array(length){
    let push_to = []
    for(i in length){
        push_to.push(length[i])
    }
    console.log(push_to)
    return push_to
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function to_cripto(pass, caracters){
    
    for (i in pass){
        pass[i] = caracters[getRandomInt(caracters.length - 1)]
    }
    console.log(pass)
    return pass
}

function to_string(string) {
    let str = []
    for (i in string){
        str += string[i]
    }
    console.log(str)
    return str
}

function execute(term1, term2) {
    return to_string(to_cripto(to_array(term1), to_array(term2)))
}