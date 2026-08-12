function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}
document.querySelectorAll("#navMenu a").forEach(a=>{
  a.addEventListener("click",()=>document.getElementById("navMenu").classList.remove("show"));
});
document.getElementById("year").textContent = new Date().getFullYear();

function sendMessage(event){
  event.preventDefault();
  const name=document.getElementById("name").value;
  alert("धन्यवाद " + name + "! आपका संदेश दर्ज हो गया है। WhatsApp/Email जोड़ने के लिए contact details update करें।");
  event.target.reset();
}
