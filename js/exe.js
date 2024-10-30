
let destinations = [];
let crew = [];
let technology = [];
let space = ["Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"];

document.querySelector(".space-text").textContent = space[0];


// fetch planete//

async function getPlanetData() {
    const url = "/data/data.json";
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data && data.destinations && data.destinations.length > 0) {
            destinations = data.destinations;
            updateDestinationContent(destinations[0]);
        }
    } catch (error) {
        console.error('Se futui sefule, nu avem ¯\_(ツ)_/¯', error);
    }
}

function updateDestinationContent(destination) {
    const destinationH = document.querySelector('#destinationH');
    const destinationP = document.querySelector('#destinationP');
    const distanceP = document.querySelector('#distanceP');
    const travelP = document.querySelector('#travelP');
    const destinationImage = document.querySelector('#destinationImage');

    destinationH.textContent = destination.name;
    destinationP.textContent = destination.description;
    distanceP.textContent = destination.distance;
    travelP.textContent = destination.travel;
    destinationImage.src = destination.images.png;
    destinationImage.alt = destination.name;
}
//fetch crew//
async function getCrewData() {
    const url = "/data/data.json";
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data && data.crew && data.crew.length > 0) {
            crew = data.crew;
            updateCrewContent(crew[0]);
        }
    } catch (error) {
        console.error('Se futui sefule, nu avem ¯\_(ツ)_/¯', error);
    }
}

function updateCrewContent(crewMember) {
    const crewRole = document.querySelector("#crew-role");
    const crewName = document.querySelector("#crew-name");
    const crewInfo = document.querySelector("#crew-info");
    const crewImage = document.querySelector(".crew-img");

    crewRole.textContent = crewMember.role;
    crewName.textContent = crewMember.name;
    crewInfo.textContent = crewMember.bio;
    crewImage.src = crewMember.images.png;
    crewImage.alt = crewMember.name;
}
//fetch technology//
async function getTechnologyData() {
    const url = "/data/data.json";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.technology && data.technology.length > 0) {
            technology = data.technology;
            spaceShip = data.technology;
            updateTechnologyData(technology[0]);
        }
    } catch (error) {
        console.error('Se futui sefule, nu avem ¯\_(ツ)_/¯', error);
    }
}
//functii de a a duce datele pe ecran :) //
function updateTechnologyData(spaceShip) {
    const shuttleName = document.querySelector(".shuttle-name");
    const shuttleDesc = document.querySelector(".shuttle-description");
    const shuttleImg = document.querySelector(".tech-img");

    shuttleName.textContent = spaceShip.name;
    shuttleDesc.textContent = spaceShip.description;
    shuttleImg.src = spaceShip.images.portrait;
    
    function updateImage() {
        if (window.matchMedia("(max-width: 1200px)").matches) {
            shuttleImg.src = spaceShip.images.landscape;
        } else {
            shuttleImg.src = spaceShip.images.portrait;
        }
    }

    updateImage();

    window.addEventListener('resize', updateImage);
}

