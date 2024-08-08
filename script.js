document.getElementById('calculationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const montantDevis = parseFloat(document.getElementById('montantDevis').value) || 0;
    const superficieToiture = parseFloat(document.getElementById('superficieToiture').value) || 0;
    const superficieMurs = parseFloat(document.getElementById('superficieMurs').value) || 0;
    const superficieSol = parseFloat(document.getElementById('superficieSol').value) || 0;
    const autres = parseFloat(document.getElementById('autres').value) || 0;
    const remboursementM2 = parseFloat(document.getElementById('remboursementM2').value) || 0;

    const nombreM2 = superficieToiture + superficieMurs + superficieSol + autres;

    if (nombreM2 <= 0 || remboursementM2 <= 0) {
        alert("Le nombre de m² total et le remboursement par m² doivent être supérieurs à zéro.");
        return;
    }

    let devisFinal = 0;
    const montantParM2 = montantDevis / nombreM2;

    if (montantParM2 > remboursementM2) {
        const difference = montantParM2 - remboursementM2;
        devisFinal = difference * nombreM2;
    } else {
        devisFinal = montantDevis * 0.9;
    }

    document.getElementById('devisFinal').textContent = devisFinal.toFixed(2);
});
