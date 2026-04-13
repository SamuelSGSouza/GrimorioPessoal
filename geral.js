


// ========================
// GLOBAL - funcs globais
// ========================
//CONSTANTS
const POSSIVEIS_MISSOES_DIARIAS = [
    { "id": "q1", "title": "💧 Elixir das Profundezas", "desc": "Beba 2 litros de água ao longo do dia", "xp": 40, "completed": false },
    { "id": "q2", "title": "🧘 Despertar Flexível", "desc": "Faça 5 minutos de alongamento matinal", "xp": 35, "completed": false },
    { "id": "q3", "title": "🧠 Silêncio Interior", "desc": "Medite por 5 minutos (respiração ou atenção plena)", "xp": 45, "completed": false },
    { "id": "q4", "title": "🚶 Passos do Explorador", "desc": "Caminhe por 15 minutos ao ar livre", "xp": 50, "completed": false },
    { "id": "q5", "title": "📖 Sábio das Páginas", "desc": "Leia 10 páginas de um livro", "xp": 55, "completed": false },
    { "id": "q6", "title": "🏋️ Força do Guerreiro", "desc": "Faça 20 agachamentos", "xp": 30, "completed": false },
    { "id": "q8", "title": "☀️ Banho de Luz", "desc": "Tome sol por 10 minutos (antes das 10h ou após 16h)", "xp": 40, "completed": false },
    { "id": "q10", "title": "📚 Ordem do Escriba", "desc": "Organize sua mesa ou área de trabalho por 5 minutos", "xp": 35, "completed": false },
    { "id": "q11", "title": "🌬️ Sopro dos Ancestrais", "desc": "Respire fundo 5 vezes (inspire 4s, segure 4s, expire 4s)", "xp": 25, "completed": false },
    { "id": "q13", "title": "👀 Descanso do Vidente", "desc": "Faça uma pausa de 5 minutos longe das telas (olhe para o horizonte)", "xp": 40, "completed": false },
    { "id": "q16", "title": "💪 Tábua de Resistência", "desc": "Segure a prancha por 1 minuto", "xp": 50, "completed": false },
    { "id": "q18", "title": "👋 Saudação do Viajante", "desc": "Dê bom dia ou um elogio sincero a alguém", "xp": 40, "completed": false },
    { "id": "q19", "title": "🪜 Escada do Herói", "desc": "Suba escadas em vez de usar elevador (se possível)", "xp": 45, "completed": false },
    { "id": "q20", "title": "📵 Proteção Noturna", "desc": "Desligue o celular 30 minutos antes de dormir", "xp": 60, "completed": false },
    { "id": "q21", "title": "🚫 Selo da Disciplina", "desc": "Rejeite conscientemente um hábito negativo hoje", "xp": 70, "completed": false },
    { "id": "q22", "title": "🧍 Postura do Guardião", "desc": "Mantenha a postura correta por 2 minutos", "xp": 30, "completed": false },
]
const DADOS_DE_CLASSES = [
        {
            id: "warrior",
            nome: "Guerreiro",
            icone: "fas fa-shield-alt",
            corIcone: "warrior-icon",
            corDestaque: "#d45a3a",
            niveis: ["Escudeiro", "Aprendiz", "Soldado", "Guerreiro", "Lendário"],
            foco: "Força física, resistência, disciplina",
            bonus: "Resistência mental + Disciplina",
            missoes: [
                { "id": "q1", "title": "💧 Hidratação do Escudeiro", "desc": "Beba 2 litros de água ao longo do dia", "xp": 40, "completed": false },
                { "id": "q2", "title": "🧘 Despertar do Guerreiro", "desc": "Faça 5 minutos de alongamento matinal", "xp": 35, "completed": false },
                { "id": "q3", "title": "🚶 Passos Firmes", "desc": "Dê 5.000 passos durante o dia", "xp": 45, "completed": false },
                { "id": "q4", "title": "🍎 Refeição do Escudeiro", "desc": "Faça uma refeição limpa (sem ultraprocessados)", "xp": 50, "completed": false },
                { "id": "q5", "title": "⏰ Disciplina Matinal", "desc": "Acorde no primeiro despertador e levante na hora", "xp": 55, "completed": false },
                { "id": "q6", "title": "🛌 Sono do Guerreiro", "desc": "Durma 7 horas seguidas", "xp": 40, "completed": false },
                { "id": "q7", "title": "📋 Registro de Treino", "desc": "Anote seu treino do dia em um caderno", "xp": 30, "completed": false },
                { "id": "q8", "title": "🧹 Limpeza de Armadura", "desc": "Arrume seu ambiente de treino/quarto por 5 minutos", "xp": 35, "completed": false },
                { "id": "q9", "title": "🚫 Desafio do Açúcar", "desc": "Fique sem doces industrializados por 1 dia", "xp": 60, "completed": false },
                { "id": "q10", "title": "💪 Flexão Iniciante", "desc": "Faça 10 flexões de joelhos ou inclinadas", "xp": 50, "completed": false },
                { "id": "q11", "title": "🏃 Corrida do Aprendiz", "desc": "Corra ou caminhe rápido por 10 minutos", "xp": 60, "completed": false },
                { "id": "q12", "title": "📵 Jejum de Distrações", "desc": "Fique 1 hora sem celular/TV enquanto treina", "xp": 55, "completed": false },
                { "id": "q13", "title": "🍗 Proteína do Aprendiz", "desc": "Consuma proteína magra em 2 refeições (frango, ovo, whey)", "xp": 65, "completed": false },
                { "id": "q14", "title": "🦵 Agachamento Básico", "desc": "Faça 30 agachamentos com peso corporal", "xp": 60, "completed": false },
                { "id": "q15", "title": "🧠 Foco em Série", "desc": "Complete 3 séries de um exercício sem pausa no celular", "xp": 50, "completed": false },
                { "id": "q16", "title": "📈 1% Melhor", "desc": "Faça 1 repetição a mais que seu recorde anterior em algum exercício", "xp": 70, "completed": false },
                { "id": "q17", "title": "🛡️ Postura de Escudo", "desc": "Mantenha postura ereta por 2 horas acumuladas", "xp": 45, "completed": false },
                { "id": "q18", "title": "🌅 Rotina Matinal", "desc": "Faça: acordar + alongar + tomar sol por 5 min", "xp": 75, "completed": false },
                { "id": "q19", "title": "🧘‍♂️ Respiração Guerreira", "desc": "Pratique 10 respirações profundas (4 seg in, 4 seg out)", "xp": 40, "completed": false },
                { "id": "q20", "title": "🚀 Escada do Soldado", "desc": "Suba e desça escadas por 5 minutos sem parar", "xp": 65, "completed": false },
                { "id": "q21", "title": "🏋️ Treino do Soldado", "desc": "Complete 4 exercícios diferentes (ex: flexão, agachamento, prancha, afundo)", "xp": 80, "completed": false },
                { "id": "q22", "title": "⏱️ HIIT Iniciante", "desc": "Faça 15 min de HIIT (30s trabalho, 15s descanso)", "xp": 85, "completed": false },
                { "id": "q23", "title": "🍽️ Refeição Pré-Treino", "desc": "Coma carboidrato limpo 1h antes do treino (banana, batata)", "xp": 70, "completed": false },
                { "id": "q24", "title": "📊 Marcação de Metas", "desc": "Defina 3 metas físicas para a semana", "xp": 60, "completed": false },
                { "id": "q25", "title": "🧤 Treino de Punho", "desc": "Faça 20 flexões de punho ou 1 min de prancha nos antebraços", "xp": 75, "completed": false },
                { "id": "q26", "title": "🚫 Detox Noturno", "desc": "Nada de telas 30 min antes de dormir", "xp": 65, "completed": false },
                { "id": "q27", "title": "🧗‍♀️ Desafio de Resistência", "desc": "Prancha frontal por 45 segundos", "xp": 80, "completed": false },
                { "id": "q28", "title": "🥩 Refeição Guerreira", "desc": "Faça uma refeição com carne magra + vegetais + carboidrato integral", "xp": 85, "completed": false },
                { "id": "q29", "title": "🏆 Recorde Pessoal", "desc": "Bata seu PR em algum exercício (carga ou repetição)", "xp": 100, "completed": false },
                { "id": "q30", "title": "🧠 Treino Mental", "desc": "Medite por 5 minutos focado na respiração", "xp": 70, "completed": false },
                { "id": "q31", "title": "⚔️ Corte de Preguiça", "desc": "Treine mesmo sem vontade (vitória contra a procrastinação)", "xp": 90, "completed": false },
                { "id": "q32", "title": "🔁 Circuito do Guerreiro", "desc": "Circuito: 10 flexões + 20 agachamentos + 30 seg prancha, 3 rodadas", "xp": 110, "completed": false },
                { "id": "q33", "title": "🍳 Cozinha do Guerreiro", "desc": "Prepare sua própria marmita saudável para o dia", "xp": 95, "completed": false },
                { "id": "q34", "title": "🏃‍♂️ 5K do Guerreiro", "desc": "Corra 5 km sem parar (tempo livre)", "xp": 120, "completed": false },
                { "id": "q35", "title": "📖 Diário de Batalhas", "desc": "Escreva 3 vitórias físicas do dia e 1 ponto a melhorar", "xp": 80, "completed": false },
                { "id": "q36", "title": "🎯 Disciplina Extrema", "desc": "Cumpra todos os horários de refeição e treino do dia", "xp": 100, "completed": false },
                { "id": "q37", "title": "🏋️‍♂️ Levantamento Lendário", "desc": "Faça 50 agachamentos com carga (mochila com livros ou halter)", "xp": 130, "completed": false },
                { "id": "q38", "title": "🧗‍♂️ Escalada de Força", "desc": "Faça 3 barras ou 8 flexões em pike", "xp": 125, "completed": false },
                { "id": "q39", "title": "🛡️ Resistência Mental", "desc": "Treine em jejum de 12h (apenas água)", "xp": 140, "completed": false },
                { "id": "q40", "title": "💥 Série Suprema", "desc": "100 flexões no dia (divididas como quiser)", "xp": 150, "completed": false },
                { "id": "q41", "title": "🏔️ Desafio da Montanha", "desc": "Suba 1000 degraus ou 50 andares de escada", "xp": 160, "completed": false },
                { "id": "q42", "title": "🧬 Reposição Heroica", "desc": "Cumpra macros do dia (proteína, carboidrato, gordura) sem erros", "xp": 140, "completed": false },
                { "id": "q43", "title": "⚡ Treino Pliométrico", "desc": "10 polichinelos + 10 saltos agachados + 10 afundos saltados, 4 rodadas", "xp": 170, "completed": false },
                { "id": "q44", "title": "🔱 Duplo Desafio", "desc": "Treine força pela manhã e cardio à tarde", "xp": 180, "completed": false },
                { "id": "q45", "title": "🧘‍♂️ Yoga do Guerreiro", "desc": "30 min de fluxo contínuo de yoga (saudação ao sol + posturas fortes)", "xp": 150, "completed": false },
                { "id": "q46", "title": "🔥 Forja do Lendário", "desc": "Circuito infernal: 20 burpees + 40 agachamentos + 60 seg prancha + 20 afundos", "xp": 200, "completed": false },
                { "id": "q47", "title": "🏋️‍♀️ 1RM Test", "desc": "Teste seu máximo em supino, agachamento ou levantamento terra (com segurança)", "xp": 220, "completed": false },
                { "id": "q48", "title": "🏅 Semana Gloriosa", "desc": "Treine 6 dias seguidos sem falhas", "xp": 250, "completed": false },
                { "id": "q49", "title": "🧠 Mestre da Disciplina", "desc": "Cumpra todos os hábitos do dia: sono, água, treino, alimentação, alongamento", "xp": 300, "completed": false },
                { "id": "q50", "title": "🐉 Ascensão do Lendário", "desc": "Complete uma maratona de força: 200 flexões + 300 agachamentos + 5 min prancha (no dia)", "xp": 500, "completed": false }
            ]
        },
        {
            id: "assassin",
            nome: "Assassino",
            icone: "fas fa-dagger",
            corIcone: "assassin-icon",
            corDestaque: "#b77dcc",
            niveis: ["Iniciante", "Ágil", "Corredor", "Assassino", "Sombra"],
            foco: "Agilidade, reflexo, rapidez",
            bonus: "Tempo de reação + Adaptabilidade",
            missoes: [
                { "id": "a1", "title": "👟 Passos Leves", "desc": "Caminhe 15 minutos em ritmo acelerado", "xp": 30, "completed": false },
                { "id": "a2", "title": "⚡ Reflexo Rápido", "desc": "Reaja a um estímulo (despertador, cronômetro) em menos de 2 segundos, 5 vezes", "xp": 35, "completed": false },
                { "id": "a3", "title": "🦶 Polichinelos", "desc": "Faça 3 séries de 30 polichinelos com pausa curta", "xp": 40, "completed": false },
                { "id": "a4", "title": "🎯 Olhar de Águia", "desc": "Identifique 10 objetos em 20 segundos no ambiente", "xp": 25, "completed": false },
                { "id": "a5", "title": "🌀 Alongamento Dinâmico", "desc": "5 min de alongamento em movimento (braços, pernas, tronco)", "xp": 35, "completed": false },
                { "id": "a6", "title": "👣 Escada de Agilidade", "desc": "Pratique 3 minutos de passos rápidos no chão (marcações imaginárias)", "xp": 45, "completed": false },
                { "id": "a7", "title": "🧠 Jogo de Reflexo", "desc": "Jogue 5 min de 'Human Benchmark' (teste de tempo de reação)", "xp": 40, "completed": false },
                { "id": "a8", "title": "🦵 Afundo Rápido", "desc": "20 afundos alternados sem pausa", "xp": 45, "completed": false },
                { "id": "a9", "title": "⏱️ Sprint de 50m", "desc": "Corra 50 metros o mais rápido que puder", "xp": 50, "completed": false },
                { "id": "a10", "title": "🤸‍♂️ Rolamento Básico", "desc": "Aprenda e execute 3 rolamentos frontais no tatame/grama", "xp": 55, "completed": false },
                { "id": "a11", "title": "🔁 Mudança de Direção", "desc": "Faça 10 mudanças de direção rápidas em 10 segundos (shuttle)", "xp": 60, "completed": false },
                { "id": "a12", "title": "👁️ Periférico Ativo", "desc": "Mantenha foco em um ponto enquanto identifica movimentos laterais por 2 min", "xp": 50, "completed": false },
                { "id": "a13", "title": "🏃‍♂️ Trote Contínuo", "desc": "Corra 10 minutos sem parar em ritmo moderado", "xp": 65, "completed": false },
                { "id": "a14", "title": "🧗 Subida Rápida", "desc": "Suba 5 lances de escada correndo (dois degraus por vez)", "xp": 70, "completed": false },
                { "id": "a15", "title": "🕹️ Decisão Rápida", "desc": "Jogue um jogo de ação por 10 min (ex: agar.io, aimbooster)", "xp": 55, "completed": false },
                { "id": "a16", "title": "🏋️‍♂️ Salto com Agachamento", "desc": "30 saltos agachados consecutivos", "xp": 75, "completed": false },
                { "id": "a17", "title": "🧘 Equilíbrio Estático", "desc": "Fique em um pé só por 30 segundos com olhos fechados", "xp": 60, "completed": false },
                { "id": "a18", "title": "⚔️ Esquiva Mental", "desc": "Reaja a 10 comandos de voz (esquerda, direita, baixo) no menor tempo possível", "xp": 80, "completed": false },
                { "id": "a19", "title": "💨 Série de Sprints", "desc": "4x100m com 30s de descanso entre cada", "xp": 90, "completed": false },
                { "id": "a20", "title": "🧩 Coordenação Rápida", "desc": "Faça 2 minutos de 'jump rope' (pular corda)", "xp": 85, "completed": false },
                { "id": "a21", "title": "🔦 Reflexo Noturno", "desc": "Em ambiente escuro, reaja a uma luz piscando (lanterna) 10 vezes", "xp": 95, "completed": false },
                { "id": "a22", "title": "🦅 Voo Rasante", "desc": "Corra em zigue-zague entre 5 obstáculos (cadeiras, garrafas) em 15 segundos", "xp": 100, "completed": false },
                { "id": "a23", "title": "🧠 Antecipação", "desc": "Acerte 5 bolas lançadas contra a parede (rebote)", "xp": 90, "completed": false },
                { "id": "a24", "title": "🦵💨 Sobe e Desce", "desc": "Faça 50 polichinelos com elevação de joelhos", "xp": 105, "completed": false },
                { "id": "a25", "title": "🏃‍♀️ Corrida de 1km", "desc": "Complete 1 km em menos de 5 minutos", "xp": 110, "completed": false },
                { "id": "a26", "title": "🎯 Precisão Mortal", "desc": "Acertar 8 de 10 arremessos em uma cesta/lata de lixo", "xp": 95, "completed": false },
                { "id": "a27", "title": "🌀 Dança da Sombra", "desc": "Imita uma sequência de 8 movimentos rápidos (luta, dança)", "xp": 115, "completed": false },
                { "id": "a28", "title": "🕴️ Queda Rolada", "desc": "Rolamento para frente + levantamento explosivo em 2 segundos", "xp": 120, "completed": false },
                { "id": "a29", "title": "🧗‍♀️ Parkour Básico", "desc": "Pule um obstáculo de 50cm e role a queda", "xp": 130, "completed": false },
                { "id": "a30", "title": "⚡ Reação a Som", "desc": "Reaja a um apito inesperado com sprint de 5m (10 repetições)", "xp": 125, "completed": false },
                { "id": "a31", "title": "🏃‍♂️💨 Corrida Intervalada", "desc": "30s sprint / 30s trote, 8 rounds", "xp": 140, "completed": false },
                { "id": "a32", "title": "🧩 Desafio de Foco", "desc": "Conte quantas vezes uma bola muda de cor em 1 min (vídeo no YouTube)", "xp": 110, "completed": false },
                { "id": "a33", "title": "🦶 Escada de Velocidade", "desc": "Padrão Icky Shuffle (escada de agilidade) por 3 minutos", "xp": 145, "completed": false },
                { "id": "a34", "title": "🤸‍♀️ Voadora", "desc": "Salto em distância parado (mínimo 1,5m) sem queda", "xp": 150, "completed": false },
                { "id": "a35", "title": "🧠 Reflexo Duplo", "desc": "Jogue 'Aim Lab' ou 'Osu!' por 15 min (acertar alvos)", "xp": 140, "completed": false },
                { "id": "a36", "title": "🏔️ Subida Explosiva", "desc": "Suba 10 andares de escada correndo (2 degraus por vez) em menos de 90s", "xp": 160, "completed": false },
                { "id": "a37", "title": "⚔️ Esquiva Total", "desc": "Desvie de 5 bolas de tênis jogadas contra você em 10s", "xp": 170, "completed": false },
                { "id": "a38", "title": "💨 400m Rasos", "desc": "Corra 400m em menos de 1min20s", "xp": 180, "completed": false },
                { "id": "a39", "title": "🦅 Salto Mortal", "desc": "Execute um roll de ombro + levantamento sem as mãos", "xp": 175, "completed": false },
                { "id": "a40", "title": "🧗‍♂️ Transposição Rápida", "desc": "Pule um muro baixo (60cm) e continue correndo", "xp": 190, "completed": false },
                { "id": "a41", "title": "🎮 Decisão em Fração", "desc": "Resolva 10 problemas simples em menos de 30s (cálculo, padrões)", "xp": 150, "completed": false },
                { "id": "a42", "title": "🏃‍♂️🗡️ Sombra Veloz", "desc": "Complete 2km em menos de 9 minutos", "xp": 200, "completed": false },
                { "id": "a43", "title": "🌀 Labirinto de Reflexos", "desc": "Percorra um percurso de obstáculos (móveis) em 25s", "xp": 210, "completed": false },
                { "id": "a44", "title": "⚡ Reação em Cadeia", "desc": "Reaja a 3 estímulos consecutivos (som, toque, luz) em menos de 0,5s cada", "xp": 220, "completed": false },
                { "id": "a45", "title": "🧗‍♀️ Parkour Avançado", "desc": "Pule um obstáculo de 1m e faça rolagem em queda", "xp": 240, "completed": false },
                { "id": "a46", "title": "💨 Sombra do Vento", "desc": "Sprint de 200m em menos de 27 segundos", "xp": 250, "completed": false },
                { "id": "a47", "title": "🎯 Precisão Suprema", "desc": "Acerte 5 alvos em movimento (lançar bolinha em garrafa pendurada)", "xp": 230, "completed": false },
                { "id": "a48", "title": "⚔️ Combate Rápido", "desc": "Simule 20 golpes de mão alternados (shadowboxing) em 10s", "xp": 260, "completed": false },
                { "id": "a49", "title": "🧠 Reflexo Sombrio", "desc": "Jogue 'osu!' difficulty 3 estrelas por 20 min com 90%+ acerto", "xp": 280, "completed": false },
                { "id": "a50", "title": "🌑 Ascensão da Sombra", "desc": "Complete um circuito de agilidade: 100m de escada + 5 mudanças de direção + 3 obstáculos pulados em 40s", "xp": 350, "completed": false }
            ]
        },
        {
            id: "diplomat",
            nome: "Diplomata",
            icone: "fas fa-handshake",
            corIcone: "diplomat-icon",
            corDestaque: "#e8c468",
            niveis: ["Tímido", "Comunicador", "Influente", "Diplomata", "Ícone"],
            foco: "Comunicação, influência social",
            bonus: "Confiança + Persuasão",
            missoes: [
                { "id": "d1", "title": "👋 Olá Inicial", "desc": "Dê bom dia para 3 pessoas diferentes", "xp": 25, "completed": false },
                { "id": "d2", "title": "😊 Sorriso Convidativo", "desc": "Sorria para 5 estranhos no dia", "xp": 20, "completed": false },
                { "id": "d3", "title": "👂 Escuta Ativa", "desc": "Ouça alguém por 2 minutos sem interromper", "xp": 30, "completed": false },
                { "id": "d4", "title": "📝 Elogio Sincero", "desc": "Faça um elogio genuíno para alguém", "xp": 35, "completed": false },
                { "id": "d5", "title": "🙋 Pergunte Algo", "desc": "Faça uma pergunta em uma roda de conversa", "xp": 30, "completed": false },
                { "id": "d6", "title": "📱 Mensagem Amigável", "desc": "Envie uma mensagem positiva para um contato antigo", "xp": 25, "completed": false },
                { "id": "d7", "title": "🗣️ Apresente-se", "desc": "Apresente seu nome e um hobby para uma pessoa nova", "xp": 40, "completed": false },
                { "id": "d8", "title": "🕒 Espera Ativa", "desc": "Espere sua vez de falar em uma conversa por 1 minuto sem ansiedade", "xp": 35, "completed": false },
                { "id": "d9", "title": "📞 Telefonema Curto", "desc": "Ligue para um familiar ou amigo (não texto)", "xp": 45, "completed": false },
                { "id": "d10", "title": "👀 Contato Visual", "desc": "Mantenha contato visual por 10 segundos ao falar com alguém", "xp": 40, "completed": false },
                { "id": "d11", "title": "📚 Leia em Voz Alta", "desc": "Leia uma página de livro em voz alta para si mesmo", "xp": 35, "completed": false },
                { "id": "d12", "title": "🤝 Peça Ajuda", "desc": "Peça orientação a um colega sobre algo simples", "xp": 50, "completed": false },
                { "id": "d13", "title": "📝 Diário de Conversas", "desc": "Anote 3 interações sociais do dia e o que aprendeu", "xp": 45, "completed": false },
                { "id": "d14", "title": "🛒 Comunique-se com Caixa", "desc": "Diga 'obrigado e tenha um bom dia' a um atendente", "xp": 30, "completed": false },
                { "id": "d15", "title": "🙌 Valide Sentimento", "desc": "Valide a emoção de alguém ('entendo que você está frustrado')", "xp": 55, "completed": false },
                { "id": "d16", "title": "🗣️ Opinião Pessoal", "desc": "Expresse sua opinião sobre um tópico não polêmico em grupo", "xp": 60, "completed": false },
                { "id": "d17", "title": "🧠 Pergunta Aberta", "desc": "Faça uma pergunta que comece com 'como' ou 'por que' para alguém", "xp": 65, "completed": false },
                { "id": "d18", "title": "📢 Anúncio Pequeno", "desc": "Dê um recado em voz alta para 3 pessoas", "xp": 70, "completed": false },
                { "id": "d19", "title": "🎭 Imite Tom", "desc": "Repita a última frase de alguém com o mesmo tom (prática de rapport)", "xp": 60, "completed": false },
                { "id": "d20", "title": "🔄 Feedback Suave", "desc": "Dê um feedback construtivo e positivo para alguém", "xp": 80, "completed": false },
                { "id": "d21", "title": "👥 Conversa de 5 Min", "desc": "Mantenha uma conversa de 5 minutos sobre um tema neutro", "xp": 85, "completed": false },
                { "id": "d22", "title": "🧏‍♂️ Paráfrase", "desc": "Resuma o que alguém disse e peça confirmação", "xp": 75, "completed": false },
                { "id": "d23", "title": "📸 Post Social", "desc": "Faça uma postagem positiva sobre algo que aprendeu", "xp": 65, "completed": false },
                { "id": "d24", "title": "🤝 Negociação Simples", "desc": "Negocie um pequeno favor (ex: trocar horário) com sucesso", "xp": 90, "completed": false },
                { "id": "d25", "title": "🗣️ Discurso de 1 Min", "desc": "Fale sobre um hobby por 1 minuto sem pausas constrangedoras", "xp": 95, "completed": false },
                { "id": "d26", "title": "🧑‍🏫 Ensine Algo", "desc": "Explique um conceito simples a alguém", "xp": 100, "completed": false },
                { "id": "d27", "title": "🎤 Pergunte em Público", "desc": "Faça uma pergunta durante uma reunião ou aula", "xp": 110, "completed": false },
                { "id": "d28", "title": "📞 Ligue para Serviço", "desc": "Resolva um problema por telefone (ex: agendamento)", "xp": 105, "completed": false },
                { "id": "d29", "title": "👥 Mediação", "desc": "Ajude duas pessoas a concordarem em um ponto simples", "xp": 120, "completed": false },
                { "id": "d30", "title": "🧠 Storytelling", "desc": "Conte uma história pessoal de 2 minutos com começo, meio e fim", "xp": 125, "completed": false },
                { "id": "d31", "title": "🗣️ Debate Amigável", "desc": "Defenda um ponto de vista oposto ao seu por 3 minutos", "xp": 140, "completed": false },
                { "id": "d32", "title": "👥 Liderança Mini", "desc": "Liderar uma atividade em grupo de 3 pessoas (ex: decidir local do almoço)", "xp": 150, "completed": false },
                { "id": "d33", "title": "📢 Anúncio em Público", "desc": "Faça um anúncio de 30s para um grupo de 5+ pessoas", "xp": 160, "completed": false },
                { "id": "d34", "title": "🤝 Persuasão Ética", "desc": "Convença alguém a fazer uma pequena ação positiva (ex: beber água)", "xp": 170, "completed": false },
                { "id": "d35", "title": "🎤 Apresentação de 3 Min", "desc": "Apresente um tópico preparado para 3 pessoas", "xp": 180, "completed": false },
                { "id": "d36", "title": "🧏‍♀️ Escuta Empática", "desc": "Ouça um desabafo de 5 minutos sem dar soluções, só acolhendo", "xp": 175, "completed": false },
                { "id": "d37", "title": "📝 Feedback 360", "desc": "Peça e receba feedback de um colega sobre sua comunicação", "xp": 160, "completed": false },
                { "id": "d38", "title": "👥 Rede de Contatos", "desc": "Converse com 3 pessoas novas em um evento social", "xp": 190, "completed": false },
                { "id": "d39", "title": "🗣️ Discurso Improvisado", "desc": "Fale por 2 minutos sobre um tema sorteado sem preparo", "xp": 200, "completed": false },
                { "id": "d40", "title": "🤝 Negociação Avançada", "desc": "Negocie um benefício real (desconto, troca) com sucesso", "xp": 220, "completed": false },
                { "id": "d41", "title": "🎭 Leitura de Sala", "desc": "Identifique corretamente a emoção dominante de um grupo", "xp": 190, "completed": false },
                { "id": "d42", "title": "📢 Fale em Evento", "desc": "Fale durante uma reunião ou aula com 10+ pessoas", "xp": 230, "completed": false },
                { "id": "d43", "title": "🧠 Mediação de Conflito", "desc": "Resolva um pequeno desentendimento entre duas partes", "xp": 250, "completed": false },
                { "id": "d44", "title": "👥 Liderança de Projeto", "desc": "Coordene uma tarefa simples com 3 pessoas (ex: organizar uma mesa)", "xp": 260, "completed": false },
                { "id": "d45", "title": "🎤 Workshop de 10 Min", "desc": "Ministre um micro-workshop sobre um assunto que domina", "xp": 280, "completed": false },
                { "id": "d46", "title": "🗣️ Oratória Avançada", "desc": "Discurso de 5 minutos com estrutura persuasiva (problema-solução)", "xp": 300, "completed": false },
                { "id": "d47", "title": "🤝 Networking Estratégico", "desc": "Converse com 5 pessoas influentes em um evento e troque contatos", "xp": 320, "completed": false },
                { "id": "d48", "title": "🎭 Improviso Avançado", "desc": "Participe de uma cena de improviso teatral por 3 minutos", "xp": 330, "completed": false },
                { "id": "d49", "title": "👥 Liderança de Reunião", "desc": "Conduza uma reunião de 15 minutos com pauta e tomada de decisão", "xp": 360, "completed": false },
                { "id": "d50", "title": "🌟 Ícone da Influência", "desc": "Inspire uma ação positiva em um grupo de 10+ pessoas através de um discurso", "xp": 450, "completed": false }
            ]
        },
        {
            id: "adventurer",
            nome: "Aventureiro",
            icone: "fas fa-compass",
            corIcone: "adventurer-icon",
            corDestaque: "#6fbf4c",
            niveis: ["Curioso", "Explorador", "Ousado", "Aventureiro", "Destino"],
            foco: "Oportunidades, coragem, tentativa",
            bonus: "Mais oportunidades + Criatividade",
            missoes: [
                { "id": "adv1", "title": "🌅 Novo Caminho", "desc": "Volte do trabalho/escola por uma rota diferente", "xp": 30, "completed": false },
                { "id": "adv2", "title": "🍲 Prato Inédito", "desc": "Experimente um alimento que nunca comeu", "xp": 35, "completed": false },
                { "id": "adv3", "title": "🎵 Música Desconhecida", "desc": "Ouça uma música de um gênero que não costuma ouvir", "xp": 25, "completed": false },
                { "id": "adv4", "title": "📖 Primeiro Capítulo", "desc": "Leia o primeiro capítulo de um livro de um tema novo", "xp": 40, "completed": false },
                { "id": "adv5", "title": "🧩 Hobby Rápido", "desc": "Passe 15 minutos em um hobby novo (desenho, origami, etc.)", "xp": 45, "completed": false },
                { "id": "adv6", "title": "🚶 Bairro Desconhecido", "desc": "Ande por uma rua do seu bairro que nunca explorou", "xp": 35, "completed": false },
                { "id": "adv7", "title": "📝 Lista de Desejos", "desc": "Escreva 5 coisas que gostaria de fazer mas nunca tentou", "xp": 30, "completed": false },
                { "id": "adv8", "title": "🛒 Produto Novo", "desc": "Compre um item de supermercado que nunca comprou", "xp": 30, "completed": false },
                { "id": "adv9", "title": "🗣️ Pergunte a um Estranho", "desc": "Pergunte as horas ou uma informação simples a alguém na rua", "xp": 40, "completed": false },
                { "id": "adv10", "title": "🕒 Horário Invertido", "desc": "Faça uma refeição em um horário diferente do normal", "xp": 25, "completed": false },
                { "id": "adv11", "title": "🎨 Crie Algo", "desc": "Desenhe, escreva ou construa algo com as mãos", "xp": 50, "completed": false },
                { "id": "adv12", "title": "📱 App Desconhecido", "desc": "Baixe e explore um app de um nicho que não conhece", "xp": 35, "completed": false },
                { "id": "adv13", "title": "🚫 Desafio do Não", "desc": "Diga 'sim' para algo que normalmente recusaria (desde que seguro)", "xp": 55, "completed": false },
                { "id": "adv14", "title": "🌿 Contato com Natureza", "desc": "Passe 20 minutos em um parque ou área verde nova", "xp": 45, "completed": false },
                { "id": "adv15", "title": "🍳 Receita Nova", "desc": "Cozinhe uma receita que nunca tentou", "xp": 60, "completed": false },
                { "id": "adv16", "title": "🧭 Sem GPS", "desc": "Vá a um lugar conhecido sem usar mapa ou GPS", "xp": 50, "completed": false },
                { "id": "adv17", "title": "🎲 Decisão Aleatória", "desc": "Jogue um dado para decidir o que comer no almoço", "xp": 40, "completed": false },
                { "id": "adv18", "title": "🖌️ Arte Rápida", "desc": "Faça um rabisco ou pintura em 5 minutos sem compromisso", "xp": 35, "completed": false },
                { "id": "adv19", "title": "👕 Estilo Novo", "desc": "Use uma combinação de roupas que nunca usou", "xp": 45, "completed": false },
                { "id": "adv20", "title": "🔧 Conserte Algo", "desc": "Tente consertar um objeto pequeno quebrado em vez de jogar fora", "xp": 65, "completed": false },
                { "id": "adv21", "title": "🚲 Transporte Alternativo", "desc": "Vá a algum lugar de bicicleta, patins ou a pé (se costuma ir de carro)", "xp": 70, "completed": false },
                { "id": "adv22", "title": "🧠 Aprenda uma Palavra", "desc": "Aprenda uma palavra nova em outro idioma e use-a", "xp": 40, "completed": false },
                { "id": "adv23", "title": "🏛️ Visite um Local", "desc": "Entre em um museu, galeria ou loja que nunca visitou", "xp": 75, "completed": false },
                { "id": "adv24", "title": "🎭 Teatro ou Cinema Solo", "desc": "Assista a um filme ou peça sozinho", "xp": 80, "completed": false },
                { "id": "adv25", "title": "🗣️ Converse com um Idoso", "desc": "Puxe assunto com uma pessoa idosa e ouça uma história", "xp": 85, "completed": false },
                { "id": "adv26", "title": "🧩 Quebra-Cabeça", "desc": "Monte um quebra-cabeça de 100 peças ou resolva um sudoku difícil", "xp": 70, "completed": false },
                { "id": "adv27", "title": "🎤 Karaokê", "desc": "Cante uma música em casa ou em público", "xp": 90, "completed": false },
                { "id": "adv28", "title": "🌌 Acampamento Urbano", "desc": "Durma na varanda, quintal ou sala em um 'forte' improvisado", "xp": 95, "completed": false },
                { "id": "adv29", "title": "📸 Caça ao Tesouro", "desc": "Tire fotos de 5 objetos de uma cor específica na rua", "xp": 80, "completed": false },
                { "id": "adv30", "title": "🧭 Caminhada Cega", "desc": "Escolha um ponto de ônibus/metro aleatório e explore os arredores", "xp": 100, "completed": false },
                { "id": "adv31", "title": "🍽️ Restaurante Novo", "desc": "Coma em um restaurante de culinária estrangeira que nunca provou", "xp": 110, "completed": false },
                { "id": "adv32", "title": "🎨 Oficina Criativa", "desc": "Participe de uma aula ou workshop de algo novo (cerâmica, dança)", "xp": 120, "completed": false },
                { "id": "adv33", "title": "🧗‍♀️ Atividade Radical Leve", "desc": "Faça escalada indoor, slackline ou tirolesa", "xp": 130, "completed": false },
                { "id": "adv34", "title": "🗣️ Conversa Profunda", "desc": "Converse com alguém sobre um tema pessoal que evita normalmente", "xp": 125, "completed": false },
                { "id": "adv35", "title": "🚶 Caminhada de 10km", "desc": "Caminhe 10 km em um local novo (trilha, praia, cidade)", "xp": 140, "completed": false },
                { "id": "adv36", "title": "📝 Escreva uma Carta", "desc": "Escreva uma carta à mão para alguém e envie pelos correios", "xp": 100, "completed": false },
                { "id": "adv37", "title": "🕹️ Game Jam", "desc": "Crie um pequeno jogo de tabuleiro ou regras para uma brincadeira", "xp": 130, "completed": false },
                { "id": "adv38", "title": "🎭 Improviso Social", "desc": "Finja ser um turista por 1 hora em sua cidade (pergunte informações)", "xp": 150, "completed": false },
                { "id": "adv39", "title": "🧠 Desafio de Memória", "desc": "Memorize a ordem de 10 itens em uma loja e recite depois", "xp": 110, "completed": false },
                { "id": "adv40", "title": "🌊 Esporte Aquático", "desc": "Tente stand-up paddle, caiaque ou natação em águas abertas", "xp": 160, "completed": false },
                { "id": "adv41", "title": "🏕️ Acampamento Real", "desc": "Acampe uma noite em um local selvagem ou camping", "xp": 180, "completed": false },
                { "id": "adv42", "title": "🎤 Stand-up Amador", "desc": "Conte 3 piadas ou uma história engraçada para um grupo", "xp": 170, "completed": false },
                { "id": "adv43", "title": "🚲 Viagem de Bicicleta", "desc": "Percorra 30 km de bicicleta em rota desconhecida", "xp": 190, "completed": false },
                { "id": "adv44", "title": "📹 Vídeo Diário", "desc": "Grave um vídeo de 3 minutos sobre uma aventura do dia", "xp": 150, "completed": false },
                { "id": "adv45", "title": "🧭 Geocaching", "desc": "Encontre um geocache na sua cidade", "xp": 200, "completed": false },
                { "id": "adv46", "title": "🎨 Projeto Criativo Grande", "desc": "Conclua uma obra criativa (quadro, conto, música) em uma semana", "xp": 220, "completed": false },
                { "id": "adv47", "title": "🧗‍♂️ Montanha", "desc": "Subir uma montanha ou colina com ganho de 300m de altitude", "xp": 250, "completed": false },
                { "id": "adv48", "title": "🌍 Intercâmbio Cultural", "desc": "Passe um dia inteiro falando apenas outro idioma (mesmo que básico)", "xp": 240, "completed": false },
                { "id": "adv49", "title": "🚀 Projeto Ousado", "desc": "Tire do papel um projeto pessoal adiado há mais de 6 meses", "xp": 280, "completed": false },
                { "id": "adv50", "title": "🌟 Destino Imprevisto", "desc": "Pegue um transporte público sem destino definido e desça em um lugar que pareça interessante, passe o dia explorando", "xp": 350, "completed": false }
                ]
        },
        {
            id: "sage",
            nome: "Sábio",
            icone: "fas fa-brain",
            corIcone: "sage-icon",
            corDestaque: "#5aa9dd",
            niveis: ["Curioso", "Estudante", "Aprendiz", "Sábio", "Mestre"],
            foco: "Aprendizado, raciocínio, conhecimento",
            bonus: "Pensamento crítico + Foco",
            missoes: [
                { "id": "s1", "title": "📖 5 Minutos de Leitura", "desc": "Leia por 5 minutos um livro ou artigo", "xp": 25, "completed": false },
                { "id": "s2", "title": "🧠 Palavra Nova", "desc": "Aprenda o significado de uma palavra desconhecida", "xp": 20, "completed": false },
                { "id": "s3", "title": "❓ Pergunta Curiosa", "desc": "Pesquise a resposta para uma pergunta que sempre teve", "xp": 30, "completed": false },
                { "id": "s4", "title": "📝 Anotação Simples", "desc": "Anote 3 fatos interessantes do seu dia", "xp": 25, "completed": false },
                { "id": "s5", "title": "🎧 Podcast Curto", "desc": "Ouça um episódio de podcast educacional (15 min)", "xp": 35, "completed": false },
                { "id": "s6", "title": "🧩 Quebra-cabeça Rápido", "desc": "Resolva um sudoku fácil ou palavras cruzadas", "xp": 30, "completed": false },
                { "id": "s7", "title": "📱 Vídeo Educativo", "desc": "Assista a um vídeo de ciência, história ou filosofia (10 min)", "xp": 30, "completed": false },
                { "id": "s8", "title": "🗣️ Ensine um Amigo", "desc": "Explique um fato curioso para alguém", "xp": 40, "completed": false },
                { "id": "s9", "title": "📊 Gráfico Mental", "desc": "Organize uma lista de tarefas em ordem de prioridade", "xp": 35, "completed": false },
                { "id": "s10", "title": "🔍 Verifique um Fato", "desc": "Verifique a veracidade de uma notícia ou postagem", "xp": 45, "completed": false },
                { "id": "s11", "title": "📚 Resumo de Capítulo", "desc": "Escreva um resumo de 3 linhas de um capítulo lido", "xp": 50, "completed": false },
                { "id": "s12", "title": "🧠 Mapa Mental", "desc": "Crie um mapa mental simples de um tópico", "xp": 55, "completed": false },
                { "id": "s13", "title": "🕰️ Estudo Focado", "desc": "Estude por 25 minutos sem interrupções (Pomodoro)", "xp": 60, "completed": false },
                { "id": "s14", "title": "📝 Diário de Ideias", "desc": "Escreva 5 ideias criativas sobre um problema do dia a dia", "xp": 50, "completed": false },
                { "id": "s15", "title": "🧮 Problema de Lógica", "desc": "Resolva um enigma de lógica (ex: 'quem bebe água?')", "xp": 65, "completed": false },
                { "id": "s16", "title": "📖 20 Páginas", "desc": "Leia 20 páginas de um livro de não-ficção", "xp": 70, "completed": false },
                { "id": "s17", "title": "🎓 Curso Online", "desc": "Assista a uma aula completa de um curso online (30 min)", "xp": 75, "completed": false },
                { "id": "s18", "title": "🔗 Conecte Ideias", "desc": "Relacione dois conceitos de áreas diferentes", "xp": 80, "completed": false },
                { "id": "s19", "title": "❌ Erro Produtivo", "desc": "Analise um erro que cometeu e escreva uma lição", "xp": 85, "completed": false },
                { "id": "s20", "title": "📊 Aprenda uma Fórmula", "desc": "Memorize e entenda uma fórmula útil (juros, área, etc.)", "xp": 70, "completed": false },
                { "id": "s21", "title": "🧠 Técnica Feynman", "desc": "Explique um conceito como se fosse para uma criança", "xp": 90, "completed": false },
                { "id": "s22", "title": "📑 Resumo de 1 Página", "desc": "Resuma um artigo ou vídeo longo em uma página", "xp": 95, "completed": false },
                { "id": "s23", "title": "🔎 Leitura Crítica", "desc": "Leia um texto e identifique 3 vieses ou suposições", "xp": 100, "completed": false },
                { "id": "s24", "title": "🧮 Desafio de Matemática", "desc": "Resolva 5 problemas de matemática de nível médio", "xp": 105, "completed": false },
                { "id": "s25", "title": "📚 Livro em Uma Semana", "desc": "Comprometa-se a ler um livro em 7 dias (início)", "xp": 60, "completed": false },
                { "id": "s26", "title": "🗣️ Debate Racional", "desc": "Participe de um debate usando apenas fatos e lógica", "xp": 110, "completed": false },
                { "id": "s27", "title": "🧠 Flashcards", "desc": "Crie 10 flashcards sobre um tópico e memorize", "xp": 95, "completed": false },
                { "id": "s28", "title": "📝 Ensaio Curto", "desc": "Escreva um pequeno ensaio de 300 palavras sobre um tema", "xp": 120, "completed": false },
                { "id": "s29", "title": "🎓 Curso Completo", "desc": "Complete um módulo inteiro de um curso online", "xp": 130, "completed": false },
                { "id": "s30", "title": "🔍 Pesquisa Dirigida", "desc": "Pesquise sobre um tema específico usando 3 fontes confiáveis", "xp": 140, "completed": false },
                { "id": "s31", "title": "📊 Estatística do Dia", "desc": "Encontre e interprete um dado estatístico real", "xp": 110, "completed": false },
                { "id": "s32", "title": "🧠 Problema de Programação", "desc": "Resolva um desafio de lógica de programação (pseudocódigo)", "xp": 150, "completed": false },
                { "id": "s33", "title": "📖 Livro Clássico", "desc": "Leia 50 páginas de um livro clássico de filosofia ou ciência", "xp": 160, "completed": false },
                { "id": "s34", "title": "🗂️ Organize Conhecimento", "desc": "Crie um sistema de notas (obsidian, notion) para estudos", "xp": 140, "completed": false },
                { "id": "s35", "title": "🎤 Mini-palestra", "desc": "Prepare e apresente uma palestra de 5 minutos para 2 pessoas", "xp": 170, "completed": false },
                { "id": "s36", "title": "🧮 Projeto de Dados", "desc": "Colete e analise um pequeno conjunto de dados manualmente", "xp": 180, "completed": false },
                { "id": "s37", "title": "📚 Síntese de Livros", "desc": "Compare dois livros sobre o mesmo tema e anote diferenças", "xp": 190, "completed": false },
                { "id": "s38", "title": "🔬 Experimento Caseiro", "desc": "Faça um pequeno experimento científico (ex: vulcão de bicarbonato)", "xp": 160, "completed": false },
                { "id": "s39", "title": "📝 Artigo de Opinião", "desc": "Escreva um artigo de 500 palavras com argumentação", "xp": 200, "completed": false },
                { "id": "s40", "title": "🎓 Curso Avançado", "desc": "Complete uma semana de um curso de nível universitário (gratuito)", "xp": 220, "completed": false },
                { "id": "s41", "title": "🧠 Heurísticas e Vieses", "desc": "Identifique 5 vieses cognitivos em situações reais", "xp": 210, "completed": false },
                { "id": "s42", "title": "📖 Resenha Crítica", "desc": "Escreva uma resenha crítica de um livro ou artigo", "xp": 230, "completed": false },
                { "id": "s43", "title": "🗣️ Tutor de Alguém", "desc": "Ensine um tópico para alguém até que ela entenda", "xp": 250, "completed": false },
                { "id": "s44", "title": "📊 Infográfico", "desc": "Crie um infográfico sobre um conceito complexo", "xp": 240, "completed": false },
                { "id": "s45", "title": "🧮 Resolução de Problema Real", "desc": "Aplique um método analítico para resolver um problema pessoal", "xp": 260, "completed": false },
                { "id": "s46", "title": "📚 Projeto de Pesquisa", "desc": "Conduza uma mini-pesquisa (entrevistas, questionários) sobre um tema", "xp": 280, "completed": false },
                { "id": "s47", "title": "🎓 Mentoria", "desc": "Ofereça mentoria para alguém iniciante em uma área que domina", "xp": 300, "completed": false },
                { "id": "s48", "title": "📝 Publicação", "desc": "Publique um texto (blog, LinkedIn, Medium) sobre um tema estudado", "xp": 320, "completed": false },
                { "id": "s49", "title": "🧠 Sistema de Estudos", "desc": "Desenvolva e siga um plano de estudos de 30 dias", "xp": 350, "completed": false },
                { "id": "s50", "title": "🌟 Tese do Mestre", "desc": "Elabore e defenda uma tese original sobre um tema de seu interesse (apresentação de 15 min)", "xp": 500, "completed": false }
                ]
        }
];
const API_URL = "https://2v2m6iglblt2zendwh3segryoe0hyjkq.lambda-url.sa-east-1.on.aws/";

