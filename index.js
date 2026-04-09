

function geraToken(uuid, mode=1){
    if (uuid == undefined){
        
        const modal = document.getElementById("tokenModal");
        const input = document.getElementById("tokenInput");

        // Abre automaticamente
        modal.style.display = "flex";

        // Confirmar token
        document.getElementById("btnConfirmar").addEventListener("click", () => {
            const token = input.value.trim();

            if (!token) {
                alert("Digite um token!");
                return;
            }
            localStorage.clear()
            hero_id = token
            loadData(input.value);
            fecharModal();
            
            setTimeout(() => {
                saveData(hero_id)
            }, 1000);
            
            
        });

        // Gerar agora
        document.getElementById("btnGerar").addEventListener("click", () => {
            const tokenGerado = gerarToken();
            input.value = tokenGerado;
        });

        function fecharModal() {
            modal.style.display = "none";
        }

        function gerarToken() {
            if (crypto.randomUUID) {
                return crypto.randomUUID();
            }

            // fallback manual
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        
    }
};

//MISSÕES
function resolver_missao_diaria(event) {
    const id = event.currentTarget.dataset.id;
    const missao = missoes_diarias.find(m => m.id === id);
    var xp_adicional = 0;
    if (missao) {
        if (missao.completed) {
            return;
        }
        xp_adicional = missao.xp
        missao.completed = true;
    } else {
        console.log("Missão não encontrada");
    }

    hero_xp = hero_xp + xp_adicional
    updateXP(xp_adicional);
    saveData(hero_id);
    renderAllMissions();
}

function resolver_missao(event) {
    const id = event.currentTarget.dataset.id;
    const missao = missoes_aceitas.find(m => m.id === id);
    var xp_adicional = 0;

    if (missao) {

        xp_adicional = missao.xp;
        missao.completed = true;

        // 🔥 REMOVE A MISSÃO DA LISTA
        missoes_aceitas = missoes_aceitas.filter(m => m.id !== id);

    } else {
        console.log("Missão não encontrada");
    }

    hero_xp = hero_xp + xp_adicional;

    updateXP(xp_adicional);
    saveData(hero_id);
    renderAllMissions();
}

function aceitar_missao(event){
    const id = event.currentTarget.dataset.id;
    const missao = missoes_disponiveis().find(m => m.id === id);
    missoes_aceitas.push(missao)
    saveData(hero_id);
    renderAllMissions();
}








function updateXP(xp_adicional){
    hero_xp_proximo_nivel = 50*hero_level*1.7 + 50;
    if (hero_xp >= hero_xp_proximo_nivel){
        hero_xp = hero_xp - hero_xp_proximo_nivel;
        hero_level = hero_level + 1

        
        //tratando atributos do usuário
        hero_attrs.forca = hero_attrs.forca + 2
        hero_attrs.destreza = hero_attrs.destreza + 2
        hero_attrs.inteligencia = hero_attrs.inteligencia + 2
        hero_attrs.sorte = hero_attrs.sorte + 2
        hero_attrs.carisma = hero_attrs.carisma + 2



    }
    hero_xp_proximo_nivel = 50*hero_level*1.7 + 50;
    var next_level_area = document.getElementById("nextLevelXP")
    next_level_area.textContent = hero_xp_proximo_nivel
    
    var next_level_area = document.getElementById("xpToNext")
    next_level_area.textContent = hero_xp_proximo_nivel
    
    var xp_area = document.getElementById("currentXP")
    xp_area.textContent = hero_xp
    
    var level_bar = document.getElementById("xpFillBar");
    let porcentagem = (hero_xp / hero_xp_proximo_nivel) * 100;
    porcentagem = Math.min(porcentagem, 100);
    level_bar.style.width = porcentagem + "%";
    
    nivel_classe = dados_classe_ativa.niveis[Math.floor(levels_por_classe[classe_atual]["level"] / 10)];
    var nivel_classe_area = document.getElementById("txtNivelClasse")
    nivel_classe_area.textContent = nivel_classe

    var icon = dados_classe_ativa.icone
    var iconElement = document.getElementById("txtNivelClasseIcon");
    iconElement.className = icon;

    let classNamearea = document.getElementById("className")
    classNamearea.textContent = classe_atual

    let playerLevelArea = document.getElementById("playerLevel")
    playerLevelArea.textContent = hero_level

    

    //TRATANDO CLASSE
    if  (xp_adicional == undefined){
        xp_adicional = 0
    }
    levels_por_classe[classe_atual]["xp"] = levels_por_classe[classe_atual]["xp"] + xp_adicional
    let nextXpClasse = 50*levels_por_classe[classe_atual]["level"]*1.7 + 50;
    if (levels_por_classe[classe_atual]["xp"] >= nextXpClasse){
        levels_por_classe[classe_atual]["xp"] = levels_por_classe[classe_atual]["xp"] - nextXpClasse;
        levels_por_classe[classe_atual]["level"] = levels_por_classe[classe_atual]["level"] + 1
    }
    nextXpClasse = 50*levels_por_classe[classe_atual]["level"]*1.7 + 50;
    let nivelClasseArea = document.getElementById("nivelClasse")
    nivelClasseArea.textContent = levels_por_classe[classe_atual]["level"]

    let xpClasseArea = document.getElementById("xpClasse")
    xpClasseArea.textContent = levels_por_classe[classe_atual]["xp"]

    let nextxpClasseArea = document.getElementById("nextxpClasse")
    nextxpClasseArea.textContent = nextXpClasse


    

}






// ========================
// RADAR CHART - ATRIBUTOS DO HERÓI
// ========================
// Referência global do gráfico
let radarChart = null;

// Mapeamento de classe para bônus (em pontos extras)
const CLASS_BONUS = {
    "aprendiz": { forca: 0, velocidade: 1, inteligencia: 6, carisma: 2, sorte: 1 },
    "andarilho": { forca: 2, velocidade: 6, inteligencia: 2, carisma: 3, sorte: 2 },
    "mestre": { forca: 7, velocidade: 4, inteligencia: 4, carisma: 4, sorte: 5 }
};

// Função para determinar a classe real baseada no nível (usado internamente)
function getClassByLevel(level) {
    if (level <= 2) return "aprendiz";
    if (level <= 4) return "andarilho";
    return "mestre";
}

// Atualiza os elementos da interface (classe exibida) conforme nível
function updateUIClassByLevel(level) {
    let className = "";
    let icon = "";
    if (level <= 2) {
        className = "Aprendiz das Sombras";
        icon = '<i class="fas fa-hat-wizard"></i>';
    } else if (level <= 4) {
        className = "Andarilho Veloz";
        icon = '<i class="fas fa-wind"></i>';
    } else {
        className = "Mestre Lendário";
        icon = '<i class="fas fa-crown"></i>';
    }
    const classDisplaySpan = document.getElementById("classDisplay");
    const classNameSpan = document.getElementById("className");
    if (classDisplaySpan) {
        classDisplaySpan.innerHTML = `${icon} ${className}`;
    }
    if (classNameSpan) {
        classNameSpan.innerText = className;
    }
}

// Calcula os atributos atuais baseados no nível e na classe real
function computeAttributes(level, rawClassName) {
    // Base por nível: cada nível concede +2 em todos atributos
    const base = 12 + (level * 2);
    
    // Identifica a classe normalizada
    let classKey = "aprendiz";
    if (rawClassName && typeof rawClassName === 'string') {
        const lower = rawClassName.toLowerCase();
        if (lower.includes("andarilho")) classKey = "andarilho";
        else if (lower.includes("mestre") || lower.includes("lendário")) classKey = "mestre";
        else classKey = "aprendiz";
    } else {
        classKey = getClassByLevel(level);
    }
    
    const bonus = CLASS_BONUS[classKey] || CLASS_BONUS["aprendiz"];
    
    // Valores finais (força, velocidade, inteligência, carisma, sorte)
    return {
        forca: Math.min(70, base + bonus.forca),
        velocidade: Math.min(70, base + bonus.velocidade),
        inteligencia: Math.min(70, base + bonus.inteligencia),
        carisma: Math.min(70, base + bonus.carisma),
        sorte: Math.min(70, base + bonus.sorte)
    };
}

// Renderiza ou atualiza o radar chart com os dados atuais
function renderRadarChart() {
    const canvas = document.getElementById("statsRadarChart");
    if (!canvas) return;
    
    // Obter nível atual e classe (da interface)
    // const levelEl = document.getElementById("playerLevel");
    let currentLevel = hero_level;
    // if (levelEl) currentLevel = parseInt(levelEl.innerText, 10) || 1;
    
    let classNameDisplay = "Aprendiz";
    const classNameSpan = document.getElementById("className");
    if (classNameSpan) classNameDisplay = classNameSpan.innerText || "Aprendiz";
    
    // Sincroniza a classe exibida com o nível (caso esteja desatualizada)
    // updateUIClassByLevel(currentLevel);
    // Atualiza a string da classe novamente (pode ter mudado)
    if (classNameSpan) classNameDisplay = classNameSpan.innerText || "Aprendiz";
    
    // Atributos atuais
    const attrs = hero_attrs
    // Configuração dos dados
    console.log(hero_attrs.forca)
    const data = {
        labels: ["⚔️ Força", "💨 Destreza", "🧠 Inteligência", "✨ Carisma", "🍀 Sorte"],
        datasets: [{
            label: `Nível ${currentLevel}`,
            data: [hero_attrs.forca, hero_attrs.destreza, hero_attrs.inteligencia, hero_attrs.carisma, hero_attrs.sorte],
            backgroundColor: "rgba(30, 58, 138, 0.35)",
            borderColor: "#d4af37",
            borderWidth: 2.5,
            pointBackgroundColor: "#f5e7a3",
            pointBorderColor: "#aa7c1f",
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBorderWidth: 1.5,
            tension: 0.1
        }]
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            tooltip: {
                backgroundColor: "#0a0c12",
                titleColor: "#f5e7a3",
                bodyColor: "#b9c7d9",
                borderColor: "#d4af37",
                borderWidth: 1,
                callbacks: {
                    label: function(context) {
                        let val = context.raw;
                        return `${context.label}: ${val} pts`;
                    }
                }
            },
            legend: {
                labels: {
                    color: "#f5e7a3",
                    font: { size: 11, family: "'Inter', sans-serif" },
                    boxWidth: 12,
                    padding: 10
                },
                position: "bottom"
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 70,
                ticks: {
                    stepSize: 14,
                    backdropColor: "transparent",
                    color: "#b9c7d9",
                    font: { size: 9 }
                },
                grid: {
                    color: "rgba(212, 175, 55, 0.25)",
                    circular: true,
                    lineWidth: 0.8
                },
                angleLines: {
                    color: "rgba(212, 175, 55, 0.35)"
                },
                pointLabels: {
                    color: "#f5e7a3",
                    font: { size: 11, weight: "500" }
                },
                title: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                borderJoin: 'round'
            }
        }
    };
    
    // Destruir gráfico antigo se existir
    if (radarChart) {
        radarChart.destroy();
    }
    
    const ctx = canvas.getContext("2d");
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    });
}

