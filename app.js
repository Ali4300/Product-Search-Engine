const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const pname = document.getElementsByTagName("h2");
  for (let i = 0; i < pname.length; i++) {
    let textContent = pname[i].textContent.toUpperCase();
    if (textContent.indexOf(searchbox) > -1) {
      pname[i].closest(".product").style.display = "";
    } else {
      pname[i].closest(".product").style.display = "none";
    }
  }
};
