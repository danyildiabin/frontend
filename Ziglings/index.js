function scrolllines() {
    document.getElementById("lineNumbers").scrollTop = document.getElementById("code").scrollTop;
    document.getElementById("code").contentEditable = true;
}