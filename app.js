function getNum(num){
    var result = document.getElementById("result")
// console.log(get)
    result.value += num;
}

function clearresult(){
    var result = document.getElementById("result")
result.value = ""
}

function ready(){
    var result = document.getElementById("result")
  result.value = eval(result.value)
}