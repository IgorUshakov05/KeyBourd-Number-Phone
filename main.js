var p = document.getElementById('pin')
var inp = document.getElementById('inp')
// Variable 
var x ="";
var varr;
// All Write To KeyBoard
const num1 = document.getElementById("num1").addEventListener('click', () => {
    paream(1)
})
const num2 = document.getElementById("num2").addEventListener('click', () => {
    paream(2)
})
const num3 = document.getElementById("num3").addEventListener('click', () => {
    paream(3)
})
const num4 = document.getElementById("num4").addEventListener('click', () => {
    paream(4)
})
const num5 = document.getElementById("num5").addEventListener('click', () => {
    paream(5)
})
const num6 = document.getElementById("num6").addEventListener('click', () => {
    paream(6)
})
const num7 = document.getElementById("num7").addEventListener('click', () => {
    paream(7)
})
const num8 = document.getElementById("num8").addEventListener('click', () => {
    paream(8)
})
const num9 = document.getElementById("num9").addEventListener('click', () => {
    paream(9)
})
const num0 = document.getElementById("num0").addEventListener('click', () => {
    paream(0)
})
var clear = document.getElementById("ster").addEventListener('click', () => {
    x = x.slice(0, -1)
    p.innerHTML = x
})

var copy = document.getElementById("copied").addEventListener('click', () => {
    // p.innerHTML.setSelectionRange(0, this.value.length)
    inp.select();
    document.execCommand("copy");
    function op() {
    document.getElementById('rea').style.opacity = '1'
    setTimeout(()=> {
        document.getElementById('rea').style.opacity = '0'
        }, 1400)
    }
    if (x != '') {
        document.getElementById('rea').innerHTML = "text copied"
        op()
    }
    else {
        document.getElementById('rea').innerHTML = "enter text"
        op()
    }
});


// Universal Func
function paream(varr) {
    x = x + varr.toString()
    p.innerHTML = x
    inp.value = x

    if (x.length >= 11) {
        x = x.slice(0, -1)
    }
}