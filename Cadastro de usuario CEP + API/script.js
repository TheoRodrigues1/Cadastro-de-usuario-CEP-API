
document.getElementById("cep").addEventListener("blur", (evento) =>{
    const elemento = evento.target;
    const cepInformado = elemento.value;

    
    if(!(cepInformado.length === 8))
        return;


    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            
            if(!data.error){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }else(
                alert("CEP não encontrado.")
            )
        })
        .catch(error => console.error("Erro ao bucar CEP: ",error));

})


        const campos = ["cep", "logradouro", "bairro", "cidade", "estado"];

        
        window.addEventListener("DOMContentLoaded", () => {
            campos.forEach(id => {
                const valorSalvo = localStorage.getItem(id);
                if (valorSalvo) {
                    document.getElementById(id).value = valorSalvo;
                }
            });
        });

        
        campos.forEach(id => {
            document.getElementById(id).addEventListener("input", (e) => {
                localStorage.setItem(id, e.target.value);
            });
        });

        
        document.getElementById("cep").addEventListener("blur", (evento) => {
            const elemento = evento.target;
            const cepInformado = elemento.value;

            if (cepInformado.length !== 8)
                return;

            fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        document.getElementById('logradouro').value = data.logradouro;
                        document.getElementById('bairro').value = data.bairro;
                        document.getElementById('cidade').value = data.localidade;
                        document.getElementById('estado').value = data.uf;

                       
                        localStorage.setItem('logradouro', data.logradouro);
                        localStorage.setItem('bairro', data.bairro);
                        localStorage.setItem('cidade', data.localidade);
                        localStorage.setItem('estado', data.uf);
                    } else {
                        alert("CEP não encontrado.");
                    }
                })
                .catch(error => console.error("Erro ao buscar CEP: ", error));
        });