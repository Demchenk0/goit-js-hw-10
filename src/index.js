
import {deleteMarkup } from './markup'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import { markupCountries } from './markup'
import { markupCountry } from './markup'


const DEBOUNCE_DELAY = 300;


const myInput = document.querySelector('input');
export const myUl = document.querySelector('ul');
export const mydiv = document.querySelector('div');
console.log(myInput);
console.log(myUl);
console.log(mydiv);

myInput.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));


function onInput(event) {
    deleteMarkup();
    let myInputValue = event.target.value.trim();
    if (myInputValue) {
        fetchCountries(myInputValue)
            .then(response => {
                if (!response.ok) {
        throw new Error(response.status);
        }
                return response.json();
            }).then(countries => {
                if (countries.length > 10) {
                    Notify.info(`Too many matches found. Please enter a more specific name.`)
                    return;
                }
                if (countries.length >= 2 && countries.length <= 10) {
                    markupCountries(countries);
                    return;
                }
                markupCountry(countries);
            }).catch(error => {
                Notify.failure(`Oops, there is no country with that name`)
            })
    }
}
