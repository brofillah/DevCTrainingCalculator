var textView = document.getElementById('textview')

function insert(num){
    if (textView.value == "0") {
        if (num == "0") {
            textView.value = "0"
        }else{
            textView.value = num
        }
    } else{
        textView.value += num
    }
}

function equal() {
    textView.value = eval(textView.value)
}

function clean(){
    textView.value = "0"
    if (textView.value == "0") {
        console.log('oke')
    }
}

function back(){
    val = textView.value
    if (textView.value.length > 1) {
        textView.value = val.substring(0,val.length-1)
    } else{
        textView.value = "0"
    }
}