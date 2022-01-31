fetch('./broken_mods.json')
.then(response => {
    return response.json();
})
.then (jsondata => console.log(jsondata, jsondata.ARIS_Early_Death.replacements.replacement1.title));