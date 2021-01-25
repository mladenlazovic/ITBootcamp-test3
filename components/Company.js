export const Company = company => {
    const divCompany = document.createElement('div')
        const pIme = document.createElement('p')
        pIme.textContent = company.name
        const pGodOsnivanja = document.createElement('p')
        pGodOsnivanja.textContent = company.founded
        const pLokacija = document.createElement('p')
        pLokacija.textContent = company.headquarters

    divCompany.append(pIme, pGodOsnivanja, pLokacija)

    return divCompany
}