// Configura os observadores para atualizar o gráfico automaticamente
function bindRadarEvents() {
    // Observa mudanças no nível (principal gatilho)
    const levelElement = document.getElementById("playerLevel");
    if (levelElement) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    renderRadarChart();
                }
            });
        });
        observer.observe(levelElement, { childList: true, characterData: true, subtree: true });
    }
    
    // Também observa mudanças na classe (caso algo externo modifique)
    const classElement = document.getElementById("className");
    if (classElement) {
        const classObserver = new MutationObserver(function() {
            renderRadarChart();
        });
        classObserver.observe(classElement, { childList: true, characterData: true, subtree: true });
    }
    
    // Força atualização ao clicar nos botões principais que alteram XP/nível
    const trainBtn = document.getElementById("trainBtn");
    const resetBtn = document.getElementById("resetBtn");
    
    const updateAfterAction = () => {
        setTimeout(() => {
            // Atualiza a classe com base no nível atual (garante consistência)
            // const level = parseInt(document.getElementById("playerLevel")?.innerText || "1", 10);
            // updateUIClassByLevel(level);
            renderRadarChart();
        }, 30);
    };
    
    if (trainBtn) trainBtn.addEventListener("click", updateAfterAction);
    if (resetBtn) resetBtn.addEventListener("click", updateAfterAction);
    
    // Para missões (botões dinâmicos) - captura cliques nos containers de missão
    const openMissions = document.getElementById("openMissionsList");
    const availableMissions = document.getElementById("availableMissionsList");
    
    const handleMissionClick = (e) => {
        // Se clicou em botão de completar/aceitar missão
        if (e.target && (e.target.classList?.contains("complete-mission") || 
            e.target.classList?.contains("accept-mission") ||
            e.target.closest?.(".complete-mission") || 
            e.target.closest?.(".accept-mission"))) {
            setTimeout(() => {
                // const level = parseInt(document.getElementById("playerLevel")?.innerText || "1", 10);
                // updateUIClassByLevel(level);
                renderRadarChart();
            }, 80);
        }
    };
    
    if (openMissions) openMissions.addEventListener("click", handleMissionClick);
    if (availableMissions) availableMissions.addEventListener("click", handleMissionClick);
    
    // Redesenha ao redimensionar a tela para ajustar qualidade
    window.addEventListener("resize", () => {
        if (radarChart) radarChart.resize();
    });
}

