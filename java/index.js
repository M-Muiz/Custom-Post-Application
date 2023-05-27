const input = document.getElementById("post-text");

function changeFonts(e) {
  if (e.target.id === "bold") {
    e.target.classList.toggle("active");
    input.classList.toggle("bold");
  }
  if (e.target.id === "italic") {
    e.target.classList.toggle("active");
    input.classList.toggle("italic");
  }
  if (e.target.id === "underline") {
    e.target.classList.toggle("active");
    input.classList.toggle("underline");
  }
}
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", changeFonts);

function getColor() {
  const color = document.getElementById("color").value;
  input.style.backgroundColor = color;
  // console.log(color)
}
let time = "";
function chkBeforeRun() {
  const postData = document.getElementById("post-text");
  if (postData.value == "".trim()) {
    alert("Enter Text");
  } else {
    logic();
  }
  function logic() {
    const ulContainer = document.getElementById("result-list");
    let li = document.createElement("li");
    let h1 = document.createElement("h4");
    const color = document.getElementById("color").value;
    h1.style.backgroundColor = color;

    const liText = document.createTextNode(postData.value);
    li.setAttribute("class", "appendli");
    h1.appendChild(liText);
    li.appendChild(h1);
    // console.log(h1);

    const del = document.createElement("button");
    const delText = document.createTextNode("Delete");
    del.setAttribute("onclick", "del()");
    del.setAttribute("class", "liButton");
    del.appendChild(delText);

    const span = document.createElement("span");

    const edit = document.createElement("button");
    const editText = document.createTextNode("Edit");
    edit.setAttribute("onclick", "edit()");
    edit.setAttribute("class", "liButton");
    edit.appendChild(editText);

    const detail = document.createElement("button");
    detail.setAttribute("class", "detailButton");
    detail.setAttribute("onclick", "details()");
    const detailsrc = document.createTextNode("!");
    detail.appendChild(detailsrc);

    time += moment(new Date()).format("LLLL") + "<hr>";

    span.appendChild(del);
    span.appendChild(edit);
    span.appendChild(detail);
    li.appendChild(span);
    ulContainer.prepend(li);

    postData.value = "";
  }
}

function edit() {
  event.target.parentNode.parentNode.remove();
  let a = event.target.parentNode.parentNode.firstChild.innerHTML;
  input.value = a;
  // console.log(a)
}
function del() {
  event.target.parentNode.parentNode.remove();
  console.log(event.target.parentNode.parentNode);
}
function details() {
  let a = (document.getElementById("dateDetails").style.display = "block");
  document.getElementById("dateRow").innerHTML = `${time} `;
  document.querySelector(".detailClose").onclick = () => {
    document.getElementById("dateDetails").style.display = "none";
  };
}
1430;
function delteAll() {
  document.getElementById("result-list").innerHTML = "";
};
