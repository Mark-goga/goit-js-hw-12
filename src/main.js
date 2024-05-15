import axios from "axios"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderPhoto , divEl} from   "./js/render-function";
import { fetchPhoto } from "./js/pixabay-api";


const formEl = document.querySelector('.search-form');
const inputEl = formEl.querySelector('input');
const loaderEl = document.querySelector('.loader');


formEl.addEventListener('submit', async (evn) => {
    evn.preventDefault();
    divEl.innerHTML = "";
    loaderEl.classList.remove("is-hidden");
    const valueInput = inputEl.value.trim();

    try {
        const data = await fetchPhoto(valueInput);
        if (data.total === 0 || valueInput === "") {
            throw new Error("Sorry, there are no images matching your search query. Please try again!")
        }
        renderPhoto(data);
    } catch(error) {
        iziToast.show({ title: error.message, position: 'topRight', backgroundColor: 'red' }); 
    }

    formEl.reset();    
    loaderEl.classList.add("is-hidden");
    
});