// Inicialização após carregamento completo
async function onPageLoad() {
    // Sincroniza classe baseada no nível inicial
    try {
        var local_hero_id = JSON.parse(localStorage.getItem("rpg_dashboard")).hero.id;

    } catch {
        var local_hero_id = undefined;

    }
    await loadData(local_hero_id)
    document.getElementById("playerNameDisplay").textContent = hero_name;
    geraToken(hero_id)
    updateXP()
    // updateUIClassByLevel(hero_level);
    renderRadarChart();
    bindRadarEvents();
    renderAllMissions();
   
};

window.addEventListener("DOMContentLoaded", () => {
    onPageLoad()
})


function editaNome(){
    let resposta = prompt("Insira o Novo nome a ser salvo:");
    let nomeArea = document.getElementById("playerNameDisplay")
    nomeArea.textContent = resposta
    hero_name = resposta
    saveData(hero_id)
}


const toggleBtn = document.getElementById('toggleTokenBtn');
const tokenDisplayArea = document.getElementById('tokenDisplayArea');
const tokenValueSpan = document.getElementById('tokenValue');
const refreshBtn = document.getElementById('refreshTokenBtn');
const copyBtn = document.getElementById('copyTokenBtn');

// Função para gerar token baseado nos atributos atuais do herói
function generateHeroToken() {
    // Obter valores atuais dos elementos
    const playerName = document.getElementById('playerNameDisplay')?.innerText || 'Kaelen';
    const className = document.getElementById('className')?.innerText || 'Aprendiz';
    const playerLevel = document.getElementById('playerLevel')?.innerText || '1';
    const classLevel = document.getElementById('nivelClasse')?.innerText || '1';
    const currentXP = document.getElementById('currentXP')?.innerText || '0';
    
    // Criar string base com os atributos
    const rawData = `${playerName}|${className}|LV${playerLevel}|CL${classLevel}|XP${currentXP}`;
    
    // Gerar hash simples (Base64 seguro para UTF-8)
    let encoded;
    try {
        // Suporte a caracteres especiais (acentos, etc)
        const utf8Bytes = unescape(encodeURIComponent(rawData));
        encoded = btoa(utf8Bytes);
    } catch(e) {
        encoded = btoa(rawData);
    }
    
    // Formatar token (prefixo + hash truncado)
    const tokenHash = encoded.slice(0, 32).replace(/[+/=]/g, char => {
        if (char === '+') return 'A';
        if (char === '/') return 'B';
        return 'C';
    });
    
    return `H3R0-${tokenHash}`;
}

