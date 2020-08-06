import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchDistro() {

    async function fetchDistro (url) {
        try{     
            const distroResponse = await fetch(url);
            const distroJSON = await distroResponse.json();
            const numeroGrid = document.querySelector('.numeros-grid');
            distroJSON.forEach(distro =>{
                const divDistro = createDistro(distro);
                numeroGrid.appendChild(divDistro);
            });
            initAnimaNumeros();
        }
        catch (erro) {
            console.log(erro)
        }
    }
    
    function createDistro(distro) {
        const div = document.createElement('div');
        div.classList.add('numero-usuario');
        div.innerHTML = `<h3>${distro.name}</h3><span data-numero>${distro.total}</span>`;
        return div;
    
    }
    
    fetchDistro('./distrosapi.json');
}

