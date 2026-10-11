// durga_pooja modular navigation
function openPage(path) { window.open(path, "_blank"); }
function setJsonAndOpen(jsonFile, page) {
    localStorage.setItem("jsonFile", jsonFile);
    openPage(page);
}
function isSankalpamTime(){
    const h = new Date().getHours();
    return (h >= 5 && h < 8) || isEveningFlow();
}
function applySankalpamVisibility(){
    const cards = document.querySelectorAll("[data-sankalpam-only]");
    const visible = isSankalpamTime();
    cards.forEach(card => {
        card.hidden = !visible;
    });
}
function sankalpam(){
    openPage("../common/sankalpam.html");
}
function shodashopachara(){ openPage("../common/shodashopachara.html"); }
function lalithaSahasranama(){ openPage("../common/lalitha.html"); }
function ashtottharaShatnama(){ openPage("../devi/ashtottara.html"); }
function deviKhadgamaal(){ openPage("../common/khadgamala.html"); }
function mangalavadhyalu(){ openPage("../common/mangalavadhyalu.html"); }
function goBackFromMangalavadhyalu(){
    if(isEveningFlow()){
        window.location.href = "../devi/ashtottara.html";
    } else {
        window.location.href = "khadgamala.html";
    }
}
function mantraPushpam(){ openPage("../common/mantrapushpam.html"); }

function selectDevi(devi){
    localStorage.setItem("selectedDevi", devi);
    localStorage.setItem("alankaram", devi);
    window.location.href = "menu.html";
}

function suktas(){ openPage("../sukta/suktas.html"); }
function vedas(){ openPage("../veda/vedas.html"); }
function itihasas(){ openPage("../itihasa/itihasas.html"); }
function purushaSuktam(){ setJsonAndOpen("json/purushaSuktam.json","purusha.html"); }
function sriSuktam(){ setJsonAndOpen("json/sriSuktam.json","sri.html"); }
function bhuSuktam(){ setJsonAndOpen("json/bhuSuktam.json","bhu.html"); }
function manyuSuktam(){ setJsonAndOpen("json/manyuSuktam.json","manyu.html"); }
function durgaSuktam(){ setJsonAndOpen("json/durgaSuktam.json","durga.html"); }
function rigvedam(){ setJsonAndOpen("json/rigveda.json","rig.html"); }
function samavedam(){ setJsonAndOpen("json/samaveda.json","sam.html"); }
function yajurvedam(){ setJsonAndOpen("json/yajurveda.json","yajur.html"); }
function atharvavedam(){ setJsonAndOpen("json/atharvaveda.json","atharva.html"); }
function ramayanam(){ setJsonAndOpen("json/ramayanam.json","ramayanam.html"); }
function mahabharatam(){ setJsonAndOpen("json/mahabharatam.json","mahabharatam.html"); }
function bhagavatam(){ setJsonAndOpen("json/bhagavatam.json","bhagavatam.html"); }
function bhagavadgita(){ setJsonAndOpen("json/bhagavadgita.json","bhagavadgita.html"); }
function sundrakanda(){ setJsonAndOpen("json/sundrakanda.json","sundrakanda.html"); }

