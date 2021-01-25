import { Company } from "../components/Company";
import { NextLaunches } from "../components/NextLaunches";
import { Starlinks } from "../components/Starlinks";
import { getCompany, getNextLaunch, getStarlinks } from "./service";


// const header = document.querySelector('header')
// header.appendChild(Company())


const divApp = document.querySelector('#app')
const divSelect = document.querySelector('#select')
const buttonIspis = document.querySelector('#ispis')

let select = document.createElement('select')

let array = []

const GenerisiSelect = starlinkovi => {
    select = Select(starlinkovi.map(starlink => starlink.version))

    select.addEventListener('change', (event) =>{
        array = starlinkovi.filter(starlink => starlink.version == event.target.value)
        divApp.innerHTML = ''
        divApp.append(...Starlinks(array))
    })
    divSelect.append(select)
}

const Select = options => {
    options = new Set(options)
    const defOption = document.createElement('option')
    defOption.value = '-1'
    defOption.selected = true
    defOption.disabled = true
    defOption.hidden = true
    defOption.textContent = 'Odaberite verziju'

    select.appendChild(defOption)

    options.forEach(option =>{
        const opt = document.createElement('option')
        opt.value = option
        opt.textContent = option
        select.appendChild(opt)
    })

    return select
}

buttonIspis.addEventListener('click', () =>{
    divApp.innerHTML = ''
    getNextLaunch().then(res =>{
        divApp.append(...NextLaunches(res.data))
    })
})

// getCompany().then(res => {
//     const Company = company => {
//         const divCompany = document.createElement('div')
//             const pIme = document.createElement('p')
//             pIme.textContent = company.name
//             const pGodOsnivanja = document.createElement('p')
//             pGodOsnivanja.textContent = company.founded
//             const pLokacija = document.createElement('p')
//             pLokacija.textContent = company.headquarters
    
//         divCompany.append(pIme, pGodOsnivanja, pLokacija)
    
//         return divCompany
//     }
// })

getStarlinks().then(res => {
    array = res.data
    divApp.append(...Starlinks(array))

    GenerisiSelect(array)
})