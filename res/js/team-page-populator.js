import {
    getTeamMembers,
    generateUI
} from "./teambox-generator.js"

async function getSpeakersInformation() {
    try {
        const response = await fetch("/data/speakers.json")
        const data = await response.json()
        populateSection(data, document.querySelector(".speakers-commitee"))
    } catch (error) {
        console.log(error);
    }
}

getSpeakersInformation()
populateSection(await getTeamMembers("marketing"), document.querySelector(".marketing-team"))
populateSection(await getTeamMembers("finance"), document.querySelector(".finance-team"))
populateSection(await getTeamMembers("creative"), document.querySelector(".creative-team"))
populateSection(await getTeamMembers("management"), document.querySelector(".management-team"))


function populateSection(teamData, section) {
    section.insertAdjacentHTML("beforeend", generateUI(teamData))
}