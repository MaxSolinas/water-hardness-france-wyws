<div id="kinetico-fr-widget-final">
  <style>
    /* --- DESIGN KINETICO (Conforme Guidelines) --- */
    :root {
      --k-blue: #0054A4;     [cite_start]/* Pantone 661 C [cite: 319-320] */
      --k-cyan: #00ADEF;     [cite_start]/* Cyan 100% [cite: 289] */
      --k-orange: #F57F20;   [cite_start]/* Orange [cite: 290] */
      --k-magenta: #E5007E;  [cite_start]/* Magenta [cite: 296] */
      --k-grey: #666666;
    }

    #kinetico-fr-widget-final {
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
    
    .kw-headline { 
        text-transform: uppercase; 
        line-height: 1.1; 
        color: var(--k-cyan); 
        font-size: 2.2rem; 
        margin: 0; 
    }
    
    [cite_start]/* Typographie "Stacked" [cite: 163-172] */
    .kw-top-line { 
        font-family: 'Arial Black', 'Segoe UI Black', sans-serif;
        font-weight: 900; 
        display: block; 
        letter-spacing: -1px;
    }
    .kw-second-line { display: block; color: var(--k-blue); }
    .kw-word-water { font-weight: 300; font-family: 'Segoe UI', sans-serif; } 
    .kw-word-score { font-family: 'Arial Black', 'Segoe UI Black', sans-serif; font-weight: 900; letter-spacing: -1px; }

    .kw-tm {
        font-size: 0.3em; 
        vertical-align: top;
        position: relative;
        top: 0.1em;      
        font-weight: 400; 
        margin-left: 2px;
        line-height: 1;
        font-family: Arial, sans-serif;
    }

    .kw-subtext { color: var(--k-grey); margin-top: 10px; font-size: 0.95rem; }
    
    /* RECHERCHE */
    .kw-search-area { padding: 0 30px 15px; position: relative; }
    .kw-input { width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 50px; font-size: 16px; outline: none; text-align: center; transition: 0.3s; box-sizing: border-box;}
    .kw-input:focus { border-color: var(--k-blue); box-shadow: 0 0 0 3px rgba(0, 84, 164, 0.1); }
    
    .kw-suggestions { position: absolute; top: 65px; left: 30px; right: 30px; background: white; border: 1px solid #cce4f7; z-index: 9999; max-height: 250px; overflow-y: auto; box-shadow: 0 15px 30px rgba(0,0,0,0.15); display: none; border-radius: 8px; }
    .kw-suggestion-item { padding: 12px 15px; cursor: pointer; border-bottom: 1px solid #f0f0f0; text-align: left; }
    .kw-suggestion-item:hover { background: #f0f7ff; color: var(--k-blue); }
    
    [cite_start]/* SLIDER (VISIBLE) [cite: 191-220] */
    .kw-slider-wrapper { padding: 0 20px; transition: opacity 0.3s; margin-top: 10px;}
    .kw-slider-container { position: relative; height: 60px; margin: 20px 10px; }
    
    [cite_start]/* Dégradé Orange -> Magenta -> Cyan [cite: 276-302] */
    .kw-slider-bar { height: 40px; width: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--k-orange) 0%, var(--k-magenta) 50%, var(--k-cyan) 100%); position: relative; top: 10px; }
    .kw-grid-lines { position: absolute; top: 10px; left: 0; width: 100%; height: 40px; display: flex; justify-content: space-between; pointer-events: none; }
    .kw-line { width: 1px; background: rgba(255,255,255,0.4); height: 100%; }
    
    /* Goutte d'eau */
    .kw-water-drop { position: absolute; top: -15px; transform: translateX(-50%); width: 50px; height: 65px; transition: left 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s; z-index: 10; filter: drop-shadow(0 3px 5px rgba(0,0,0,0.2)); }
    .kw-drop-shape { width: 42px; height: 42px; background: var(--k-cyan); border-radius: 0 50% 50% 50%; transform: rotate(45deg); margin: 0 auto; border: 3px solid white; transition: background 1.5s; }
    .kw-drop-value { position: absolute; top: 13px; left: 0; width: 100%; text-align: center; color: white; font-weight: 800; font-size: 15px; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
    .kw-labels { display: flex; justify-content: space-between; margin-top: 15px; color: #999; font-size: 11px; font-weight: bold; padding: 0 2px; }
    
    /* RESULTATS */
    .kw-result-panel { padding: 0 20px 10px; animation: kw-fadein 0.6s ease-out; }
    .kw-commune-title { font-size: 1.3rem; font-weight: bold; color: var(--k-blue); margin-top: 10px; }
    
    .kw-message-box { background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 25px; border: 1px solid #eee; }
    .kw-cta-button { display: none; margin-top: 15px; background: var(--k-blue); color: white; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; transition: 0.3s; text-transform: uppercase; letter-spacing: 0.5px; }
    .kw-cta-button:hover { background: #003d7a; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,84,164,0.3); }
    
    [cite_start]/* FOOTER [cite: 132-134] */
    .kw-footer-block { margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee; margin-left: 30px; margin-right: 30px; }
    .kw-dealer-info { font-size: 11px; color: #555; font-weight: 400; font-family: Arial, sans-serif; line-height: 1.4; display: block; }
    .kw-dealer-name { font-weight: 800; color: var(--k-blue); text-transform: uppercase; font-size: 12px; display: block; margin-bottom: 3px; }
    .kw-source-data { font-size: 9px; color: #aaa; margin-top: 10px; display: block; }
    
    .kw-loader { color: #888; display: none; margin: 10px; font-style: italic; font-size: 0.9em; }
    .kw-error-msg { color: #d32f2f; display: none; margin: 10px; font-weight: bold; background:#ffebee; padding:10px; border-radius:5px;}
    
    @keyframes kw-fadein { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  </style>

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
    <input type="text" id="kw-input-fr" class="kw-input" placeholder="Ex: Lyon, Bordeaux, Augny..." autocomplete="off">
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
      <p id="kw-verdict-desc-fr" style="font-size: 0.95em; color:#555; margin:0; line-height: 1.5;"></p>
      
      <a href="/durete-de-leau-en-france#Obtenez-votre-devis" id="kw-cta-btn-fr" class="kw-cta-button">RAISE YOUR WATER SCORE TODAY!</a>
    </div>
  </div>

  <div class="kw-footer-block">
      <div class="kw-dealer-info">
          <span class="kw-dealer-name">Aqua Purify</span>
          Authorized, Independent Kinetico Dealer
      </div>
      <span class="kw-source-data">Données : Hub'Eau / Ministère de la Santé (API Temps Réel)</span>
  </div>

  <script>
    (function() {
      // Elements
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

      // 1. RECHERCHE COMMUNE (API GEO GOUV)
      // C'est beaucoup plus rapide et tolérant que Hub'Eau pour la recherche de texte
      input.addEventListener('input', (e) => {
          const val = e.target.value;
          clearTimeout(debounceTimer);
          
          // Reset
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
                  startAnalysis(c.code, c.nom); // On lance l'analyse avec le code INSEE
              };
              suggestions.appendChild(div);
          });
          suggestions.style.display = 'block';
      }

      // 2. RECUPERATION DONNEES (HUB'EAU)
      async function startAnalysis(insee, name) {
          loader.style.display = 'block';
          resultPanel.style.display = 'none';
          errorMsg.style.display = 'none';
          drop.style.opacity = '0'; // On cache la goutte pendant le chargement
          
          try {
              // Param 1345 = Titre Hydrotimétrique (TH)
              const url = `https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_commune=${insee}&code_parametre=1345&sort=desc&size=1`;
              
              const response = await fetch(url);
              const data = await response.json();

              loader.style.display = 'none';

              if (data.data && data.data.length > 0) {
                  // On a trouvé un résultat
                  updateUI(data.data[0].resultat_numerique, name);
              } else {
                  // Pas de résultat direct -> On pourrait chercher par réseau, mais commençons simple
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

      // 3. CALCUL SCORE ET AFFICHAGE
      function updateUI(thValue, cityName) {
          const th = parseFloat(thValue);
          let score;

          // CALCUL SCORE (4 Niveaux - Identique Lux)
          if (th < 5) score = 100 - (th * 2); 
          else if (th < 15) score = 96 - (th * 1.4); 
          else if (th < 30) score = 98 - (th * 1.6);
          else score = 49 - ((th - 30) * 0.4); 
          
          score = Math.max(30, Math.min(100, Math.round(score)));

          let color, title, text;
          
          // INTERPRETATIONS
          if (th < 5) {
              color = '#00ADEF'; // Cyan
              title = "EXCELLENT SCORE";
              text = `Votre eau est douce (${th.toFixed(1)}°f). La qualité est idéale pour vos appareils.`;
              ctaBtn.style.display = 'none';
          } else if (th < 15) {
              color = '#00ADEF'; // Cyan
              title = "BON SCORE, MAIS...";
              text = `Votre eau est peu calcaire (${th.toFixed(1)}°f). Votre confort pourrait tout de même être amélioré avec un adoucisseur d'eau.`;
              ctaBtn.style.display = 'inline-block';
          } else if (th < 30) {
              color = '#E5007E'; // Magenta
              title = "ADOUCISSEUR RECOMMANDÉ";
              text = `Votre eau est calcaire (${th.toFixed(1)}°f). Un adoucisseur d'eau est vivement recommandé pour protéger votre maison.`;
              ctaBtn.style.display = 'inline-block';
          } else {
              color = '#F57F20'; // Orange
              title = "ADOUCISSEUR INDISPENSABLE";
              text = `Votre eau est très dure (${th.toFixed(1)}°f). L'installation d'un adoucisseur d'eau est impérative pour éviter les dégâts.`;
              ctaBtn.style.display = 'inline-block';
          }

          displayCommune.textContent = "Qualité de l'eau à " + cityName;
          verdictTitle.textContent = title;
          verdictTitle.style.color = color;
          verdictDesc.textContent = text;
          
          scoreVal.textContent = score;
          dropShape.style.background = color;
          dropShape.style.borderColor = "white";
          
          // Animation Goutte
          drop.style.opacity = '1';
          const percent = ((score - 30) / 70) * 100;
          drop.style.left = `${percent}%`;

          resultPanel.style.display = 'block';
      }

      // Fermeture clic extérieur
      document.addEventListener('click', (e) => {
          if(input && suggestions && !input.contains(e.target) && !suggestions.contains(e.target)) {
              suggestions.style.display = 'none';
          }
      });
    })();
  </script>
</div>
