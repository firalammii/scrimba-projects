
let leads = [];
renderLists();


const saveInputBtn = document.getElementById("save-input-btn");
saveInputBtn.addEventListener("click", saveInput);

const trackTabsBtn = document.getElementById("track-tabs-btn");
trackTabsBtn.addEventListener("click", trackTabs);

const deleteAllBtn = document.getElementById("delete-all-btn");
deleteAllBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    leads = [];
    renderLists();
});

// const input = document.getElementById("input");
// input.addEventListener("keypressed", clickHandler);


function renderLists () {
    let localStorageLeads = JSON.parse(localStorage.getItem("myLeads"));
    if (localStorageLeads) {
        leads = localStorageLeads;
    }
    let ol = document.getElementById("ol-el");
    // const anchorTag = "<li class=\"li-el\" <a href=\"\" target=\"_blank\">";
    let li = "";
    for (let i = 0; i < leads.length; i++) {
        li += `<li class="li-el" > <a href= "${leads[i]}" target="_blank"> ${leads[i]} </a></li>`;
    }
    ol.innerHTML = li;
}

function saveInput () {
    const inputValue = document.getElementById("leads-input").value;
    if (inputValue) {
        leads.push(inputValue);
    }
    document.getElementById("leads-input").value = "";
    localStorage.setItem("myLeads", JSON.stringify(leads));
    renderLists();
}
function trackTabs () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabUrl) {
        // const inputValue = document.getElementById("leads-input").value;
        if (tabUrl) {
            leads.push(tabUrl[0].url);
        }
        document.getElementById("leads-input").value = tabUrl[0].url;
        localStorage.setItem("myLeads", JSON.stringify(leads));

        renderLists();
    });

}