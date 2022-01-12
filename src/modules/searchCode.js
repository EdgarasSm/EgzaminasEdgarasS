import ajaxService from "./ajaxService";
import render from "./getFoodInfo";
import errorMsg from "./errorMsg";

const searchCode = () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault(); // keiciama standartine elgsena
        const searchValue = document.querySelector(".term").value;
        let apiFetchResult;
        ajaxService(searchValue)
            .then((result) => (apiFetchResult = result))
            .then(() => console.log("Maisto rezultatai: ", apiFetchResult.meals[0]))
            .then(() => {
                if (apiFetchResult.meals !== null) {
                    render(apiFetchResult.meals[0]);
                } else {
                    errorMsg();
                }
            });
    });
};

export default searchCode;
