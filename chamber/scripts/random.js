const memjson = "data/members.json";
const randcards = document.querySelector("#ranCards");

async function getMemberData() {
    const response = await fetch(memjson);
    const data = await response.json();
    display.classList.add("randomCompany1");
    console.log(data);
    displayMembers(data.members);
}

const randomCompany1 = document.querySelector[Math.floor(Math.random() * data.name.length)];
const randomCompany2 = document.querySelector[Math.floor(Math.random() * data.name.length)];


const displayMembers = (members) => {
    members.forEach((member) => {
        let rancard = document.createElement("li");
        let card = document.createElement("section");
        let memberName = document.createElement("h2");
        let otherinfo = document.createElement("h4");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("h4");



        memberName.textContent = `${member.name}`;
        membership.textContent = `Membership: ${member.membershiplevel}`;
        otherinfo.textContent = `${member.otherinfo}`;
        address.textContent = `${member.address}`;
        website.setAttribute("href", `${member.website}`);
        website.textContent = member.website;
        phone.textContent = `${member.phone}`;

        rancard.appendChild(memberName);
        rancard.appendChild(address);
        rancard.appendChild(phone);
        rancard.appendChild(membership);
        rancard.appendChild(otherinfo);
        rancard.appendChild(website);
        randcards.appendChild(card);
    });
    getMemberData();
};