var hero_id = undefined;
var hero_name = "";
var hero_level = 0;
var hero_xp = 0;
var hero_xp_proximo_nivel = 0;
var hero_attrs = {forca: 12, destreza: 12, inteligencia: 12, carisma: 10, sorte: 10 }
var missoes_diarias = [...POSSIVEIS_MISSOES_DIARIAS].sort(() => Math.random() - 0.5).slice(0, 5);
var missoes_aceitas = [];
var classe_atual = "warrior";
var levels_por_classe ={
    "warrior": {
        "level":0,
        "xp":0
    },
    "assassin": {
        "level":0,
        "xp":0
    },
    "diplomat": {
        "level":0,
        "xp":0
    },
    "adventurer": {
        "level":0,
        "xp":0
    },
    "sage": {
        "level":0,
        "xp":0
    },
}
var nivel_classe = ""
var dados_classe_ativa = DADOS_DE_CLASSES.find(item => item.id === classe_atual);
var hoje = new Date().toLocaleDateString('pt-BR');
var fez_tutorial = false


async function loadData(userId) {
    let data = null;

    // ☁️ tenta carregar da nuvem
    if (userId) {
        console.log("Lendo Externamente");

        try {
            const res = await fetch(`${API_URL}?hero_id=${userId}`);
            console.log(res)
            if (res.ok) {
                data = await res.json();
            } else {
                console.warn("Não encontrado na nuvem");
            }
        } catch (err) {
            console.error("Erro ao buscar na nuvem:", err);
        }
    }

    // 💾 fallback local
    if (!data) {
        return
    }

    if (data) {
        hero_id = data.hero.id;
        hero_name = data.hero.name;
        

        hero_level = data.hero.level;
        hero_xp = data.hero.xp;
        hero_attrs = data.hero.attributes;
        missoes_diarias = data.missions.daily;
        missoes_aceitas = data.missions.open;
        data_antiga = data.date;
        hero_xp_proximo_nivel = data.hero.hero_nxt_lxl_xp;
        nivel_classe = data.hero.nivel_classe;
        classe_atual = data.classe_atual;
        levels_por_classe = data.levels_por_classe;
        fez_tutorial = data.fez_tutorial;

        dados_classe_ativa = DADOS_DE_CLASSES.find(item => item.id === classe_atual);

        if (data_antiga != hoje) {
            missoes_diarias = [...POSSIVEIS_MISSOES_DIARIAS]
                .sort(() => Math.random() - 0.5)
                .slice(0, 5);
        }

        renderAllMissions();

        // 💾 atualiza cache local
        localStorage.setItem("rpg_dashboard", JSON.stringify(data));

    } else {
        renderAllMissions();
    }
}

