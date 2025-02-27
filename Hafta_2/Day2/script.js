function collatzSequenceLength(n, cache) {
    let original = n; // başlangıç değerini kaydediyor
    let length = 0; // adım sayıını sıfırlıyor
    while (n !== 1 && !cache[n]) {
        length++;
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }
    cache[original] = length + (cache[n] || 0);
    return cache[original];
}

function longestCollatz(limit) {
    let maxLength = 0; // Şimdiye kadar bulunan en uzun dizinin uzunluğunu tutar.
    let number = 0; // En uzun diziyi başlatan sayıyı tutar.
    let cache = {}; // daha önceden hesaplanan sonuçları saklayan nesne oluşturur

    for (let i = 1; i <= limit; i++) {
        let length = collatzSequenceLength(i, cache);
        if (length > maxLength) {
            maxLength = length;
            number = i;
        }
    }
    return { number, maxLength };
}
const result = longestCollatz(1000000);
console.log(`En uzun Diziyi veren sayı : ${result.number}, Adım sayısı : ${result.maxLength}`);