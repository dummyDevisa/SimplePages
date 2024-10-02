(async () => {
    // Inicializa o FingerprintJS
    const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
        .then(FingerprintJS => FingerprintJS.load());

    try {
        const fp = await fpPromise;
        const result = await fp.get();
        const visitorId = result.visitorId;

        // Cria o JSON e imprime no console
        const jsonResponse = JSON.stringify({ visitorId: visitorId });
        console.log(jsonResponse);

        // Opcional: para retornar como resposta em uma página, você poderia usar algo como:
        document.body.innerText = jsonResponse; // Exibe o JSON na página
    } catch (err) {
        console.error(err);
        const errorResponse = JSON.stringify({ error: err.message });
        console.log(errorResponse);
        document.body.innerText = errorResponse; // Exibe o erro na página
    }
})();