async function saveData(userId) {
    const saveData = {
        hero: { 
            id: hero_id,
            name: hero_name, 
            level: hero_level, 
            xp: hero_xp, 
            attributes: hero_attrs, 
            hero_nxt_lxl_xp: hero_xp_proximo_nivel, 
            nivel_classe: nivel_classe 
        },
        missions: { 
            daily: missoes_diarias, 
            open: missoes_aceitas, 
            available: missoes_disponiveis() 
        },
        date: hoje,
        levels_por_classe: levels_por_classe,
        classe_atual: classe_atual,
        fez_tutorial: fez_tutorial
    };

    // 💾 salva local primeiro (sempre)
    localStorage.setItem("hero_id", hero_id);

    // ☁️ salva na nuvem
    if (userId) {
        console.log("Salvando Externamente");

        
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(saveData)
            });

            if (!res.ok) {
                console.error(res);
            }
        } catch (err) {
            console.error("Erro ao enviar:", err);
        }
    }
}

// Renderização com hierarquia visual: diárias compactas, missões principais em grid duplo
function renderAllMissions() {
    // Diárias (compacto)
    const dailyContainer = document.getElementById("dailyQuests");
    if (dailyContainer) {
        const incompleteDailies = missoes_diarias.filter(d => !d.completed);
        if (incompleteDailies.length === 0) {
            dailyContainer.innerHTML = `<div class="empty-message"><i class="fas fa-check-circle"></i> Todas as diárias cumpridas! Volte amanhã (ou recomece).</div>`;
        } else {
            dailyContainer.innerHTML = incompleteDailies.map(d => `
                <div class="mission-item">
                    <div class="mission-info">
                        <div class="mission-title">✨ ${d.title}</div>
                        <div class="mission-desc">${d.desc}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <span class="xp-small">+${d.xp} XP</span>
                        <button class="complete-mission" data-type="daily" data-id="${d.id}"><i class="fas fa-check"></i> Resolver</button>
                    </div>
                </div>
            `).join('');
        }
        // eventos para diárias
        document.querySelectorAll('#dailyQuests .complete-mission').forEach(btn => {
            btn.removeEventListener('click', resolver_missao_diaria);
            btn.addEventListener('click', resolver_missao_diaria);
        });
    }


    // Missões em aberto (grid primário)
    const openContainer = document.getElementById("openMissionsList");
    if (openContainer) {
        if (missoes_aceitas.length === 0) {
            openContainer.innerHTML = `<div class="empty-message"><i class="fas fa-hourglass-half"></i> Nenhuma missão ativa. Aceite novas aventuras!</div>`;
        } else {
            openContainer.innerHTML = missoes_aceitas.map(m => `
                <div class="mission-item ">
                    <div class="mission-info">
                        <div class="mission-title mission-${m.item_id}">⚔️ ${m.title}</div>
                        <div class="mission-desc">${m.desc}</div>
                    </div>
                    <div class="mission-actions">
                        <span style="font-size:0.7rem; background:#2b2e3d; padding:0.2rem 0.5rem; border-radius:40px;">+${m.xp} XP</span>
                        <button class="complete-mission" data-type="open" data-id="${m.id}"><i class="fas fa-feather"></i> Concluir</button>
                    </div>
                </div>
            `).join('');
        }
        document.querySelectorAll('#openMissionsList .complete-mission').forEach(btn => {
            btn.removeEventListener('click', resolver_missao);
            btn.addEventListener('click', resolver_missao);
        });
    }

    // Missões disponíveis para aceitar
    var missoes_dispo = missoes_disponiveis()
    const availableContainer = document.getElementById("availableMissionsList");
    if (availableContainer) {
        if (missoes_dispo.length === 0) {
            availableContainer.innerHTML = `<div class="empty-message"><i class="fas fa-scroll"></i> Nenhuma missão disponível no momento.</div>`;
        } else {
            availableContainer.innerHTML = missoes_dispo.map(m => `
                <div class="mission-item mission-${m.id}">
                    <div class="mission-info">
                        <div class="mission-title mission-${m.item_id}">📜 ${m.title}</div>
                        <div class="mission-desc">${m.desc}</div>
                    </div>
                    <div class="mission-actions">
                        <span style="font-size:0.7rem; background:#2b2e3d; padding:0.2rem 0.5rem; border-radius:40px;">+${m.xp} XP</span>
                        <button class="accept-mission" data-id="${m.id}"><i class="fas fa-hand-peace"></i> Aceitar</button>
                    </div>
                </div>
            `).join('');
        }
        document.querySelectorAll('#availableMissionsList .accept-mission').forEach(btn => {
            btn.removeEventListener('click', aceitar_missao);
            btn.addEventListener('click', aceitar_missao);
        });
    }
}

