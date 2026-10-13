const CACHE_NAME = "devi-veda-v19";

const APP_FILES = [
    // Root
    "index.html",
    "style.css",
    "script.js",
    "manifest.json",
    "Mangalavadhyalu.mp3",

    // =====================
    // Common HTML
    // =====================
    "common/sankalpam.html",
    "common/shodashopachara.html",
    "common/lalitha.html",
    "common/khadgamala.html",
    "common/mangalavadhyalu.html",
    "common/mantrapushpam.html",

    // Common JSON
    "common/json/khadgamala.json",
    "common/json/lalithaSahasranama.json",
    "common/json/mantrapushpam.json",
    "common/json/Sankalpam.json",
    "common/json/sankalpam_tithi.json",
    "common/json/shodashopachara.json",


    // =====================
    // Devi HTML
    // =====================
    "devi/index.html",
    "devi/menu.html",
    "devi/ashtottara.html",

    // Devi JSON
    "devi/json/annapurna.json",
    "devi/json/bala.json",
    "devi/json/durga.json",
    "devi/json/gaythri.json",
    "devi/json/lalitha.json",
    "devi/json/mahachandi.json",
    "devi/json/mahalakshmi.json",
    "devi/json/mahishasuramardini.json",
    "devi/json/rajarajeswari.json",
    "devi/json/saraswati.json",

    // Devi Stotras JSON
    "devi/json/stotras/annapurna.json",
    "devi/json/stotras/bala.json",
    "devi/json/stotras/durga.json",
    "devi/json/stotras/gaythri.json",
    "devi/json/stotras/lalitha.json",
    "devi/json/stotras/mahachandi.json",
    "devi/json/stotras/mahalakshmi.json",
    "devi/json/stotras/mahishasuramardini.json",
    "devi/json/stotras/rajarajeswari.json",
    "devi/json/stotras/saraswati.json",


    // =====================
    // Veda HTML
    // =====================
    "veda/vedapatnam.html",
    "veda/vedas.html",
    "veda/rig.html",
    "veda/sam.html",
    "veda/yajur.html",
    "veda/atharva.html",

    // Veda JSON
    "veda/json/atharvaveda.json",
    "veda/json/rigveda.json",
    "veda/json/samaveda.json",
    "veda/json/yajurveda.json",


    // =====================
    // Sukta HTML
    // =====================
    "sukta/suktas.html",
    "sukta/purusha.html",
    "sukta/sri.html",
    "sukta/bhu.html",
    "sukta/manyu.html",
    "sukta/durga.html",

    // Sukta JSON
    "sukta/json/bhuSuktam.json",
    "sukta/json/durgaSuktam.json",
    "sukta/json/manyuSuktam.json",
    "sukta/json/purushaSuktam.json",
    "sukta/json/sriSuktam.json",


    // =====================
    // Itihasa HTML
    // =====================
    "itihasa/itihasas.html",
    "itihasa/ramayanam.html",
    "itihasa/mahabharatam.html",
    "itihasa/bhagavadgita.html",
    "itihasa/bhagavatam.html",
    "itihasa/sundrakanda.html",

    // Itihasa JSON
    "itihasa/json/bhagavadgita.json",
    "itihasa/json/bhagavatam.json",
    "itihasa/json/mahabharatam.json",
    "itihasa/json/ramayanam.json",
    "itihasa/json/sundrakanda.json",


    // =====================
    // Bhakti HTML
    // =====================
    "bhakti/index.html",
    "bhakti/normal.html",
    "bhakti/anapoorna.html",
    "bhakti/ashtalakshmi.html",
    "bhakti/lingashtakam.html",
    "bhakti/mahishasuramardini.html",

    // Bhakti JSON
    "bhakti/json/anapoorna.json",
    "bhakti/json/ashtalakshmi.json",
    "bhakti/json/lingashtakam.json",
    "bhakti/json/mahishasuramardini.json",
    // =====================
    // Root Assets
    // =====================
    "assets/devi-veda-icoon.jpg",
    "assets/devi.jpeg",
    "assets/icon-192.png",
    "assets/icon-512.png",
    "assets/vedapatnam.png",


    // =====================
    // Common Assets
    // =====================
    "common/assets/ashtottara_shatanamavali.png",
    "common/assets/devi_khadgamala.png",
    "common/assets/lalitha_sahasranamam.png",
    "common/assets/Mangalavadhyalu.png",
    "common/assets/mantra_pushpam.png",
    "common/assets/sankalpam.png",
    "common/assets/shodashopachara_purnakalasam.png",


    // =====================
    // Devi Assets
    // =====================
    "devi/assets/annapurna.jpg",
    "devi/assets/bala.jpg",
    "devi/assets/durga.jpg",
    "devi/assets/gaythri.jpg",
    "devi/assets/lalitha.jpg",
    "devi/assets/mahachandi.jpg",
    "devi/assets/mahalakshmi.jpg",
    "devi/assets/mahishasuramardini.jpg",
    "devi/assets/rajarajeswari.jpg",
    "devi/assets/saraswati.jpg",


    // =====================
    // Itihasa Assets
    // =====================
    "itihasa/assets/bhagavatam.png",
    "itihasa/assets/bharatham.png",
    "itihasa/assets/gita.png",
    "itihasa/assets/Ramayanam.png",
    "itihasa/assets/sundrakandha.png",


    // =====================
    // Sukta Assets
    // =====================
    "sukta/assets/bhu_suktam.png",
    "sukta/assets/durga_suktam.png",
    "sukta/assets/manyu_suktam.png",
    "sukta/assets/purusha_suktam.png",
    "sukta/assets/sri_suktam.png",


    // =====================
    // Veda Assets
    // =====================
    "veda/assets/atharava_veda.png",
    "veda/assets/rig_veda.png",
    "veda/assets/sam_veda.png",
    "veda/assets/yajur_veda.png"
];


