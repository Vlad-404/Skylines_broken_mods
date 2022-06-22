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

// Upload a file
const uploadedFile = document.getElementById('file')
const uploadBtn = document.getElementById('upload-btn')

// Reading local file with AJAX
// let stringyfiedCsv = ''
// let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//     if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
//         stringyfiedCsv = xmlhttp.responseText;
//     }
// };
// xmlhttp.open("GET", "broken_mods.csv", true);
// xmlhttp.send();

// console.log(stringyfiedCsv)

uploadBtn.addEventListener('click', () => {
    if (uploadedFile.files[0] === undefined) {
        console.log('No file!')
    } else {
        console.log(uploadedFile.files[0])
        // const json = CSVJSON.csv2json(uploadedFile.files[0], {parseNumbers: true});
        // let stringyCsv = uploadedFile.files[0].toString()
        // console.log(stringyCsv)
    }
})