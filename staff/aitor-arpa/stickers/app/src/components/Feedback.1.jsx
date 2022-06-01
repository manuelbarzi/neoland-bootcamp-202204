
function Feedback(){

    function myFunction() {
        const x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
return  <button onclick="myFunction()"/>Show Snackbar</button>
<div id="snackbar"/>Some text some message..
}