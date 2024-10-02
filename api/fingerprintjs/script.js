(async () => {
    // Inicializa o FingerprintJS
    const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
        .then(FingerprintJS => FingerprintJS.load());

    try {
        const fp = await fpPromise;
        const result = await fp.get();
        const visitorId = result.visitorId;

        // Cria um objeto JSON
        const jsonData = { visitorId: visitorId };
        const jsonString = JSON.stringify(jsonData, null, 2); // Formata o JSON

        // Cria um Blob com os dados JSON
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Cria um link temporário para o download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'fingerprint.json'; // Nome do arquivo a ser baixado
        document.body.appendChild(a);
        a.click(); // Inicia o download
        document.body.removeChild(a); // Remove o link após o download
        URL.revokeObjectURL(url); // Libera o URL criado
    } catch (err) {
        console.error(err);
        const errorResponse = JSON.stringify({ error: err.message });
        const blob = new Blob([errorResponse], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'error.json'; // Nome do arquivo de erro a ser baixado
        document.body.appendChild(a);
        a.click(); // Inicia o download do erro
        document.body.removeChild(a); // Remove o link após o download
        URL.revokeObjectURL(url); // Libera o URL criado
    }
})();
