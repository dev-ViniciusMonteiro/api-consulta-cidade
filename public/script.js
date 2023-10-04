const form = document.querySelector('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const cep = form.querySelector('input[name="cep"]').value;
  resultDiv.innerHTML = '';

  try {
    const response = await fetch('/consulta-cep', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `cep=${cep}`,
    });

    if (response.ok) {
      const data = await response.json();
      const ufAPI = data.uf;
      //const minas = "MG";

      const ufArquivo = await obterUfDoArquivo('uf.json');

      if (ufAPI === ufArquivo) {
        resultDiv.textContent = 'CEP de MG';
      } else {
        resultDiv.textContent = 'Digite um CEP de MG';
      }
    } else {
      resultDiv.textContent = 'Erro ao consultar o CEP.';
    }
  } catch (error) {
    console.error('Erro ao consultar o CEP:', error);
    resultDiv.textContent = 'Erro ao consultar o CEP.';
  }
});

// Funçao para obter UF 
async function obterUfDoArquivo() {
  try {
    const response = await fetch('uf.json');
    if (response.ok) {
      const data = await response.json();
      return data.uf;
    } else {
      throw new Error('Erro ao obter a UF do arquivo.');
    }
  } catch (error) {
    console.error('Erro ao obter a UF do arquivo:', error);
    return null;
  }
}
