function calcularTotal() {
    let aquaJuan = parseInt(document.getElementById('aquaJuan').value, 10);
    let aquaPedro = parseInt(document.getElementById('aquaPedro').value, 10);
    let emocionJuan = parseInt(document.getElementById('emocionJuan').value, 10);
    let emocionPedro = parseInt(document.getElementById('emocionPedro').value, 10);
    let alegriaJuan = parseInt(document.getElementById('alegriaJuan').value, 10);
    let alegriaPedro = parseInt(document.getElementById('alegriaPedro').value, 10);
    let frescuraJuan = parseInt(document.getElementById('frescuraJuan').value, 10);
    let frescuraPedro = parseInt(document.getElementById('frescuraPedro').value, 10);

    let totalJuan = aquaJuan * 200 + emocionJuan * 180 + alegriaJuan * 160 + frescuraJuan * 150;
    let totalPedro = aquaPedro * 200 + emocionPedro * 180 + alegriaPedro * 160 + frescuraPedro * 150;

    if (isNaN(aquaJuan) || isNaN(aquaPedro) || isNaN(emocionJuan) || isNaN(emocionPedro) ||
        isNaN(alegriaJuan) || isNaN(alegriaPedro) || isNaN(frescuraJuan) || isNaN(frescuraPedro)) {
        alert('ERROR: Por favor, ingrese un NUMERO.');
        return;
    }

    document.getElementById('totalJuan').textContent = `Juan: ${totalJuan} USD`;
    document.getElementById('totalPedro').textContent = `Pedro: ${totalPedro} USD`;
}

function calcularTotalAmbosVendedores() {
    let totalJuan = parseInt(document.getElementById('totalJuan').textContent.match(/\d+/));
    let totalPedro = parseInt(document.getElementById('totalPedro').textContent.match(/\d+/));
    let totalAmbosVendedores = totalJuan + totalPedro;

    document.getElementById('totalAmbosVendedores').textContent = `Total Ambos Vendedores: ${totalAmbosVendedores} USD`;
}
