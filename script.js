// redirect to mobile website
if (screen.width <= 768) {
    document.location = "./mobile-broken.html";
    }

const brokenModsTable = document.getElementById('table-container')

const itemRow = document.createElement('div')
brokenModsTable.appendChild(itemRow)

let brokenModsArray = []

let showBrokenMods = (brokenModsList) => {

    brokenModsList.forEach((mod) => {
        const { steamID, title, url, issue, replacements } = mod
        // console.log(mod)

        
        const modEl = document.createElement('div')
        modEl.classList.add('item-row')
        
        brokenModsTable.appendChild(modEl)

        modEl.innerHTML = `
        <button class="edit edit-sizes edit-icon"><i class="fas fa-edit icon"></i></button>
        <div class="mod-row bold w-20">${title}</div>
        <div class="mod-row text-mid w-10">${steamID}</div>
        <div class="mod-row text-mid w-10"><a href="${url}" target="_blank" rel="noopener"><i class="fab fa-steam"></i></a></div>
        <div class="mod-row w-20">${issue}</div>
        <div class="mod-row w-15"><a href="${replacements.replacement1.url}" target="_blank" rel="noopener">${replacements.replacement1.title}</a></div>
        <div class="mod-row w-15">
            ${replacements.replacement2 ? `<a href="${replacements.replacement2.url}" target="_blank" rel="noopener">${replacements.replacement2.title}</a>` : ' '}
        </div>
        <button class="edit edit-sizes del-icon"><i class="fas fa-trash-alt icon"></i></button>
        `
    });
}

fetch('./broken_mods.json')
.then(response => {
    return response.json();
})
.then (jsondata => showBrokenMods(jsondata));
