const root=document.getElementsById("root");
const menu=["home","products","categories","contacts","log in","sign up"];
function navBar()
{
    const nav=documents.createElement("nav");
    const logo=documents.createElements("a");
    logo.innerHTML="shopping";
    nav.appendChild(logo);
    const div=documents.createElements("div");
    for(item in menu){
        const a=documents.createElements("a");
        a.innerHTML=menu[item];
        div.appendChild(a);
    }
    nav.appendChild(div);
    return nav;
}
root.appendChild(navBar(menu));




       

