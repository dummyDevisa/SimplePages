// fingerprint.js

// Função para gerar o browser fingerprint usando ClientJS
async function getBrowserFingerprint() {
    // Carrega o ClientJS
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/clientjs@0.1.11/dist/client.min.js';
    document.head.appendChild(script);

    return new Promise((resolve) => {
        script.onload = function() {
            var client = new ClientJS();
            var fingerprint = client.getFingerprint();
            resolve(fingerprint); // Retorna o fingerprint
        };
    });
}

// Executa a função e expõe o fingerprint como JSON
getBrowserFingerprint().then(fingerprint => {
    // Exibe o fingerprint no console para depuração
    console.log(fingerprint);

    // Retorna o fingerprint como JSON
    document.body.innerHTML = JSON.stringify({ fingerprint: fingerprint });
});
