export default function initFetchBitcoin(){

}

const btnBitcoin = document.querySelector('.btc-preco');

async function puxaBitcoin () {
    try {
        const bitResponse = await fetch('https://blockchain.info/ticker');
        const bitJSON = await bitResponse.json();
        const bitPreco = (1000 / bitJSON.BRL.buy).toFixed(4);
        btnBitcoin.innerHTML = bitPreco;
    }
    catch(erro) {
        console.log(erro)
    }
}

puxaBitcoin();
// https://blockchain.info/ticker