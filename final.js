function data() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("c").value;
    if (a == "" || b == "" || c == "" || d == "") {
        alert("All fields are required");
        return false;
    }
    else if (b.length < 10 || b.length > 10) {
        alert("sahi number daal  jii");
        return false;
    