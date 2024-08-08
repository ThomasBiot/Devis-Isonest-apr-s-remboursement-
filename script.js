document.getElementById('calculationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs des champs
    const montantDevis = parseFloat(document.getElementById('montantDevis').value) || 0;

    const superficieToiture = parseFloat(document.getElementById('superficieToiture').value) || 0;
    const remboursementToitureM2 = parseFloat(document.getElementById('remboursementToitureM2').value) || 0;

    const superficieMurs = parseFloat(document.getElementById('superficieMurs').value) || 0;
    const remboursementMursM2 = parseFloat(document.getElementById('remboursementMursM2').value) || 0;

    const superficieSol = parseFloat(document.getElementById('superficieSol').value) || 0;
    const remboursementSolM2 = parseFloat(document.getElementById('remboursementSolM2').value) || 0;

    const autres = parseFloat(document.getElementById('autres').value) || 0;
    const remboursementAutresM2 = parseFloat(document.getElementById('remboursementAutresM2').value) || 0;

    // Calcul des remboursements pour chaque section
    const montantToiture = superficieToiture * remboursementToitureM2;
    const montantMurs = superficieMurs * remboursementMursM2;
    const montantSol = superficieSol * remboursementSolM2;
    const montantAutres = autres * remboursementAutresM2;

    // Calcul du remboursement total
    const montantTotalRemboursement = montantToiture + montantMurs + montantSol + montantAutres;

    // Calcul du devis final
    let devisFinal = montantDevis - montantTotalRemboursement;

    // Si le remboursement total dépasse le montant du devis initial, appliquer les 90%
    if (montantTotalRemboursement > montantDevis) {
        devisFinal = montantDevis * 0.9;
    }

    // Affichage du devis final
    document.getElementById('devisFinal').textContent = devisFinal.toFixed(2);
});
