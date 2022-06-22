const brokenModsTable = document.getElementById('table-container')
const mobileNavToggle = document.querySelector('#mob-nav')
const mobileMenu = document.getElementById('mob-nav-list')
const toggleDark = document.querySelectorAll('.toggle')

// hide/show mobile navbar
window.onclick = (e) => {
    if (e.target.classList.contains('.fa-bars')) {
        console.log(e.target)
        //mobileMenu.className = 'hide'
    // if (e.target.matches('.hide')) {
    //     console.log('e.target.classList.contains("hide")')
    }
}

mobileNavToggle.addEventListener('click', () => {
    //if(mobileMenu.classList.contains('hide')) {
        mobileMenu.classList.toggle('hide')
    //} else {
        // console.log('proof that the function works')
    //}
})

// dark/light mode config
toggleDark.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const html = document.querySelector('html')

        if(html.classList.contains('dark')) {
            html.classList.remove('dark')
            e.target.innerHTML = 'Dark mode'
        } else {
            html.classList.add('dark')
            e.target.innerHTML = 'Light mode'
        }
    })
})

// get mod list from json file

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
            `
            brokenModsTable.appendChild(modEl)
        }
    });
}

fetch('./assets/json/broken_mods_test.json')
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
