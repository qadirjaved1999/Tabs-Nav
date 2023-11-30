console.log("Hy Buddy How are you!");
function openContent(e, idNames) {
  let tab_content = document.getElementsByClassName("tabcontent");
  console.log(tab_content);
  for (let i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }
  let btnlinks = document.getElementsByClassName("btnlink");
  console.log(btnlinks);
  for (let i = 0; i < btnlinks.length; i++) {
    btnlinks[i].classList.remove("active");
  }
  document.getElementById(idNames).style.display = "block";
  e.classList.add("active");
}
