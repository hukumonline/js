var hid = function(x) { return document.getElementById(x); };
function focus_text(msg, id){
    if(hid(id).value == msg){
        hid(id).value="";
    }
}
function blur_text(msg, id){
    if(hid(id).value.length < 1){
        hid(id).value=msg;
    }
}