function missoes_disponiveis(){
    var missoes_filtradas = DADOS_DE_CLASSES.flatMap(item => {
        var missoes_permitidas = item.missoes
        var classe_item = item.id
        var corte = Math.ceil(levels_por_classe[classe_item]["level"] / 2);

        var missoes_disponiveis = missoes_permitidas.slice(corte, corte+5)

        return missoes_disponiveis
            .filter(missao => !missoes_aceitas.some(a => a.id === missao.id))
            .map(missao => ({
                ...missao,
                item_id: classe_item
            }));
    });

    console.log(missoes_filtradas)
    return missoes_filtradas
}

function createTutorial(steps) {
  let current = 0;

  // 3️⃣ Adicionar o listener de scroll — logo após document.body.append(...)
    const onScroll = () => {
        const el = document.getElementById(steps[current].id);
        if (el) posicionar(el);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

  const overlay = document.createElement('div');
  overlay.id = 'tut-overlay';
  overlay.addEventListener('click', () => {
    cutout.style.outline = '2px solid #e0bf6a';
    cutout.style.transition = 'outline 0s';
    setTimeout(() => {
        cutout.style.outline = '2px solid #c9a84c';
        cutout.style.transition = 'outline 0.4s';
    }, 150);
    });

  const cutout = document.createElement('div');
  cutout.id = 'tut-cutout';

  const box = document.createElement('div');
  box.id = 'tut-box';
  box.innerHTML = `
    <div id="tut-step"></div>
    <div id="tut-pips"></div>
    <div id="tut-msg"></div>
    <div id="tut-footer">
      <button id="tut-skip">Pular tutorial</button>
      <button id="tut-next">Continuar →</button>
    </div>
  `;

  document.body.append(overlay, cutout, box);

  document.getElementById('tut-skip').onclick = end;
  document.getElementById('tut-next').onclick = next;

  const style = document.createElement('style');
  style.textContent = `
    #tut-overlay {
      position: fixed; inset: 0;
      background: transparent;
      z-index: 9998;
      pointer-events: all;
    }
    #tut-cutout {
      position: fixed;
      border-radius: 6px;
      box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.75);
      outline: 2px solid #c9a84c;
      z-index: 9999;
      pointer-events: none;
      transition: all 0.3s ease;
    }
    #tut-box {
      position: fixed;
      z-index: 10000;
      background: #141414;
      border: 1px solid #c9a84c;
      border-radius: 12px;
      padding: 18px 20px;
      width: 280px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(201, 168, 76, 0.15);
      transition: all 0.3s ease;
      font-family: sans-serif;
    }
    #tut-step {
      font-size: 12px;
      color: #c9a84c;
      margin-bottom: 6px;
      letter-spacing: 0.05em;
      font-weight: 500;
    }
    #tut-pips {
      display: flex;
      gap: 5px;
      margin-bottom: 12px;
    }
    .tut-pip {
      height: 3px;
      flex: 1;
      border-radius: 2px;
      background: #2a2a2a;
      transition: background 0.3s;
    }
    .tut-pip.active { background: #c9a84c; }
    #tut-msg {
      font-size: 14px;
      color: #e8e0cc;
      line-height: 1.55;
      margin-bottom: 16px;
      white-space: pre-line;
    }
    #tut-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #tut-skip {
      background: none;
      border: none;
      font-size: 12px;
      color: #666;
      cursor: pointer;
    }
    #tut-skip:hover { color: #999; }
    #tut-next {
      background: #c9a84c;
      color: #0e0e0e;
      border: none;
      border-radius: 8px;
      padding: 8px 18px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: background 0.2s;
    }
    #tut-next:hover { background: #e0bf6a; }
  `;
  document.head.appendChild(style);

  show(current);

  function posicionar(el) {
    const pad = 8;
    const rect = el.getBoundingClientRect();

    cutout.style.top    = (rect.top - pad) + 'px';
    cutout.style.left   = (rect.left - pad) + 'px';
    cutout.style.width  = (rect.width + pad * 2) + 'px';
    cutout.style.height = (rect.height + pad * 2) + 'px';

    let boxTop = rect.bottom + pad + 12;
    if (boxTop + 180 > window.innerHeight) boxTop = rect.top - pad - 180;

    let boxLeft = rect.left;
    if (boxLeft + 290 > window.innerWidth) boxLeft = window.innerWidth - 298;
    if (boxLeft < 8) boxLeft = 8;

    box.style.top  = boxTop + 'px';
    box.style.left = boxLeft + 'px';
    }

    // 2️⃣ show atualizado — scrolla até o elemento e chama posicionar depois
    function show(i) {
    const step = steps[i];
    const el = document.getElementById(step.id);
    if (!el) return;

    document.getElementById('tut-step').textContent = `${i + 1} de ${steps.length}`;
    document.getElementById('tut-msg').innerHTML = step.msg;
    document.getElementById('tut-next').textContent =
        i < steps.length - 1 ? 'Continuar →' : 'Concluir';

    var url_atual = window.location.href;
    var textCont = document.getElementById('tut-next').textContent
    if (!url_atual.includes("classes") && textCont.includes("Concluir")){
        window.location.href = "classes.html"
    } 
    if (url_atual.includes("classes") && textCont.includes("Concluir")){
        fez_tutorial = true
        saveData(hero_id);
        console.log("Fez tutorial: "+ fez_tutorial)
    } 
    
    
    const pips = document.getElementById('tut-pips');
    pips.innerHTML = '';
    steps.forEach((_, k) => {
        const pip = document.createElement('div');
        pip.className = 'tut-pip' + (k <= i ? ' active' : '');
        pips.appendChild(pip);
    });

    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => posicionar(el), 350);
    }

  function next() {
    if (current < steps.length - 1) {
      current++;
      show(current);
    } else {
      end();
    }
  }

  function end() {
    window.removeEventListener('scroll', onScroll);
    overlay.remove();
    cutout.remove();
    box.remove();
    style.remove();
    }
}