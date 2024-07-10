const baseURL = "https://ArtemisEva.github.io/wdd230/";
const linksURL = "https://ArtemisEva.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const table = document.createElement("table");

    weeks.weeks.forEach((week) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const ltd = document.createElement("td");
        const weekLabel = document.createElement("span");
        weekLabel.textContent = `${week.week}:`;
        td.appendChild(weekLabel)
        week.links.forEach((link, index) => {
            const a = document.createElement("a");
            a.href = linksURL;
            a.textContent = link.title;

            ltd.appendChild(a);
            if (index < week.links.length - 1) {
                const separator = document.createElement("span");
                separator.textContent = " / ";
                ltd.appendChild(separator);
            }
        });
        tr.appendChild(td);
        tr.appendChild(ltd);
        table.appendChild(tr);
    });
    const existingList = document.getElementById("activities");
    const parent = existingList.parentNode;
    parent.replaceChild(table, existingList);
}

getLinks();

