const brokenModsTable = document.getElementById('table-container')

const itemRow = document.createElement('div')
brokenModsTable.appendChild(itemRow)

let brokenModsArray = []

let showBrokenMods = (brokenModsList) => {

    brokenModsList.forEach((mod) => {
        const { SteamID, Mod, URL, Issue, replacement, __5 } = mod

        const modEl = document.createElement('div')

        if (screen.width > 768) {

            modEl.innerHTML = `
                <button class="edit edit-sizes edit-icon"><i class="fas fa-edit icon"></i></button>
                <div class="mod-row bold w-20"><a href="${URL}" target="_blank" rel="noopener">
                ${Mod}
                </a></div>
                <div class="mod-row text-mid w-10">${SteamID}</div>
                <div class="mod-row text-mid w-10"><a href="${URL}" target="_blank" rel="noopener"><i class="fab fa-steam"></i></a></div>
                <div class="mod-row w-20">${Issue}</div>
                <div class="mod-row w-15">
                    ${replacement ? `<a href="${__5}" target="_blank" rel="noopener">${replacement}</a>` : '-'}
                </div>
                <button class="edit edit-sizes del-icon"><i class="fas fa-trash-alt icon"></i></button>
                `
            modEl.classList.add('item-row')
        
            brokenModsTable.appendChild(modEl)
        } else {
            // for screens smaller than 768px
            modEl.classList.add('mod-container')
            modEl.innerHTML = `
                <div class="mod-title">
                    <span class="edit-btn">
                        <i class="fas fa-edit icon"></i>
                    </span>
                    ${Mod}
                    <span class="del-btn">
                        <i class="fas fa-trash-alt icon"></i>
                    </span>
                </div>

                <div class="mod-desc-row">
                    <div class="desc">SteamID</div>
                    <div class="desc-value">${SteamID}</div>
                </div>
        
                <div class="mod-desc-row pair">
                    <div class="desc">Workshop Link</div>
                    <div class="desc-value">
                        <a href="${URL}" target="_blank" rel="noopener">
                            ${Mod}
                            <sup><i class="fas fa-external-link-alt"></i></sup>
                        </a>
                    </div>
                </div>
        
                <div class="mod-desc-row">
                    <div class="desc">Issue</div>
                    <div class="desc-value">${Issue}</div>
                </div>
        
                <div class="mod-desc-row ital pair">
                    <div class="desc-value">Replacements</div>
                </div>
                ${replacement ? 
                    `<div class="mod-desc-row">
                        <div class="desc">${replacement}</div>
                        <div class="desc-value">
                            <a href="${__5}" target="_blank" rel="noopener">${__5}</a>
                            <sup><i class="fas fa-external-link-alt"></i></sup>
                        </div>
                    </div>` : 
                    `<div class="mod-desc-row">
                        -
                    </div>`
                }

                <div class="delete-btn">
                <i class="fas fa-trash-alt icon"></i>
                </div>
            `
            brokenModsTable.appendChild(modEl)
        }
    });
}

fetch('./broken_mods_test.json')
.then(response => {
    return response.json();
})
.then (jsondata => showBrokenMods(jsondata));

// fetch('./broken_mods.csv')
// .then(response => {
//     console.log(response)
//     jsondata = CSVJSON.csv2json(response)
//     // return jsondata
//     // return CSVJSON.csv2json(response)
//     // jsondata = csv2json(response, {parseNumbers: true})
//     console.log(jsondata)
//     return jsondata
// })
// .then (jsondata => console.log(jsondata));