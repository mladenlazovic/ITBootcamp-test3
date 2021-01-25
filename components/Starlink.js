export const Starlink = starlink => {
    const divStar = document.createElement('div')
        const pTLE = document.createTextNode('p')
        pTLE.textContent = starlink.spaceTrack.TLE_LINE0
        const pVerzija = document.createTextNode('p')
        pVerzija.textContent = starlink.version
    
        divStar.append(pTLE, pVerzija)

        return divStar
}