let citacoes= [
    {
        citacao:'A morte não é nada para nós, pois, quando existimos, não existe a morte, e quando existe a morte, não existimos mais.',
        autor: 'Epicuro'

    },
    {
        citacao:'O homem sereno procura serenidade para si e para os outros.',
        autor: 'Epicuro'

    },
    {
        citacao:'Não há ninguém, mesmo sem cultura, que não se torne poeta quando o amor toma conta dele.',
        autor: 'Platão'

    },
    {
        citacao:'A educação tem raízes amargas, mas os seus frutos são doces.',
        autor: 'Aristóteles'

    },
    {
        citacao:'Quem comete uma injustiça é sempre mais infeliz que o injustiçado.',
        autor: 'Platão'

    },
    {
        citacao:'Vive de tal maneira que não faças nada que não possas dizer aos teus inimigos.',
        autor: 'Sêneca'

    },
    {
        citacao:'Devemos nos comportar com os nossos amigos do mesmo modo que gostaríamos que eles se comportassem conosco.',
        autor: 'Aristóteles'

    },
    {
        citacao:'Mil dias não bastam para aprender o bem; mas para aprender o mal, uma hora é demais.',
        autor: 'Confúcio'

    },
    {
        citacao:'De todos os animais selvagens, o homem jovem é o mais difícil de domar.',
        autor: 'Platão'

    },
    {
        citacao:'O homem de palavra fácil e personalidade agradável raras vezes é homem de bem.',
        autor: 'Confúcio'

    },

    
]

let scitacao = document.getElementById('citacao');
let sautor = document.getElementById('autor');
let buttongerar = document.getElementById('gerar');




buttongerar.addEventListener('click', gerarCitacao)

function gerarCitacao(){
    let citacao_random = Math.floor(Math.random() * citacoes.length)

    let nova_citacao = citacoes[citacao_random];
    
    scitacao.textContent = `"${nova_citacao.citacao}"`;
    sautor.textContent = `"${nova_citacao.autor}"`;

}
