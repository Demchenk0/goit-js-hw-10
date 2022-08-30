import { myUl } from './index';
import { mydiv } from './index';


export function markupCountries(countries) {
const mapCountries = countries.map(
    ({ flags: {svg}, name: {official} }) => {
    return `<li>
        <img width=30 src='${svg}'/>
        <p><span>${official}</span></p>
        </li>`;
    }
);
myUl.innerHTML = mapCountries.join('');
}

export function markupCountry([country]) {
    const { name: { official }, capital, population, flags: { svg }, languages } = country;
    const myMarkupCountry = `
    <img width=30 src='${svg}'/>
    <h2>${official}</h2>
    <p><span>Capital:</span> ${capital}</p>
    <p><span>Population:</span> ${population}</p>
    <p><span>Languages:</span> ${Object.values(languages).join(', ')}</p>
    `
    mydiv.innerHTML = myMarkupCountry;
}

export function deleteMarkup() {
    mydiv.innerHTML = '';
    myUl.innerHTML = '';
};