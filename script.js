const brokenModsTable = document.getElementById('mods-list')

let brokenModsArray = []

let showBrokenMods = (brokenModsList) => {
    brokenModsTable.innerHTML = `
        <tr>
            <th>Mod</th>
            <th>SteamID</th>
            <th>URL</th>
            <th>Issue</th>
            <th>Replacement Option 1</th>
            <th>Replacement Option 2</th>
        </tr>
    `

    brokenModsList.forEach((mod) => {
        const { steamID, title, url, issue, replacements } = mod
        // console.log(mod)

        const modEl = document.createElement('tr')
        modEl.classList.add('mod-row')
        brokenModsTable.appendChild(modEl)

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
