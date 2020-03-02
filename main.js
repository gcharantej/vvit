fetch("data.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    //console.log(data);
    display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    //Card View
    let card=document.createElement("div");
    //Heading
    card.classList.add("card");
    let heading=document.createElement("h2");
    heading.textContent=info.name;

    bodyElement.append(card);
    card.append(heading);

    let line=document.createElement("hr");
    card.append(line);

    let a=document.createElement("h2");
    a.textContent=info.role;
    card.append(a);

    let b=document.createElement("h2");
    b.textContent=info.email;
    card.append(b);

    let c=document.createElement("h2");
    c.textContent=info.mobile;
    card.append(c);

    //Email
    let email=document.createElement("a");
    email.href=info.email;
    email.textContent=info.email;
    card.append(email);

    let br=document.createElement("br");
    card.append(br);

    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);

    var button=document.createElement("a");
    button.textContent="View Profile";
    button.classList.add("btn");
    card.append(button);

}