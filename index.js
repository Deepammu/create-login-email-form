function func()
{
    const username = document.getElementById("username").value;
const pass = document.getElementById("password").value;
if(username == "Entri Elevate" && pass == "admin123")
{
    alert(`success full !`)
    window.location.assign("index.html")
}
else{
    alert(`Wrong entry invalid`)
}

}