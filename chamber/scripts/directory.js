const memjson = "data/members.json";
const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(memjson);
    const data = await response.json();
    display.classList.add("grid");
    console.log(data);
    displayMembers(data.members);
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let memberName = document.createElement("h2");
        let image = document.createElement("img");
        let otherinfo = document.createElement("h4");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("h4");

        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.name} picture`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "400");
        image.setAttribute("border", "2px solid black");
        image.setAttribute("box-shadow", "0 0 10px");

        memberName.textContent = `${member.name}`;
        membership.textContent = `Membership: ${member.membershiplevel}`;
        otherinfo.textContent = `${member.otherinfo}`;
        address.textContent = `${member.address}`;
        website.setAttribute("href", `${member.website}`);
        website.textContent = member.website;
        phone.textContent = `${member.phone}`;

        card.appendChild(memberName);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(otherinfo);
        card.appendChild(website);
        cards.appendChild(card);
    });
};


