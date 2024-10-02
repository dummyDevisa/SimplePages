document.getElementById('get-fingerprint').addEventListener('click', () => {
    const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
        .then(FingerprintJS => FingerprintJS.load());

    fpPromise
        .then(fp => fp.get())
        .then(result => {
            const visitorId = result.visitorId;
            console.log(visitorId);
            document.getElementById('result').textContent = JSON.stringify({ visitorId: visitorId }, null, 2);
        })
        .catch(err => {
            console.error(err);
            document.getElementById('result').textContent = JSON.stringify({ error: err.message }, null, 2);
        });
});
