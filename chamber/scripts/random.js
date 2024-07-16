async function getSpotLightMembers() {
    const dataURL = "data/members.json";
    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data2 = await response.json();
        displaySpotlightMembers(data2.members);
        return data2;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

function displaySpotlightMembers(members) {

    const spotlights = document.querySelector(".cards");

    let spotlightmembers = members.filter((member) => member.membershiplevel === "Silver" || member.membershiplevel === "Gold");
    let randmembers = spotlightmembers.sort(() => 0.5 - Math.random()).slice(0, 4);

    randmembers.forEach((member) => {
        const spotlight = document.createElement("article");
        spotlight.classList.add("card");

        let status = member.membershiplevel === "Silver" ? "silver" : "gold";

        spotlight.innerHTML = `
        <h3 class="card-header ${status}">${member.membershiplevel} Member</h3>
        <div class="card-body">
        <img src="${member.image}" alt="${member.name.toLowerCase()}-image" loading="lazy" width=75 height=auto>
        <div class="contact-info">
            <address>
            <h4>${member.name}</h4>
        
                ${member.address}
            </address>
            <div>
                <a href=${member.website} target="_blank">${member.website}</a>
            </div>
        </div>
        </div>
    `;

        spotlights.appendChild(spotlight);
    });
}

getSpotLightMembers();

/* Banner*/

function banner() {
    let banner = document.querySelector(".banner");
    let closebanner = document.querySelector("#close");
    var today = new Date();
    var dow = today.getDay();
    var visiblebanner = dow >= 1 && dow <= 3;
    banner.classList.toggle("banner", visiblebanner);
    banner.classList.toggle("bannerhide", !visiblebanner);
    closebanner.addEventListener("click", function () {
        banner.classList.add("bannerhide");
    });
}

banner();