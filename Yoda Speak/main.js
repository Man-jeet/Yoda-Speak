console.log("hello welcome")

const input = document.querySelector('#input')
const output = document.querySelector('#output')
console.log(output)

const button = document.querySelector(".btn")


let api_url = "	https://api.funtranslations.com/translate/yoda.json"


function data(main_api){
    const xhr = new XMLHttpRequest()


    xhr.open("GET" , main_api)

    xhr.onload = function(){
        let text = xhr.responseText
        const data = JSON.parse(text)
        output.innerText = data.contents.translated
    }
    
    xhr.send()
    
}


button.addEventListener("click" , function() {
    let main_api = api_url + "?" + "text=" + input.value
    data(main_api)
})
