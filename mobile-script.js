// redirect to desktop site - temp
if (screen.width > 768) {
    document.location = "./index.html";
    }


fetch('./broken_mods.json')
.then(response => {
    return response.json();
})
.then (jsondata => showBrokenMods(jsondata));


let showBrokenMods = (brokenModsList) => {

    brokenModsList.forEach((mod) => {
        const { steamID, title, url, issue, replacements } = mod
        // console.log(mod)

        const tableContainer = document.getElementById('table-container')
        const modEl = document.createElement('div')
        modEl.classList.add('mod-container')
        
        tableContainer.appendChild(modEl)

        modEl.innerHTML = `
            <div class="mod-title">${title}</div>

            <div class="mod-desc-row">
                <div class="desc">SteamID</div>
                <div class="desc-value">${steamID}</div>
            </div>
    
            <div class="mod-desc-row pair">
                <div class="desc">Workshop Link</div>
                <div class="desc-value">
                    <a href="#" target="_blank" rel="noopener">${url}</a>
                </div>
            </div>
    
            <div class="mod-desc-row">
                <div class="desc">Issue</div>
                <div class="desc-value">${issue}</div>
            </div>
    
            <div class="mod-desc-row ital pair">
                <div class="desc-value">Replacements</div>
            </div>
    
            <div class="mod-desc-row">
                <div class="desc">${replacements.replacement1.title}</div>
                <div class="desc-value">
                    <a href="#" target="_blank" rel="noopener">${replacements.replacement1.url}</a>
                </div>
            </div>
        `
    });
}