function bhaktiGeetham(){
    const alankaram = localStorage.getItem("alankaram");
    const map = {
      annapurna: "anapoorna.html",
      lalitha: "lingashtakam.html",
      mahalakshmi: "ashtalakshmi.html",
      mahishasuramardini: "mahishasuramardini.html"
    };
    openPage(map[alankaram] || "normal.html");
}
function applySankalpamDynamic(text){
    const tithiData = {
        "2026-10-11":"పాడ్యమి",
        "2026-10-12":"విదియ",
        "2026-10-13":"తదియ",
        "2026-10-14":"చవితి",
        "2026-10-15":"పంచమి",
        "2026-10-16":"షష్ఠి",
        "2026-10-17":"సప్తమి",
        "2026-10-18":"అష్టమి",
        "2026-10-19":"నవమి",
        "2026-10-20":"దశమి",
        "2026-10-21":"దశమి"
    };
    const varaPrefixes = [
        "భాను",
        "ఇందూ",
        "భౌమ",
        "సౌమ్య",
        "బృహస్పతి",
        "భృగు",
        "స్థిర"
    ];
    const now=new Date();
    const date =
        now.getFullYear()+"-"+
        String(now.getMonth()+1).padStart(2,"0")+"-"+
        String(now.getDate()).padStart(2,"0");
    const tithi=tithiData[date] || "……";
    const dayPrefix=varaPrefixes[now.getDay()];
    text=text.replace("(*౬)", "");
    text=text.replace("(*౭)", "");
    text=text.replace("…… తిథౌ", `<span class="sankalpam-dotted">${tithi}</span> తిథౌ`);
    text=text.replace("…… వాసరే", `<span class="sankalpam-dotted">${dayPrefix}</span> వాసరే`);

    // Target 1: "శ్రీ పరాభవ"
    text=text.replace("శ్రీ పరాభవ", '<span class="sankalpam-dotted">శ్రీ పరాభవ</span>');

    // Target 2, 3, 4, 5 in line: "దక్షిణ అయనే శరద్ ఋతౌ ఆశ్వీయుజ మాసే శుక్ల పక్షే"
    text=text.replace("దక్షిణ అయనే", '<span class="sankalpam-dotted">దక్షిణ</span> అయనే');
    text=text.replace("శరద్ ఋతౌ", '<span class="sankalpam-dotted">శరద్</span> ఋతౌ');
    text=text.replace(/ఆశ్వ[ీి]?యుజ మాసే/, match => {
        const word = match.replace(/\s*మాసే/, "");
        return `<span class="sankalpam-dotted">${word}</span> మాసే`;
    });
    text=text.replace("శుక్ల పక్షే", '<span class="sankalpam-dotted">శుక్ల</span> పక్షే');

    // Target 6 & 7: First 2 occurrences of "శుభ" in "శుభ నక్షత్రే శుభ యోగే శుభ కరణే"
    text=text.replace("శుభ నక్షత్రే శుభ యోగే", '<span class="sankalpam-dotted">శుభ</span> నక్షత్రే <span class="sankalpam-dotted">శుభ</span> యోగే');

    return text;
}
function createNumberBlocks(content){

    let blocks = [];
    let current = "";

    content.forEach(line => {

        let text = String(line).trim();

        if(!text){
            if(current.trim()){
                blocks.push(current.trim());
                current = "";
            }
            return;
        }

        current += (current ? "\n" : "") + text;


        // Separate mantra blocks ending with:
        // 1) Numbering e.g. "|| ౧ ||", "|| ౧౦ ||", "॥ ౧ ॥", or standalone numbers
        // 2) Normal double danda e.g. "||" or "॥" at the end of the line
        const isMantraEnd = 
            /(\|\||॥)\s*[౦-౯]+\s*(\|\||॥)?\s*$/.test(text) ||
            /^[౦-౯]+\s*(\|\||॥)$/.test(text) ||
            /(\|\||॥)\s*$/.test(text);

        if(isMantraEnd){
            blocks.push(current.trim());
            current = "";
        }
    });


    if(current.trim()){
        blocks.push(current.trim());
    }

    return blocks;
}
async function loadJson(){
    const titleEl=document.getElementById("title");
    const contentEl=document.getElementById("content");
    if(!titleEl || !contentEl) return;
    const file=document.body.dataset.jsonFile || localStorage.getItem("jsonFile");
    if(!file){ contentEl.textContent="కంటెంట్ ఫైల్ అందుబాటులో లేదు."; return; }
    try{
        const response=await fetch(file);
        if(!response.ok) throw new Error(`HTTP ${response.status}`);
        const data=await response.json();
        titleEl.textContent=data.title || "";
        contentEl.replaceChildren();

        if(file.includes("Sankalpam") && !isSankalpamTime()){
            const msgBox = document.createElement("div");
            msgBox.className = "puja-line";
            msgBox.textContent = "సంకల్ప పఠనం ఉదయం 5:00 నుండి 8:00 గంటల వరకు మరియు సాయంత్రం వేళల్లో మాత్రమే అందుబాటులో ఉంటుంది.";
            contentEl.appendChild(msgBox);
            return;
        }

        const content=filterMantrapushpamContent(data.content || [], file);
        let contentToRender = content;
        if(document.body.dataset.readerType === "number-block"){
            contentToRender = createNumberBlocks(content);
        }
        console.log("Original:", content);
        console.log("Blocked:", contentToRender);
        contentToRender.forEach(line=>{
        let text = String(line);
        if(file.includes("Sankalpam")){
            text = applySankalpamDynamic(text);
        }
        let element;
        if(!text.trim()){

            element = document.createElement("div");
            element.className = "puja-space";

        }
        // heading line
        else if(text.trim().endsWith("-") || text.trim().endsWith("–") || text.trim().endsWith("—")){
            element = document.createElement("div");
            element.className = "puja-section";

        }
        // normal mantra/content
       else{
            element = document.createElement("div");
            if(document.body.dataset.readerType === "number-block"){
                element.className = "number-block";
            }
        
            else{
                element.className = "puja-line";
            }
       }
        element.innerHTML = text.trim().replace(/\n/g,"<br>");
        contentEl.appendChild(element);

    });
    }catch(error){
        contentEl.textContent="కంటెంట్ లోడ్ కాలేదు: "+error.message;
        console.error(error);
    }
}
async function loadDeviDhyanam(){
    const devi = localStorage.getItem("selectedDevi");
    if(!devi) return;
    try{
        const response = await fetch(`../devi/json/stotras/${devi}.json`);
        const data = await response.json();
        const lines = data.content || [];
        let dhyanam = "";
        for(const line of lines){
            dhyanam += String(line).trim() + "\n";
            if(String(line).includes("ధ్యాయామి")){
                break;
            }
        }
        const contentEl = document.getElementById("content");
        if(contentEl){
            contentEl.innerHTML =
            contentEl.innerHTML.replace(
                "{ధ్యానశ్లోకాలు}",
                dhyanam.trim().replace(/\n/g,"<br>")
            );
        }

    }catch(error){
        console.error("Dhyanam error:", error);
    }
}
function loadAshtottara(){
    const devi=localStorage.getItem("selectedDevi");
    const allowed=["bala","gaythri","annapurna","mahachandi","lalitha","saraswati","mahalakshmi","durga","mahishasuramardini","rajarajeswari"];
    const file=allowed.includes(devi) ? `json/${devi}.json` : null;
    if(document.body) document.body.dataset.jsonFile=file || "";
    loadJson();
}
function isEveningFlow(){ const h=new Date().getHours(); return h>=18 || h<6; }
function gateEveningNavigation(){
    const evening = isEveningFlow();
    document.querySelectorAll("[data-evening-only]").forEach(el=>{
        if(!evening) el.hidden = true;
    });
    document.querySelectorAll("[data-morning-only]").forEach(el=>{
        if(evening) el.hidden = true;
    });
}
function filterMantrapushpamContent(content, file){
    if(!file.includes("mantrapushpam") || !isEveningFlow()){
        return content;
    }
    let skipLakshmi = false;
    let result = [];
    for(const line of content){
        if(String(line).includes("యః శుచి")){
            skipLakshmi = true;
        }
        if(String(line).includes("తన్నో॑ లక్ష్మీః")){
            skipLakshmi = false;
            continue;
        }
        if(!skipLakshmi){
            result.push(line);
        }
    }
    return result;
}
// Reusable Global Dark Mode System
function initTheme() {
    // Exclude Home screen to preserve its approved temple entrance art
    const isHomePage = document.querySelector(".temple-home-wrapper") !== null;
    if (isHomePage) return;

    const savedTheme = localStorage.getItem("app_theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    // Mount theme toggle button
    const readerHeader = document.querySelector(".reader-header");
    let toggleBtn = document.querySelector(".theme-toggle-btn");

    if (!toggleBtn) {
        toggleBtn = document.createElement("button");
        toggleBtn.className = "theme-toggle-btn";
        toggleBtn.setAttribute("aria-label", "డార్క్ మోడ్ మార్చు");
        toggleBtn.type = "button";

        if (readerHeader) {
            // Replace or place in the 3rd column of reader-header
            const iconSlot = readerHeader.querySelector(".reader-header-icon");
            if (iconSlot) {
                iconSlot.style.display = "inline-flex";
                iconSlot.innerHTML = "";
                iconSlot.appendChild(toggleBtn);
            } else {
                readerHeader.appendChild(toggleBtn);
            }
        } else {
            toggleBtn.classList.add("theme-toggle-fixed");
            document.body.appendChild(toggleBtn);
        }

        toggleBtn.addEventListener("click", () => {
            const isDark = document.body.classList.toggle("dark-mode");
            const newTheme = isDark ? "dark" : "light";
            localStorage.setItem("app_theme", newTheme);
            updateThemeIcon(toggleBtn, newTheme);
        });
    }

    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    updateThemeIcon(toggleBtn, currentTheme);
}

function updateThemeIcon(btn, theme) {
    if (!btn) return;
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("title", theme === "dark" ? "లైట్ మోడ్" : "డార్క్ మోడ్");
}

const dailyDeviMap = {
    "2026-10-11": { key: "bala", name: "శ్రీ బాలా త్రిపుర సుందరీ దేవి", img: "devi/assets/bala.jpg" },
    "2026-10-12": { key: "gaythri", name: "శ్రీ గాయత్రీ దేవి", img: "devi/assets/gaythri.jpg" },
    "2026-10-13": { key: "annapurna", name: "శ్రీ అన్నపూర్ణా దేవి", img: "devi/assets/annapurna.jpg" },
    "2026-10-14": { key: "mahachandi", name: "శ్రీ మహాలక్ష్మి / మహా చండీ దేవి", img: "devi/assets/mahachandi.jpg" },
    "2026-10-15": { key: "lalitha", name: "శ్రీ లలితా త్రిపుర సుందరీ దేవి", img: "devi/assets/lalitha.jpg" },
    "2026-10-16": { key: "saraswati", name: "శ్రీ సరస్వతీ దేవి", img: "devi/assets/saraswati.jpg" },
    "2026-10-17": { key: "mahalakshmi", name: "శ్రీ మహాలక్ష్మీ దేవి", img: "devi/assets/mahalakshmi.jpg" },
    "2026-10-18": { key: "durga", name: "శ్రీ దుర్గా దేవి", img: "devi/assets/durga.jpg" },
    "2026-10-19": { key: "mahishasuramardini", name: "శ్రీ మహిషాసుర మర్దినీ దేవి", img: "devi/assets/mahishasuramardini.jpg" },
    "2026-10-20": { key: "rajarajeswari", name: "శ్రీ రాజరాజేశ్వరీ దేవి", img: "devi/assets/rajarajeswari.jpg" }
};

function initDailyDeviWidget() {
    const widget = document.getElementById("dailyDeviWidget");
    if (!widget) return;
    const now = new Date();
    const dateKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const todayDevi = dailyDeviMap[dateKey];
    if (!todayDevi) {
        widget.style.display = "none";
        return;
    }

    widget.innerHTML = `
        <div class="daily-devi-badge">✨ నేటి అలంకారం ✨</div>
        <div class="daily-devi-content">
            <img src="${todayDevi.img}" alt="${todayDevi.name}" class="daily-devi-img">
            <div class="daily-devi-info">
                <h2 class="daily-devi-title">${todayDevi.name}</h2>
                <p class="daily-devi-sub">పూజా విధానం మరియు స్తోత్రములు →</p>
            </div>
        </div>
    `;
    widget.onclick = () => openTodayDevi(todayDevi.key);
    widget.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openTodayDevi(todayDevi.key);
        }
    };
    widget.style.display = "block";
}

function openTodayDevi(key) {
    localStorage.setItem("selectedDevi", key);
    localStorage.setItem("alankaram", key);
    window.location.href = "devi/menu.html";
}

document.addEventListener("DOMContentLoaded",async()=>{
    initTheme();
    gateEveningNavigation();
    applySankalpamVisibility();
    initDailyDeviWidget();
    if(document.body.dataset.ashtottara === "true") loadAshtottara();
    else loadJson();
    if(document.body.dataset.deviDhyanam === "true") loadDeviDhyanam();
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
    .then(() => {
        console.log("Service Worker registered");
    })
    .catch(error => {
        console.error("Service Worker registration failed:", error);
    });
}
window.addEventListener("beforeinstallprompt", (event) => {

    console.log("Install prompt available");   // add this

    event.preventDefault();

    deferredPrompt = event;

    const installBtn = document.getElementById("installBtn");

    if (installBtn) {
        installBtn.style.display = "block";
    }
});