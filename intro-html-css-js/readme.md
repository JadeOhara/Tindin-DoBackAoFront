# Frontend

## HTML (Hyper Text Markup Language)

Linguagem de marcação de hypertexto. Feito com  < tags >

### Estrutura Base

Utiliza tags que abre e fecham < tag >< /tag >

< html > Elemento de maior nível dentro de todas as páginas HTML

< head > Configurações da página, informações do  meta e  charset
< /head >

< body > Engobla todos os elementos que serão mostrados na mágina
< /body >

< /html >

### Tags sem Fechamento

Algumas tags não fecham < tag />

### Outras Tags

< h1 >Cabeçalho de maior hierarquia< /h1 >
< h2 >Cabeçalho de menor hierarquia< /h2 >

< div >Devide o conteúdo em seções< /div >

< ol >Listas Ordenadas 1. 2. 3.< /ol >
< li >Cada elemento da lista< /li >
< ul >Listas Desordenadas * * *< /ul >

### Dicas

Pesquisar no google imagem por  "notes ui design" e treinar com eles pra ficar bom no front



## CSS (Cascading Style Sheet)

Usado pra estilizar elementos escritos em uma linguagem de marcação  como  HTML.

### Estrutura

seletor {
    propriedade: valorDaPropriedade;
}          - declaração -

### Seletores

Definem quais elementos um conjunto de regras CSS se aplica.

tag { 
    Estiliza todos os elementos que correspondem à < tag > 
}

#id {
   Estiliza os elementos com o atributo < id="identificadorÚnico" >
}

.classe {
    Estiliza os elementos com o atributo < class="identificadorGeral">
}

:estado {}
[]atributo {}
*total {}


# Backend

## API (Application Programming Interface)

Interface que viabiliza a comunicação entre dois sistemas ou plataformas distintas.

## Métodos de Requisição HTTP

Indicam para o servidor qual a ação que o cliente deseja realizar
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods

Toda vez que chamamos a API, retorna um Status da resposta:
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

C(reate)
R(ead)
U(pdate)
D(elete)