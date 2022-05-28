let form = document.getElementById('register');
form.addEventListener('submit',submited);
function submited(e){
    e.preventDefault();
    let name = document.getElementById('name');
    let emaild = document.getElementById('emailid');
    let website = document.getElementById('website');
    let imglink = document.getElementById('imglink');
    let male = document.getElementById('male');
    let java = document.getElementById('java');
    let html = document.getElementById('html');
    let css = document.getElementById('css');
    let gender = (male.checked == true) ? 'Male' : 'Female' ;
    let skills = "";
    if(java.checked == true)
        skills += " Java, "
    if(html.checked == true)
        skills += " HTML, "
    if(css.checked == true)
        skills += " CSS "
    let card = `<td class="card">
                    <h2 id="name">${name.value}</h2>
                    <p>${gender}</p>
                    <p>${emaild.value}</p>
                    <a href=${website.value}>${website.value}</a>
                    <p>${skills}</p>
                </td>
                <td>
                    <img src=${imglink.value} width="100px" height="50px">
                </td>`
    
    let tr = document.createElement('tr')
    tr.innerHTML = card;
    document.getElementById('table').appendChild(tr);
    form.reset();
}