// Install
self.addEventListener("install", event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(APP_FILES);
        })
    );
});


// Activate - remove old caches
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const url = event.request.url;

    // Handle audio range requests for offline playback
    if (url.includes("Mangalavadhyalu.mp3")) {
        event.respondWith(
            caches.open(CACHE_NAME).then(async cache => {
                // Find cached response matching the base URL (ignoring Range header during lookup)
                let response = await cache.match("Mangalavadhyalu.mp3");
                if (!response) {
                    try {
                        response = await fetch(event.request);
                        return response;
                    } catch (e) {
                        return new Response("Audio not available offline", { status: 503 });
                    }
                }

                const rangeHeader = event.request.headers.get("range");
                if (!rangeHeader) {
                    return response;
                }

                const arrayBuffer = await response.arrayBuffer();
                const totalLength = arrayBuffer.byteLength;

                // Parse Range header e.g. "bytes=0-", "bytes=100-500"
                const parts = rangeHeader.replace(/bytes=/, "").split("-");
                const start = parseInt(parts[0], 10) || 0;
                const end = parts[1] ? parseInt(parts[1], 10) : totalLength - 1;

                if (start >= totalLength || end >= totalLength) {
                    return new Response(null, {
                        status: 416,
                        headers: {
                            "Content-Range": `bytes */${totalLength}`
                        }
                    });
                }

                const slicedBuffer = arrayBuffer.slice(start, end + 1);

                return new Response(slicedBuffer, {
                    status: 206,
                    statusText: "Partial Content",
                    headers: {
                        "Content-Type": "audio/mpeg",
                        "Content-Range": `bytes ${start}-${end}/${totalLength}`,
                        "Content-Length": slicedBuffer.byteLength,
                        "Accept-Ranges": "bytes",
                        "Cache-Control": "public, max-age=31536000"
                    }
                });
            })
        );
        return;
    }

    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if(response){
                return response;
            }

            return fetch(event.request)
            .catch(() => {
                return caches.match("index.html");
            });
        })
    );
});