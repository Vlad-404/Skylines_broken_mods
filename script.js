// redirect to mobile website
if (screen.width <= 768) {
    document.location = "./mobile-broken.html";
    }

const brokenModsTable = document.getElementById('mods-list')

const tBody = document.createElement('tbody')
brokenModsTable.appendChild(tBody)

let brokenModsArray = []

let showBrokenMods = (brokenModsList) => {

    brokenModsList.forEach((mod) => {
        const { steamID, title, url, issue, replacements } = mod
        // console.log(mod)

        
        const modEl = document.createElement('tr')
        modEl.classList.add('mod-row')
        
        tBody.appendChild(modEl)

        modEl.innerHTML = `
            <!-- Name of the mod -->
            <td style="font-weight: bold;">${title}</td>
            <!-- SteamID -->
            <td><a href="${url}" target="_blank">${steamID}</a></td>
            <!-- URL on Steam workshop-->
            <td class="align-text-mid"><a href="${url}" target="_blank">${url}</a></td>
            <!-- Issue -->
            <td>${issue}</td>
            <td><a href="${replacements.replacement1.url}" target="_blank">${replacements.replacement1.title}</a></td>
        `
    });
}

fetch('./broken_mods.json')
.then(response => {
    return response.json();
})
.then (jsondata => showBrokenMods(jsondata));
