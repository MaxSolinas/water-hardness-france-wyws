(function() {
    // ==========================================================================
    // 1. CONFIGURATION (FRANCE - VISUEL PREMIUM)
    // ==========================================================================
    const CONFIG = {
        containerId: 'kinetico-fr-widget-root', // ID du div conteneur sur votre site
        quoteLink: 'https://www.aquapurify.lu/get-a-quote', // Lien vers votre page de devis
        websiteLink: 'https://www.aquapurify.lu',
        // Liens produits (A adapter si vous avez des URL spécifiques pour la France)
        productCompactXP: 'https://www.aquapurify.lu/shop/adoucisseurs-deau-11/adoucisseur-kinetico-premier-compact-xp-2008',
        productPlusXP: 'https://www.aquapurify.lu/shop/adoucisseurs-deau-11/adoucisseur-kinetico-premier-plus-xp-2010'
    };

    // ==========================================================================
    // 2. CSS ISOLÉ (Conforme Brand Guidelines : Gotham/Montserrat, Couleurs Officielles)
    // ==========================================================================
    const css = `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800;900&display=swap');
        
        #kinetico-fr-widget-container { font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 30px auto; background: #fff; border: 1px solid #e1e4e8; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); overflow: visible; text-align: center; position: relative; padding-bottom: 25px; }
        .kw-fr-header { padding: 30px 20px 10px; border-radius: 12px 12px 0 0; }
        .kw-fr-headline { text-transform: uppercase; line-height: 1.1; color: #298FC2; font-size: 2.4rem; margin: 0; }
        .kw-fr-top-line { font-weight: 900; display: block; letter-spacing: -1px; color: #298FC2; }
        .kw-fr-second-line { display: block; color: #003594; }
        .kw-fr-word-water { font-weight: 300; } 
        .kw-fr-word-score { font-weight: 900; letter-spacing: -1px; }
        .kw-fr-tm { font-size: 0.3em; vertical-align: top; position: relative; top: 0.1em; font-weight: 400; margin-left: 2px; line-height: 1; font-family: Arial, sans-serif; }
        .kw-fr-subtext { color: #666; margin-top: 10px; font-size: 0.95rem; }
        
        /* CHAMP DE RECHERCHE */
        .kw-fr-search-area { padding: 0 30px 15px; position: relative; }
        .kw-fr-input { width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 50px; font-size: 16px; outline: none; text-align: center; transition: 0.3s; box-sizing: border-box; font-family: 'Montserrat', sans-serif; }
        .kw-fr-input:focus { border-color: #003594; box-shadow: 0 0 0 3px rgba(0, 53, 148, 0.1); }
        .kw-fr-suggestions { position: absolute; top: 65px; left: 30px; right: 30px; background: white; border: 1px solid #cce4f7; z-index: 9999; max-height: 250px; overflow-y: auto; box-shadow: 0 15px 30px rgba(0,0,0,0.15); display: none; border-radius: 8px; }
        .kw-fr-suggestion-item { padding: 12px 15px; cursor: pointer; border-bottom: 1px solid #f0f0f0; text-align: left; font-size: 0.95rem; }
        .kw-fr-suggestion-item:hover { background: #f0f7ff; color: #003594; }
        
        /* SLIDER WATER SCORE */
        .kw-fr-slider-wrapper { padding: 0 20px; transition: opacity 0.3s; margin-top: 10px; }
        .kw-fr-slider-container { position: relative; height: 60px; margin: 20px 10px; }
        .kw-fr-slider-bar { height: 40px; width: 100%; border-radius: 4px; background: linear-gradient(90deg, #F57F20 0%, #E6007E 50%, #298FC2 100%); position: relative; top: 10px; }
        .kw-fr-grid-lines { position: absolute; top: 10px; left: 0; width: 100%; height: 40px; display: flex; justify-content: space-between; pointer-events: none; }
        .kw-fr-line { width: 1px; background: rgba(255,255,255,0.4); height: 100%; }
        
        /* GOUTTE D'EAU ANIMÉE */
        .kw-fr-water-drop { position: absolute; top: -15px; transform: translateX(-50%); width: 50px; height: 65px; transition: left 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s; z-index: 10; filter: drop-shadow(0 3px 5px rgba(0,0,0,0.2)); }
        .kw-fr-drop-shape { width: 42px; height: 42px; background: #298FC2; border-radius: 0 50% 50% 50%; transform: rotate(45deg); margin: 0 auto; border: 3px solid white; transition: background 1.5s; }
        .kw-fr-drop-value { position: absolute; top: 13px; left: 0; width: 100%; text-align: center; color: white; font-weight: 800; font-size: 15px; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .kw-fr-labels { display: flex; justify-content: space-between; margin-top: 15px; color: #999; font-size: 11px; font-weight: bold; padding: 0 2px; }
        
        /* RESULTATS */
        .kw-fr-result-panel { padding: 0 20px 10px; animation: kw-fadein 0.6s ease-out; }
        .kw-fr-commune-title { font-size: 1.3rem; font-weight: bold; color: #003594; margin-top: 10px; }
        .kw-fr-message-box { background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 25px; border: 1px solid #eee; }
        .kw-fr-cta-button { display: none; margin-top: 15px; background: #E6007E; color: white; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; transition: 0.3s; text-transform: uppercase; letter-spacing: 0.5px; border: none; width: 100%; cursor: pointer; }
        .kw-fr-cta-button:hover { background: #c4006a; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(230, 0, 126, 0.3); }
        
        /* SIMULATEUR ROI */
        .kw-sim-box { background: #fff; border: 2px solid #E6007E; border-radius: 10px; padding: 20px; margin-top: 20px; text-align: left; position: relative; overflow: hidden; display: none; animation: kw-fadein 0.5s ease-out; }
        .kw-sim-title { color: #E6007E; font-weight: 900; font-size: 1.3rem; text-transform: uppercase; margin-bottom: 15px; display: block; text-align: center; }
        .kw-sim-controls { background: #fff5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
        .kw-sim-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .kw-sim-label { font-weight: bold; color: #555; font-size: 0.95em; }
        .kw-sim-input { width: 60px; padding: 5px; border-radius: 4px; border: 1px solid #ccc; text-align: center; font-weight: bold; font-family: 'Montserrat', sans-serif; }
        .kw-sim-toggle { cursor: pointer; }
        .kw-sim-result-total { text-align: center; margin: 20px 0; }
        .kw-sim-total-val { font-size: 2.5rem; font-weight: 900; color: #003594; display: block; line-height: 1; }
        .kw-sim-total-sub { font-size: 0.9em; color: #666; text-transform: uppercase; letter-spacing: 1px; }
        .kw-sim-breakdown { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .kw-sim-item { background: #f8f9fa; padding: 10px; border-radius: 6px; text-align: center; border: 1px solid #eee; }
        .kw-sim-val { font-weight: 800; color: #333; }
        .kw-sim-desc { font-size: 0.75em; color: #777; display: block; }
        .kw-sim-alert { grid-column: span 2; background: #fff3cd; color: #856404; padding: 10px; font-size:0.8em; text-align:center; border-radius:6px; font-weight:bold; margin-bottom:15px; border:1px solid #ffeeba; }

        /* SELECTION HABITAT */
        .kw-habitat-select { background: #eef6fc; padding: 20px; border-radius: 8px; margin-top: 20px; border: 2px solid #cce4f7; text-align: left; display: none; }
        .kw-habitat-label { display: block; font-weight: bold; margin-bottom: 10px; color: #003594; font-size: 1.1em; }
        .kw-habitat-dropdown { width: 100%; padding: 12px; border: 2px solid #003594; border-radius: 5px; font-size: 16px; background: white; cursor: pointer; color: #003594; font-weight: 600; font-family: 'Montserrat', sans-serif; }

        /* RECOMMANDATION PRODUIT */
        .kw-rec-box { background: #fff; border: 3px solid #E6007E; border-radius: 12px; padding: 25px; margin-top: 25px; text-align: center; box-shadow: 0 6px 20px rgba(229,0,126,0.15); position: relative; overflow: hidden; display: none; }
        .kw-rec-title { display: block; text-transform: uppercase; font-size: 0.9em; color: #E6007E; letter-spacing: 1px; margin-bottom: 10px; font-weight: 700; }
        .kw-product-name { display: block; font-size: 1.8rem; font-weight: 900; color: #003594; margin-bottom: 15px; }
        .kw-product-desc { color: #555; line-height: 1.5; font-size: 1em; margin-bottom: 20px; text-align: left; background: #f9f9f9; padding: 15px; border-radius: 8px; }
        .kw-rec-btn { display: inline-block; background: #E6007E; color: white; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-weight: bold; transition: 0.3s; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 10px rgba(229,0,126,0.3); }
        .kw-rec-btn:hover { background: #c4006a; transform: translateY(-2px); }
        .kw-rec-btn-secondary { display: inline-block; color: #003594; text-decoration: none; padding: 10px 20px; font-size: 0.9em; transition: 0.3s; border-bottom: 2px solid transparent; margin-top: 10px;}
        .kw-rec-btn-secondary:hover { border-bottom-color: #003594; }

        /* FOOTER & LOADER */
        .kw-fr-footer-block { margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee; margin-left: 30px; margin-right: 30px; }
        .kw-fr-dealer-info { font-size: 11px; color: #555; font-weight: 400; font-family: Arial, sans-serif; line-height: 1.4; display: block; }
        .kw-fr-dealer-link { color: #555; text-decoration: none; font-weight: 400; cursor: pointer; transition: color 0.2s; }
        .kw-fr-dealer-link:hover { color: #000; }
        .kw-fr-source-data { font-size: 9px; color: #aaa; margin-top: 10px; display: block; }
        .kw-fr-loader { color: #888; display: none; margin: 10px; font-style: italic; font-size: 0.9em; }
        .kw-fr-error-msg { color: #d32f2f; display: none; margin: 10px; font-weight: bold; background:#ffebee; padding:10px; border-radius:5px;}
        
        @keyframes kw-fadein { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    `;

    // ==========================================================================
    // 3. HTML TEMPLATE (STRUCTURE)
    // ==========================================================================
    const htmlTemplate = `
        <div id="kinetico-fr-widget-container">
            <div class="kw-fr-header">
                <h2 class="kw-fr-headline">
                    <span class="kw-fr-top-line">WHAT'S YOUR</span>
                    <span class="kw-fr-second-line">
                        <span class="kw-fr-word-water">WATER</span> <span class="kw-fr-word-score">SCORE?<sup class="kw-fr-tm">TM</sup></span>
                    </span>
                </h2>
                <div class="kw-fr-subtext">Découvrez la qualité de votre eau en quelques secondes.</div>
            </div>

            <div class="kw-fr-search-area">
                <input type="text" id="kw-input-fr" class="kw-fr-input" placeholder="Ex: Paris, Lyon, Bordeaux..." autocomplete="off">
                <div id="kw-suggestions-fr" class="kw-fr-suggestions"></div>
                <div id="kw-loader-fr" class="kw-fr-loader">Recherche des données Hub'Eau en cours...</div>
                <div id="kw-error-fr" class="kw-fr-error-msg"></div>
            </div>

            <div id="kw-slider-wrapper-fr" class="kw-fr-slider-wrapper">
                <div class="kw-fr-slider-container">
                    <div class="kw-fr-slider-bar">
                        <div class="kw-fr-grid-lines">
                             <div class="kw-fr-line"></div><div class="kw-fr-line"></div><div class="kw-fr-line"></div>
                             <div class="kw-fr-line"></div><div class="kw-fr-line"></div><div class="kw-fr-line"></div>
                             <div class="kw-fr-line"></div><div class="kw-fr-line"></div>
                        </div>
                    </div>
                    <div id="kw-drop-fr" class="kw-fr-water-drop" style="opacity: 0;">
                        <div id="kw-drop-shape-fr" class="kw-fr-drop-shape"></div>
                        <div id="kw-score-val-fr" class="kw-fr-drop-value">--</div>
                    </div>
                    <div class="kw-fr-labels">
                        <span>30</span><span>40</span><span>50</span><span>60</span><span>70</span><span>80</span><span>90</span><span>100</span>
                    </div>
                </div>
            </div>

            <div id="kw-result-fr" class="kw-fr-result-panel" style="display:none;">
                <div id="kw-commune-display-fr" class="kw-fr-commune-title"></div>
                
                <div id="kw-message-standard-fr" class="kw-fr-message-box">
                    <strong id="kw-verdict-title-fr" style="font-size: 1.2em; display:block; margin-bottom:8px;"></strong>
                    <div id="kw-verdict-desc-fr" style="font-size: 0.95em; color:#555; margin:0; line-height: 1.5;"></div>
                    
                    <button id="kw-btn-sim-fr" class="kw-fr-cta-button">
                        CALCULEZ VOS ÉCONOMIES ANNUELLES
                    </button>
                </div>

                <div id="kw-sim-container-fr" class="kw-sim-box">
                    <span class="kw-sim-title">Vos Pertes Annuelles Estimées</span>
                    <div class="kw-sim-controls">
                        <div class="kw-sim-row">
                            <span class="kw-sim-label">Personnes au foyer :</span>
                            <input type="number" id="kw-sim-ppl-fr" class="kw-sim-input" value="3" min="1" max="10">
                        </div>
                        <div class="kw-sim-row">
                            <span class="kw-sim-label">Eau en bouteille ?</span>
                            <input type="checkbox" id="kw-sim-bottle-fr" class="kw-sim-toggle" checked>
                        </div>
                    </div>
                    
                    <div id="kw-sim-alert-fr" class="kw-sim-alert" style="display:none;"></div>

                    <div class="kw-sim-result-total">
                        <span class="kw-sim-total-val" id="kw-sim-total-fr">-- €</span>
                        <span class="kw-sim-total-sub">Peuvent être économisés chaque année</span>
                    </div>

                    <div class="kw-sim-breakdown">
                        <div class="kw-sim-item"><span style="display:block;font-size:1.5em">🧴</span><span class="kw-sim-val" id="kw-sim-prod-fr">-- €</span><span class="kw-sim-desc">Entretien & Hygiène</span></div>
                        <div class="kw-sim-item"><span style="display:block;font-size:1.5em">⚡</span><span class="kw-sim-val" id="kw-sim-energy-fr">-- €</span><span class="kw-sim-desc">Surconso. Énergie</span></div>
                        <div class="kw-sim-item"><span style="display:block;font-size:1.5em">💧</span><span class="kw-sim-val" id="kw-sim-bottle-cost-fr">-- €</span><span class="kw-sim-desc">Achat Bouteilles</span></div>
                        <div class="kw-sim-item"><span style="display:block;font-size:1.5em">⚙️</span><span class="kw-sim-val" id="kw-sim-appliance-fr">-- €</span><span class="kw-sim-desc">Usure Appareils</span></div>
                    </div>
                </div>

                <div id="kw-habitat-selection-fr" class="kw-habitat-select">
                    <label class="kw-habitat-label">Quel est votre type d'habitation ?</label>
                    <select id="kw-habitat-type-fr" class="kw-habitat-dropdown">
                        <option value="" disabled selected>-- Sélectionnez --</option>
                        <option value="appt">Appartement</option>
                        <option value="maison">Maison Unifamiliale</option>
                    </select>
                </div>

                <div id="kw-rec-container-fr" class="kw-rec-box">
                    <span class="kw-rec-title">SOLUTION RECOMMANDÉE KINETICO</span>
                    <span id="kw-prod-name-fr" class="kw-product-name"></span>
                    <div id="kw-prod-desc-fr" class="kw-product-desc"></div>
                    <a href="#" id="kw-rec-link-fr" class="kw-rec-btn">DÉCOUVRIR CE MODÈLE</a>
                    <div style="margin-top: 15px;">
                        <a href="${CONFIG.quoteLink}" class="kw-rec-btn-secondary">Ou demander un devis personnalisé</a>
                    </div>
                </div>
            </div>

            <div class="kw-fr-footer-block">
                <div class="kw-fr-dealer-info">
                    <a href="${CONFIG.websiteLink}" target="_blank" class="kw-fr-dealer-link">Aqua Purify</a><br>
                    Authorized, Independent Kinetico Dealer
                </div>
                <span class="kw-fr-source-data">Données : Ministère de la Santé / Hub'Eau (API Temps Réel)</span>
            </div>
        </div>
    `;

    // ==========================================================================
    // 4. LOGIQUE JS (API FRANCE + SIMULATEUR)
    // ==========================================================================
    function initWidget() {
        const root = document.getElementById(CONFIG.containerId);
        if (!root) return;

        const styleTag = document.createElement('style');
        styleTag.textContent = css;
        document.head.appendChild(styleTag);
        root.innerHTML = htmlTemplate;

        // Éléments DOM
        const input = document.getElementById('kw-input-fr');
        const suggestions = document.getElementById('kw-suggestions-fr');
        const loader = document.getElementById('kw-loader-fr');
        const errorMsg = document.getElementById('kw-error-fr');
        const resultPanel = document.getElementById('kw-result-fr');
        const sliderWrapper = document.getElementById('kw-slider-wrapper-fr');
        const messageStandard = document.getElementById('kw-message-standard-fr');
        const displayCommune = document.getElementById('kw-commune-display-fr');
        const drop = document.getElementById('kw-drop-fr');
        const scoreVal = document.getElementById('kw-score-val-fr');
        const verdictTitle = document.getElementById('kw-verdict-title-fr');
        const verdictDesc = document.getElementById('kw-verdict-desc-fr');
        const dropShape = document.getElementById('kw-drop-shape-fr');
        
        // Éléments Simulateur & Reco
        const btnSim = document.getElementById('kw-btn-sim-fr');
        const simContainer = document.getElementById('kw-sim-container-fr');
        const simAlert = document.getElementById('kw-sim-alert-fr');
        const inputPpl = document.getElementById('kw-sim-ppl-fr');
        const inputBottle = document.getElementById('kw-sim-bottle-fr');
        const habitatSelection = document.getElementById('kw-habitat-selection-fr');
        const habitatType = document.getElementById('kw-habitat-type-fr');
        const recContainer = document.getElementById('kw-rec-container-fr');
        const prodName = document.getElementById('kw-prod-name-fr');
        const prodDesc = document.getElementById('kw-prod-desc-fr');
        const recLink = document.getElementById('kw-rec-link-fr');

        // Variables d'état
        let debounceTimer;
        let currentTH = 0;
        let currentScore = 0;

        // 1. RECHERCHE COMMUNE (API GOUV)
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            clearTimeout(debounceTimer);
            if(val.length < 2) { 
                suggestions.style.display = 'none'; 
                if(val.length === 0) resetUI();
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

        function resetUI() {
            drop.style.opacity = '0'; 
            resultPanel.style.display = 'none';
            errorMsg.style.display = 'none';
            suggestions.style.display = 'none';
        }

        function renderSuggestions(list) {
            suggestions.innerHTML = '';
            if(!list.length) { suggestions.style.display = 'none'; return; }
            list.forEach(c => {
                const div = document.createElement('div');
                div.className = 'kw-fr-suggestion-item';
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

        // 2. RECUPERATION DONNEES (API HUB'EAU)
        async function startAnalysis(insee, name) {
            loader.style.display = 'block';
            resultPanel.style.display = 'none';
            errorMsg.style.display = 'none';
            simContainer.style.display = 'none';
            habitatSelection.style.display = 'none';
            recContainer.style.display = 'none';
            habitatType.value = ""; // Reset dropdown

            try {
                // Essai 1 : Par code commune
                let data = await fetchHubEauData(insee, 'commune');
                
                // Essai 2 : Par réseau (UDI) si échec commune
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
                
                if (data && data.resultat_numerique) {
                    currentTH = parseFloat(data.resultat_numerique);
                    updateUI(currentTH, name);
                } else {
                    throw new Error("Pas de données");
                }
            } catch (e) {
                console.error(e);
                loader.style.display = 'none';
                errorMsg.innerHTML = "Désolé, les données de dureté pour <strong>" + name + "</strong> ne sont pas disponibles via Hub'Eau pour le moment.";
                errorMsg.style.display = 'block';
            }
        }

        async function fetchHubEauData(code, type) {
            // Code paramètre 1345 = Dureté / Titre Hydrotimétrique (TH)
            let url = `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_parametre=1345&sort=desc&size=1`;
            if (type === 'commune') url += `&code_commune=${code}`; else url += `&code_reseau=${code}`;
            const req = await fetch(url);
            const res = await req.json();
            return (res.data && res.data.length > 0) ? res.data[0] : null;
        }

        async function getAllUDIsFromCommune(insee) {
            const url = `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/communes_udi?code_commune=${insee}`;
            const req = await fetch(url);
            const res = await req.json();
            if (res.data && res.data.length > 0) return res.data.map(item => item.code_reseau);
            return [];
        }

        // 3. MISE A JOUR VISUELLE (SCORE + COULEURS)
        function updateUI(th, cityName) {
            // Calcul du Score (Inversé : + dur = - score)
            let score;
            if (th < 5) score = 100 - (th * 2); 
            else if (th < 15) score = 96 - (th * 1.4); 
            else if (th < 30) score = 98 - (th * 1.6);
            else score = 49 - ((th - 30) * 0.4); 
            score = Math.max(30, Math.min(100, Math.round(score)));
            currentScore = score;

            const ratio = (th / 12).toFixed(1).replace('.0', '');
            let color, title, text;
            
            // Logique Couleurs Kinetico (Cyan -> Magenta -> Orange)
            if (th < 12) {
                color = '#298FC2'; // Light Blue
                title = "EAU DOUCE (OK)"; 
                text = `Votre eau (${th.toFixed(1)}°f) respecte le seuil de confort. Aucun traitement calcaire nécessaire.`; 
                btnSim.style.display = 'none';
            } else if (th < 15) {
                color = '#298FC2'; 
                title = "EAU PEU CALCAIRE"; 
                text = `Votre eau (${th.toFixed(1)}°f) est légèrement au-dessus de la référence idéale (12°f).`; 
                btnSim.style.display = 'block';
            } else if (th < 30) {
                color = '#E6007E'; // Magenta
                title = "ADOUCISSEUR RECOMMANDÉ"; 
                text = `Votre eau est calcaire (${th.toFixed(1)}°f), soit <strong>${ratio} fois</strong> la référence. Elle abîme vos appareils et votre peau.`; 
                btnSim.style.display = 'block';
            } else {
                color = '#F57F20'; // Orange (Water Score Low)
                title = "ADOUCISSEUR INDISPENSABLE"; 
                text = `Votre eau est très dure (${th.toFixed(1)}°f), soit <strong>${ratio} fois</strong> la référence. Les dégâts sur vos canalisations sont inévitables sans traitement.`; 
                btnSim.style.display = 'block';
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

        // 4. LOGIQUE SIMULATEUR
        function updateSimulator() {
            const people = parseInt(inputPpl.value) || 3;
            const hasBottles = inputBottle.checked;

            let factor = 1;
            if(currentTH > 12) factor = currentTH / 12;

            // Estimations France (Moyennes)
            const savingsProd = Math.round((people * 160 * 0.30) * factor); // Produits entretien
            const savingsEnergy = Math.round((people * 45) * factor); // Énergie (cumulus entartré)
            const costBottles = hasBottles ? Math.round(people * 365 * 0.40) : 0; // Eau bouteille (~0.40€/L moy)
            const savingsAppliance = Math.round(150 * factor); // Amortissement électroménager

            const total = savingsProd + savingsEnergy + costBottles + savingsAppliance;

            if(factor > 1.5) {
                simAlert.style.display = 'block';
                simAlert.innerHTML = `⚠️ Dureté élevée (${currentTH.toFixed(1)}°f) : Vos pertes sont multipliées par <strong>${factor.toFixed(1)}x</strong> par rapport à une eau idéale.`;
            } else {
                simAlert.style.display = 'none';
            }

            document.getElementById('kw-sim-prod-fr').textContent = savingsProd + " €";
            document.getElementById('kw-sim-energy-fr').textContent = savingsEnergy + " €";
            document.getElementById('kw-sim-bottle-cost-fr').textContent = costBottles + " €";
            document.getElementById('kw-sim-appliance-fr').textContent = savingsAppliance + " €";
            document.getElementById('kw-sim-total-fr').textContent = total + " €";
        }

        btnSim.addEventListener('click', function() {
            simContainer.style.display = 'block';
            habitatSelection.style.display = 'block';
            updateSimulator();
            simContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });

        inputPpl.addEventListener('change', updateSimulator);
        inputBottle.addEventListener('change', updateSimulator);

        // 5. RECOMMANDATION PRODUIT
        habitatType.addEventListener('change', function() {
            const type = this.value;
            if(!type) return;

            const targetScore = 92; // Score cible avec adoucisseur Kinetico
            const scoreGain = targetScore - currentScore;
            let name = "";
            let desc = "";
            let productLink = "";

            if (type === 'appt') {
                if (currentTH <= 35) {
                    name = "Kinetico Premier Compact XP";
                    productLink = CONFIG.productCompactXP;
                    desc = `<strong>Pourquoi ce modèle ?</strong><br>Idéal pour la dureté actuelle (${currentTH.toFixed(1)}°f) en appartement. Compact, ultra-silencieux et fonctionne sans électricité.`;
                } else {
                    name = "Kinetico Premier Plus XP";
                    productLink = CONFIG.productPlusXP;
                    desc = `<strong>Pourquoi ce modèle ?</strong><br>Pour une dureté élevée (${currentTH.toFixed(1)}°f), ce modèle bi-colonne offre une capacité supérieure pour garantir de l'eau douce 24/7.`;
                }
            } else if (type === 'maison') {
                name = "Kinetico Premier Plus XP";
                productLink = CONFIG.productPlusXP;
                desc = `<strong>Pourquoi ce modèle ?</strong><br>La référence bi-colonne pour une protection totale de votre maison. Haut débit pour douches simultanées et régénération ultra-rapide.`;
            }

            desc += `<br><br><strong style="color:#E6007E; font-size:1.1em;">Gain Water Score : +${scoreGain} pts</strong>`;
            desc += `<br><span style="font-size:0.9em; color:#555;">💡 Combinez avec un osmoseur K5 pour un score de 99/100 (Eau de boisson pure).</span>`;

            prodName.textContent = name;
            prodDesc.innerHTML = desc;
            recLink.href = productLink;
            recContainer.style.display = 'block';
            recContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });

        // Fermeture suggestions au clic extérieur
        document.addEventListener('click', (e) => {
            if(input && suggestions && !input.contains(e.target) && !suggestions.contains(e.target)) {
                suggestions.style.display = 'none';
            }
        });
    }

    // Chargement différé pour s'assurer que le DOM est prêt
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
})();
