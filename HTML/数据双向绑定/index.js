window.data = {};

document.getElementById("bind-input").addEventListener('input', e => data.inputValue = e.target.value)

Object.defineProperties(data,'inputValue', {
    get(){
        return document.getElementById("bind-input").value;
    },
    set(val){
        ocument.getElementById("bind-input").value = val;
    }
})