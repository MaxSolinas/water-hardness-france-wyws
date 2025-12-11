(function() {
    // -----------------------------------------------------------
    // CONFIGURATION (FRANCE)
    // -----------------------------------------------------------
    const CONFIG = {
        containerId: 'kinetico-fr-widget-root',
        quoteLink: '/durete-de-leau-en-france#Obtenez-votre-devis',
        websiteLink: 'https://www.aquapurify.eu'
    };

    // -----------------------------------------------------------
    // STYLES CSS
    // -----------------------------------------------------------
    const css = `
        #kinetico-fr-widget-container {
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            max-width: 650px;
            margin: 30px auto;
            background: #ffffff;
            border: 1px solid #e1e4e8;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            overflow: visible; 
            text-align: center; 
            position: relative; 
            padding-bottom: 25px;
        }
        .kw-header { padding: 30px 20px 10px; border-radius: 12px 12px 0 0; }
        .kw-headline { text-transform: uppercase; line-height: 1.1; color: #00ADEF; font-size: 2.4rem; margin: 0; }
        
        .kw-top-line { font-family: 'Arial Black', 'Segoe UI Black', sans-serif; font-weight: 900; display: block; letter-spacing: -1px; }
        .kw-second-line { display: block; color: #0054A4; }
        .kw-word-water { font-weight: 300; font-family: 'Segoe UI', sans-serif; } 
        .kw-word-score { font-family: 'Arial Black', 'Segoe UI Black', sans-serif; font-weight: 900; letter-spacing: -1px; }
        
        .kw-tm { font-size: 0.3em; vertical-align: top; position: relative; top: 0.1em; font-weight: 400; margin-left: 2px; line-height: 1; font-family: Arial, sans-serif; }
        .kw-subtext { color: #666; margin-top: 10px; font-size: 0.95rem; }
        
        .kw-search-area { padding: 0 30px 15px; position: relative; }
        .kw-input { width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 50px; font-size: 16px; outline: none; text-align: center; transition: 0.3s; box-sizing: border-box; }
        .kw-input:focus { border-color: #0054A4; box-shadow: 0 0 0 3px rgba(0, 84, 164, 0.1); }
        
        .kw-suggestions { position: absolute; top: 65px; left: 30px; right: 30px; background: white; border: 1px solid #cce4f7; z-index: 9999; max-height: 250px; overflow-y: auto; box-shadow: 0 15px 30px rgba(0,0,0,0.15); display: none; border-radius: 8px; }
        .kw-suggestion-item { padding: 12px 15px; cursor: pointer; border-bottom: 1px solid #f0f0f0; text-align: left; }
        .kw-suggestion-item:hover { background: #f0f7ff; color: #0054A4; }
        
        .kw-slider-wrapper { padding: 0 20px; transition: opacity 0.3s; margin-top: 10px; }
        .kw-slider-container { position: relative; height: 60px; margin: 20px 10px; }
        .kw-slider-bar { height: 40px; width: 100%; border-radius: 4px; background: linear-gradient(90deg, #F57F20 0%, #E5007E 50%, #00ADEF 100%); position: relative; top: 10px; }
        .kw-grid-lines { position: absolute; top: 10px; left: 0; width: 100%; height: 40px; display: flex; justify-content: space-between; pointer-events: none; }
        .kw-line { width: 1px; background: rgba(255,255,255,0.4); height: 100%; }
        
        .kw-water-drop { position: absolute; top: -15px; transform: translateX(-50%); width: 50px; height: 65px; transition: left 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s; z-index: 10; filter: drop-shadow(0 3px 5px rgba(0,0,0,0.2)); }
        .kw-drop-shape { width: 42px; height: 42px; background: #00ADEF; border-radius: 0 50% 50% 50%; transform: rotate(45deg); margin: 0 auto; border: 3px solid white; transition: background 1.5s; }
        .kw-drop-value { position: absolute; top: 13px; left: 0; width: 100%; text-align: center; color: white; font-weight: 800; font-size: 15px; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .kw-labels { display: flex; justify-content: space-between; margin-top: 15px; color: #999; font-size: 11px; font-weight: bold; padding: 0 2px; }
        
        .kw-result-panel { padding: 0 20px 10px; animation: kw-fadein 0.6s ease-out; }
        .kw-commune-title { font-size: 1.3rem; font-weight: bold; color: #0054A4; margin-top: 10px; }
        
        .kw-message-box { background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 25px; border: 1px solid #eee; }
        
        /* STYLE DU BOUTON */
        .kw-cta-button { 
            display: none; 
            margin-top: 15px; 
            background: #0054A4; 
            color: white; 
            text-decoration: none; 
            padding: 14px 30px; 
            border-radius: 6px; 
            font-weight: bold; 
            transition: 0.3s; 
            text-transform: uppercase; 
            letter-spacing: 0.5px; 
        }
        .kw-cta-button:hover { 
            background: #003d7a; 
            transform: translateY(-2px); 
            box-shadow: 0 4px 10px rgba(0,84,164,0.3); 
        }
        
        .kw-footer-block { margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee; margin-left: 30px; margin-right: 30px; }
        .kw-dealer-info { font-size: 11px; color: #555; font-weight: 400; font-family: Arial, sans-serif; line-height: 1.4; display: block; }
        
        .kw-dealer-link { color: #555; text-decoration: none; font-weight: 400; cursor: pointer; transition: color 0.2s; }
        .kw-dealer-link:hover { color: #000; }

        .kw-source-data { font-size: 9px; color: #aaa; margin-top: 10px; display: block; }
        
        .kw-loader { color: #888; display: none; margin: 10px; font-style: italic; font-size: 0.9em; }
        .kw-error-msg { color: #d32f2f; display: none; margin: 10px; font-weight: bold; background:#ffebee; padding:10px; border-radius:5px;}
        
        @keyframes kw-fadein { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    `;

    // -----------------------------------------------------------
    // TEMPLATE HTML
    // -----------------------------------------------------------
    const htmlTemplate = `
        <div id="kinetico-fr-widget-container">
            <div class="kw-header">
                <h2 class="kw-headline">
                    <span class="kw-top-line">WHAT'S YOUR</span>
                    <span class="kw-second-line">
                        <span class="kw-word-water">WATER</span> <span class="kw-word-score">SCORE?<sup class="kw-tm">TM</sup></span>
                    </span>
                </h2>
                <div class="kw-subtext">Découvrez la qualité de votre eau en quelques secondes.</div>
            </div>

            <div class="kw-search-area">
                <input type="text" id="kw-input-fr" class="kw-input" placeholder="Ex: Paris, Lyon..." autocomplete="off">
                <div id="kw-suggestions-fr" class="kw-suggestions"></div>
                <div id="kw-loader-fr" class="kw-loader">Recherche en cours...</div>
                <div id="kw-error-fr" class="kw-error-msg"></div>
            </div>

            <div class="kw-slider-wrapper">
                <div class="kw-slider-container">
                    <div class="kw-slider-bar">
                        <div class="kw-grid-lines">
                             <div class="kw-line"></div><div class="kw-line"></div><div class="kw-line"></div>
                             <div class="kw-line"></div><div class="kw-line"></div><div class="kw-line"></div>
                             <div class="kw-line"></div><div class="kw-line"></div>
                        </div>
                    </div>
                    <div id="kw-drop-fr" class="kw-water-drop" style="opacity: 0;">
                        <div id="kw-drop-shape-fr" class="kw-drop-shape"></div>
                        <div id="kw-score-val-fr" class="kw-drop-value">--</div>
                    </div>
                    <div class="kw-labels">
                        <span>30</span><span>40</span><span>50</span><span>60</span><span>70</span><span>80</span><span>90</span><span>100</span>
                    </div>
                </div>
            </div>

            <div id="kw-result-fr" class="kw-result-panel" style="display:none;">
                <div id="kw-commune-display-fr" class="kw-commune-title"></div>

                <div class="kw-message-box">
                    <strong id="kw-verdict-title-fr" style="font-size: 1.2em; display:block; margin-bottom:8px;"></strong>
                    <div id="kw-verdict-desc-fr" style="font-size: 0.95em; color:#555; margin:0; line-height: 1.5;"></div>
                    
                    <a href="${CONFIG.quoteLink}" id="kw-cta-btn-fr" class="kw-cta-button">AMÉLIOREZ VOTRE WATER SCORE AUJOURD'HUI !</a>
                </div>
            </div>

            <div class="kw-footer-block">
                <div class="kw-dealer-info">
                    <a href="${CONFIG.websiteLink}" target="_blank" class="kw-dealer-link">Aqua Purify</a><br>
                    Authorized, Independent Kinetico Dealer
                </div>
                <span class="kw-source-data">Données : Hub'Eau / Ministère de la Santé (API Temps Réel)</span>
            </div>
        </div>
    `;

    // -----------------------------------------------------------
    // LOGIQUE JAVASCRIPT
    // -----------------------------------------------------------
    function initWidget() {
        const root = document.getElementById(CONFIG.containerId);
        if (!root) return;

        const styleTag = document.createElement('style');
        styleTag.textContent = css;
        document.head.appendChild(styleTag);
        root.innerHTML = htmlTemplate;

        const input = document.getElementById('kw-input-fr');
        const suggestions = document.getElementById('kw-suggestions-fr');
        const loader = document.getElementById('kw-loader-fr');
        const errorMsg = document.getElementById('kw-error-fr');
        const resultPanel = document.getElementById('kw-result-fr');
        const displayCommune = document.getElementById('kw-commune-display-fr');
        
        const drop = document.getElementById('kw-drop-fr');
        const dropShape = document.getElementById('kw-drop-shape-fr');
        const scoreVal = document.getElementById('kw-score-val-fr');
        const verdictTitle = document.getElementById('kw-verdict-title-fr');
        const verdictDesc = document.getElementById('kw-verdict-desc-fr');
        const ctaBtn = document.getElementById('kw-cta-btn-fr');

        let debounceTimer;

        // 1. RECHERCHE COMMUNE
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            clearTimeout(debounceTimer);
            
            if(val.length < 2) { 
                suggestions.style.display = 'none'; 
                if(val.length === 0) {
                    drop.style.opacity = '0';
                    resultPanel.style.display = 'none';
                }
                return; 
            }

            debounceTimer = setTimeout(async () => {
                try {
                    const req = await fetch(`https://geo.api.gouv.fr/communes?nom=${val}&fields=nom,code,codesPostaux&boost=population&limit=6`);
                    const data = await req.json();
                    renderSuggestions(data);
                } catch(e) { console.error(e); }
            }, 300);
        });

        function renderSuggestions(list) {
            suggestions.innerHTML = '';
            if(!list.length) { suggestions.style.display = 'none'; return; }

            list.forEach(c => {
                const div = document.createElement('div');
                div.className = 'kw-suggestion-item';
                const cp = c.codesPostaux ? c.codesPostaux[0] : c.code;
                div.textContent = `${c.nom} (${cp})`;
                div.onclick = () => {
                    input.value = c.nom;
                    suggestions.style.display = 'none';
                    startAnalysis(c.code, c.nom);
                };
                suggestions.appendChild(div);
            });
            suggestions.style.display = 'block';
        }

        // 2. RECUPERATION DONNEES
        async function startAnalysis(insee, name) {
            loader.style.display = 'block';
            resultPanel.style.display = 'none';
            errorMsg.style.display = 'none';
            drop.style.opacity = '0';
            
            try {
                let data = await fetchHubEauData(insee, 'commune');
                
                if (!data) {
                    const udiList = await getAllUDIsFromCommune(insee);
                    if (udiList && udiList.length > 0) {
                        for (const udi of udiList) {
                            data = await fetchHubEauData(udi, 'reseau');
                            if (data) break; 
                        }
                    }
                }

                loader.style.display = 'none';

                if (data) {
                    updateUI(data.resultat_numerique, name);
                } else {
                    errorMsg.innerHTML = "Pas de données récentes pour <strong>" + name + "</strong>.<br>Essayez une grande ville voisine.";
                    errorMsg.style.display = 'block';
                }

            } catch (e) {
                console.error(e);
                loader.style.display = 'none';
                errorMsg.textContent = "Erreur de connexion au service Hub'Eau.";
                errorMsg.style.display = 'block';
            }
        }

        async function fetchHubEauData(code, type) {
            let url = `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_parametre=1345&sort=desc&size=1`;
            if (type === 'commune') url += `&code_commune=${code}`;
            else url += `&code_reseau=${code}`;

            const req = await fetch(url);
            const res = await req.json();
            return (res.data && res.data.length > 0) ? res.data[0] : null;
        }

        async function getAllUDIsFromCommune(insee) {
            const url = `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/communes_udi?code_commune=${insee}`;
            const req = await fetch(url);
            const res = await req.json();
            if (res.data && res.data.length > 0) {
                return res.data.map(item => item.code_reseau);
            }
            return [];
        }

        // 3. UI & SCORE (NOUVELLE LOGIQUE FRANCE)
        function updateUI(thValue, cityName) {
            const th = parseFloat(thValue);
            let score;

            // SCORE
            if (th < 5) score = 100 - (th * 2); 
            else if (th < 15) score = 96 - (th * 1.4); 
            else if (th < 30) score = 98 - (th * 1.6);
            else score = 49 - ((th - 30) * 0.4); 
            score = Math.max(30, Math.min(100, Math.round(score)));

            // RATIO
            const reference = 12;
            const ratio = (th / reference).toFixed(1).replace('.0', '');
            
            let color, title, text;
            
            if (th < 12) {
                color = '#00ADEF';
                title = "EAU DOUCE (OK)";
                text = `Votre eau (${th.toFixed(1)}°f) respecte le seuil de confort de référence (12°f).<br>Aucun traitement n'est nécessaire.`;
                ctaBtn.style.display = 'none';
            } else if (th < 15) {
                color = '#00ADEF'; 
                title = "EAU PEU CALCAIRE";
                text = `Votre eau (${th.toFixed(1)}°f) est légèrement au-dessus de la référence (12°f).<br>L'objectif en sortie d'adoucisseur est entre <strong>6 et 8°f</strong>.`;
                ctaBtn.style.display = 'inline-block';
            } else if (th < 30) {
                color = '#E5007E';
                title = "ADOUCISSEUR RECOMMANDÉ";
                text = `Votre eau est calcaire (${th.toFixed(1)}°f), soit <strong>${ratio} fois</strong> la référence de confort (12°f).<br>L'objectif en sortie d'adoucisseur est entre <strong>6 et 8°f</strong>.`;
                ctaBtn.style.display = 'inline-block';
            } else {
                color = '#F57F20';
                title = "ADOUCISSEUR INDISPENSABLE";
                text = `Votre eau est très dure (${th.toFixed(1)}°f), soit <strong>${ratio} fois</strong> la référence de confort (12°f).<br>L'objectif en sortie d'adoucisseur est entre <strong>6 et 8°f</strong>.`;
                ctaBtn.style.display = 'inline-block';
            }

            displayCommune.textContent = "Qualité de l'eau à " + cityName;
            verdictTitle.textContent = title;
            verdictTitle.style.color = color;
            verdictDesc.innerHTML = text;
            
            scoreVal.textContent = score;
            dropShape.style.background = color;
            dropShape.style.borderColor = "white";
            
            drop.style.opacity = '1';
            const percent = ((score - 30) / 70) * 100;
            drop.style.left = `${percent}%`;

            resultPanel.style.display = 'block';
        }

        document.addEventListener('click', (e) => {
            if(input && suggestions && !input.contains(e.target) && !suggestions.contains(e.target)) {
                suggestions.style.display = 'none';
            }
        });
    }

    let attempts = 0;
    const interval = setInterval(function() {
        const root = document.getElementById(CONFIG.containerId);
        if (root) {
            clearInterval(interval);
            initWidget();
        }
        attempts++;
        if (attempts > 30) clearInterval(interval);
    }, 300);

// PROTECTION ANTI-COPIE BASIQUE
    const container = document.getElementById(CONFIG.containerId);
    if(container) {
        // Empêche le menu clic-droit
        container.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false; 
        });
        // Empêche la sélection de texte
        container.style.userSelect = 'none';
        container.style.webkitUserSelect = 'none'; // Safari
    }
    
})();