// Atualizar o token exibido
function updateTokenDisplay() {
    if (tokenValueSpan) {
        tokenValueSpan.textContent = hero_id;
    }
}
document.getElementById("refreshTokenBtn").onclick = () => {
    geraToken(undefined, mode=2);
}

// Mostrar feedback de cópia
function showCopyFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.innerHTML = '<i class="fas fa-check-circle"></i> Token copiado!';
    document.body.appendChild(feedback);
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// Copiar token para área de transferência
async function copyTokenToClipboard() {
    if (!tokenValueSpan) return;
    const token = tokenValueSpan.textContent;
    try {
        await navigator.clipboard.writeText(token);
        showCopyFeedback();
    } catch (err) {
        // Fallback para navegadores antigos
        const textarea = document.createElement('textarea');
        textarea.value = token;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopyFeedback();
    }
}

// Alternar visibilidade da área de token
function toggleTokenVisibility() {
    if (!tokenDisplayArea || !toggleBtn) return;
    
    const isHidden = tokenDisplayArea.classList.contains('hidden');
    
    if (isHidden) {
        // Ao mostrar, atualiza o token com os dados mais recentes
        updateTokenDisplay();
        tokenDisplayArea.classList.remove('hidden');
        toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Ocultar Token';
    } else {
        tokenDisplayArea.classList.add('hidden');
        toggleBtn.innerHTML = '<i class="fas fa-key"></i> Visualizar Token';
    }
}

// Atualizar token se a área estiver visível (útil após mudanças nos atributos)
window.refreshHeroTokenIfVisible = function() {
    if (tokenDisplayArea && !tokenDisplayArea.classList.contains('hidden')) {
        updateTokenDisplay();
    }
};

// Event Listeners
if (toggleBtn) toggleBtn.addEventListener('click', toggleTokenVisibility);
if (refreshBtn) refreshBtn.addEventListener('click', updateTokenDisplay);
if (copyBtn) copyBtn.addEventListener('click', copyTokenToClipboard);

// Opcional: Atualizar token automaticamente quando o nome for editado
const editNameBtn = document.getElementById('editNameBtn');
if (editNameBtn) {
    editNameBtn.addEventListener('click', function() {
        // Pequeno delay para o nome ser atualizado no DOM
        setTimeout(() => {
            if (tokenDisplayArea && !tokenDisplayArea.classList.contains('hidden')) {
                updateTokenDisplay();
            }
        }, 100);
    });
}

// Monitorar mudanças no nível/XP via MutationObserver (opcional, mas robusto)
const observerTargets = ['playerLevel', 'nivelClasse', 'currentXP', 'className'];
const observer = new MutationObserver(function() {
    window.refreshHeroTokenIfVisible();
});

observerTargets.forEach(targetId => {
    const element = document.getElementById(targetId);
    if (element) {
        observer.observe(element, { childList: true, characterData: true, subtree: true });
    }
});

// Inicializar token (já gera o primeiro valor)
updateTokenDisplay();