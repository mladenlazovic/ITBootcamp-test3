export const NextLaunch = nextlaunch =>{
    const divNL = document.createElement('div')
        const img = document.createElement('img')
        img.src = nextlaunch.links.patch.small
        img.style.width = '150px'
        const pName = document.createElement('p')
        pName.textContent = nextlaunch.name
    divNL.append(img, pName)

    return divNL
}