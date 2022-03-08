fetch('./broken_mods.json')
.then(response => {
    return response.json();
})
//.then (jsondata => showBrokenMods(jsondata));
.then (jsondata => console.log(jsondata));