document.addEventListener('DOMContentLoaded', () => {
    
    getPlanetData().then(() => {
        document.getElementById('moon').addEventListener('click', (e) => {
            e.preventDefault();
            updateDestinationContent(destinations[0]);
        });

        document.getElementById('mars').addEventListener('click', (e) => {
            e.preventDefault();
            updateDestinationContent(destinations[1]);
        });

        document.getElementById('europa').addEventListener('click', (e) => {
            e.preventDefault();
            updateDestinationContent(destinations[2]);
        });

        document.getElementById('titan').addEventListener('click', (e) => {
            e.preventDefault();
            updateDestinationContent(destinations[3]);
        });

        document.querySelector('.destinationImage').addEventListener('click', (e) => {
            const currentAlt = document.querySelector('#destinationImage').alt;

            switch (currentAlt.toLowerCase()) {
                case 'moon':
                    updateDestinationContent(destinations[1]);
                    break;
                case 'mars':
                    updateDestinationContent(destinations[2]);
                    break;
                case 'europa':
                    updateDestinationContent(destinations[3]);
                    break;
                case 'titan':
                    updateDestinationContent(destinations[0]);
                    break;
            }
        });
    });

    getCrewData().then(() => {
        document.getElementById('crew-data-0').addEventListener('click', (e) => {
            e.preventDefault();
            updateCrewContent(crew[0]);
        });

        document.getElementById('crew-data-1').addEventListener('click', (e) => {
            e.preventDefault();
            updateCrewContent(crew[1]);
        });

        document.getElementById('crew-data-2').addEventListener('click', (e) => {
            e.preventDefault();
            updateCrewContent(crew[2]);
        });

        document.getElementById('crew-data-3').addEventListener('click', (e) => {
            e.preventDefault();
            updateCrewContent(crew[3]);
        });

        document.querySelector('.crew-img').addEventListener('click', (e) => {
            const currentAlt = document.querySelector('.crew-img').alt;

            const currentIndex = crew.findIndex(member => member.name.toLowerCase() === currentAlt.toLowerCase());
            const nextIndex = (currentIndex + 1) % crew.length;
            
            updateCrewContent(crew[nextIndex]);
        });
    });

    getTechnologyData().then(() => {
        document.getElementById('tech-data-0').addEventListener('click', (e) => {
            e.preventDefault();
            updateTechnologyData(spaceShip[0]);
        });
    
        document.getElementById('tech-data-1').addEventListener('click', (e) => {
            e.preventDefault();
            updateTechnologyData(spaceShip[1]);
        });
    
        document.getElementById('tech-data-2').addEventListener('click', (e) => {
            e.preventDefault();
            updateTechnologyData(spaceShip[2]);
        });
    
        document.querySelector('.tech-img').addEventListener('click', (e) => {
            const currentAlt = document.querySelector('.tech-img').alt;
    
            const currentIndex = technology.findIndex(member => member.name.toLowerCase() === currentAlt.toLowerCase());
            const nextIndex = (currentIndex + 1) % crew.length;
    
            updateCrewContent(crew[nextIndex]);
        });
    });
});
//functii de schimbare a paginii ------- mama ei de functie//
function changePage() {
    const homeBtn = document.getElementById("header-btn-home");
    const destBtn = document.getElementById("header-btn-dest");
    const crewBtn = document.getElementById("header-btn-crew");
    const techBtn = document.getElementById("header-btn-tech");
    const explBtn = document.getElementById("exploreBtn");
    const logoBtn = document.getElementById("logoBtn");

    const homeDiv = document.getElementById("home");
    const destDiv = document.getElementById("destination");
    const crewDiv = document.getElementById("crew");
    const techDiv = document.getElementById("technology");

    const moonBtn = document.getElementById("moon");
    const crewData0 = document.getElementById("crew-data-0");
    const techData0 = document.getElementById("tech-data-0");

    function hideAllSections() {
        homeDiv.style.display = 'none';
        destDiv.style.display = 'none';
        crewDiv.style.display = 'none';
        techDiv.style.display = 'none';
    }

    function resetActiveStates(selector) {
        document.querySelectorAll(selector).forEach(btn => {
            btn.classList.remove('active-button');
        });
    }

    function setDefaultActiveButtons() {
        resetActiveStates('.nav-list-d a');
        moonBtn.classList.add('active-button');

        resetActiveStates('.nav-list-crew a');
        crewData0.classList.add('active-button');

        resetActiveStates('.nav-list-tech a');
        techData0.classList.add('active-button');
    }

    homeBtn.addEventListener("click", () => {
        hideAllSections();
        homeDiv.style.display = 'flex';
        resetActiveStates('.header-btn');
        homeBtn.classList.add('active-button');
        setDefaultActiveButtons();
    });

    destBtn.addEventListener("click", () => {
        hideAllSections();
        destDiv.style.display = 'flex';
        resetActiveStates('.header-btn');
        destBtn.classList.add('active-button');
        setDefaultActiveButtons();
    });

    crewBtn.addEventListener("click", () => {
        hideAllSections();
        crewDiv.style.display = 'flex';
        resetActiveStates('.header-btn');
        crewBtn.classList.add('active-button');
        setDefaultActiveButtons();
    });

    techBtn.addEventListener("click", () => {
        hideAllSections();
        techDiv.style.display = 'flex';
        resetActiveStates('.header-btn');
        techBtn.classList.add('active-button');
        setDefaultActiveButtons();
    });

    explBtn.addEventListener("click", () => {
        hideAllSections();
        destDiv.style.display = 'flex';
        resetActiveStates('.header-btn');
        destBtn.classList.add('active-button');
        setDefaultActiveButtons();
    });

    logoBtn.addEventListener("click", () => {
        hideAllSections();
        homeDiv.style.display = 'flex';
        resetActiveStates('.header-btn');
        homeBtn.classList.add('active-button');
        setDefaultActiveButtons(); 
    });


    hideAllSections();
    homeDiv.style.display = 'flex';
    resetActiveStates('.header-btn');
    homeBtn.classList.add('active-button');


    setDefaultActiveButtons();
}

changePage();


//functii pentru meniu boorgir------ da si aici am scris boorgir pentru ca este funny si este dintr-un meme 〜ɢᵒᵒᵈ ɴⁱᵍᵗʰ( ᵕᴗᵕ)*･☪︎·̩͙ //

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})


function changePageBoorgir() {

    const homeBtn = document.getElementById("bheader-btn-home");
    const destBtn = document.getElementById("bheader-btn-dest");
    const crewBtn = document.getElementById("bheader-btn-crew");
    const techBtn = document.getElementById("bheader-btn-tech");
    const explBtn = document.getElementById("bexploreBtn");
    const logoBtn = document.getElementById("boorgirLogo");
    const homeDiv = document.getElementById("home");
    const destDiv = document.getElementById("destination");
    const crewDiv = document.getElementById("crew");
    const techDiv = document.getElementById("technology");

    function hideAllSections() {
        homeDiv.style.display = 'none';
        destDiv.style.display = 'none';
        crewDiv.style.display = 'none';
        techDiv.style.display = 'none';
    }
    homeBtn.addEventListener('click', () => {
        hideAllSections();
        homeDiv.style.display = 'flex';
    });

    destBtn.addEventListener('click', () => {
        hideAllSections();
        destDiv.style.display = 'flex';
    });

    crewBtn.addEventListener('click', () => {
        hideAllSections();
        crewDiv.style.display = 'flex';
    });

    techBtn.addEventListener('click', () => {
        hideAllSections();
        techDiv.style.display = 'flex';
    });
    
    explBtn.addEventListener("click", () => {
        hideAllSections();
        destDiv.style.display = 'flex';
    });

    logoBtn.addEventListener("click", () => {
        hideAllSections();
        homeDiv.style.display = 'flex';
    });

    hideAllSections();
    homeDiv.style.display = 'flex';
}
changePageBoorgir()
