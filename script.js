function calcularComplexidade() {
    const niveis = {
        "baixo risco": 1,
        "médio risco": 2,
        "alto risco": 3,
        "menor de 1 ano": 1,
        "entre 1 e 2 anos": 2,
        "acima de 2 anos": 3,
        "observacional": 1,
        "de intervenção": 2,
        "não se aplica": 0,
        "oral": 1,
        "subcutâneo/intramuscular": 2,
        "endovenoso ou auto administração": 3,
        "somente no centro (coleta de sangue, swab)": 1,
        "ecg, laboratório local (pasteur, clementino)": 2,
        "exames de imagem, biópsia": 3,
        "até 10 páginas": 1,
        "de 10 a 20 páginas": 2,
        "acima de 20 páginas": 3,
        "até 30 min": 1,
        "de 30 min a 1h": 2,
        "acima de 1h": 3,
        "único / semestral": 1,
        "mensal / trimestral": 2,
        "semanal": 3,
        "participante": 2,
        "coordenador": 3,
        "muito disponível (atende demandas no prazo)": 1,
        "moderadamente disponível": 2,
        "pouco disponível": 3
    };

    function getNivel(value) {
        return niveis[value.toLowerCase()] || 0;
    }

    const pesoPacientes = 3;
    const pesoPesquisador = 3;
    const pesoOutros = 1;

    const perfilPaciente = getNivel(document.getElementById('perfilPaciente').value);
    const duracaoEnsaio = getNivel(document.getElementById('duracaoEnsaio').value);
    const delineamentoEnsaio = getNivel(document.getElementById('delineamentoEnsaio').value);
    const viaAdministracao = getNivel(document.getElementById('viaAdministracao').value);
    const complexidadeProcedimentos = getNivel(document.getElementById('complexidadeProcedimentos').value);
    const elaboracaoTemplates = getNivel(document.getElementById('elaboracaoTemplates').value);
    const tempoPreenchimentoCrf = getNivel(document.getElementById('tempoPreenchimentoCrf').value);
    const periodicidadePreenchimentoCrf = getNivel(document.getElementById('periodicidadePreenchimentoCrf').value);
    const tempoResolucaoQueries = getNivel(document.getElementById('tempoResolucaoQueries').value);
    const statusCentroPesquisa = getNivel(document.getElementById('statusCentroPesquisa').value);
    const comprometimentoPi = getNivel(document.getElementById('comprometimentoPi').value);

    const pontos =
        perfilPaciente * pesoPacientes +
        duracaoEnsaio * pesoOutros +
        delineamentoEnsaio * pesoOutros +
        viaAdministracao * pesoOutros +
        complexidadeProcedimentos * pesoOutros +
        elaboracaoTemplates * pesoOutros +
        tempoPreenchimentoCrf * pesoOutros +
        periodicidadePreenchimentoCrf * pesoOutros +
        tempoResolucaoQueries * pesoOutros +
        statusCentroPesquisa * pesoOutros +
        comprometimentoPi * pesoPesquisador;

    let complexidade;
    if (pontos <= 15) {
        complexidade = "Fácil";
    } else if (pontos <= 30) {
        complexidade = "Médio";
    } else {
        complexidade = "Difícil";
    }

    document.getElementById('resultado').innerText = `Nível de complexidade: ${complexidade}`;
}

document.getElementById('complexidadeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularComplexidade();
});

