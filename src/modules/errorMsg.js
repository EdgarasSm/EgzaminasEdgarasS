const errorMsg = () => {
    let error = document.createElement("h2");
    error.className = "error";
    error.innerHTML = "Klaida, tokio patiekalo pavadinimo paieška nerado!!! ";
    document.getElementById("ingredients").appendChild(error);
};

export default errorMsg;
