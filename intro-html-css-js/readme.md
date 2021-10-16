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

## Typescript

Forma tipada do javascript.

Vem com documentação própria inclusa.

Previne erros no código.

## Angular

Framework pra construção da interface de aplicações utilizando html, css, js, typescript ou dart. Criado por desenvolvedores do Google. Criar SPA - single page application

### Blocos principais

* Componentes - encapsular comportamentos, encapsular outros componentes pra serem reaproveitados. Um componente é  um tipo de classe

@Component ({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    title: string = 'Do Back  ao Front- Tindin'
}

  
* Serviços - concentrar as regras de negócio da aplicação, cada service pode ser usado  por um ou mais  componentes

* Roteamento - trocar as páginas quando solicitado sem dar reload no site

* Diretivas - marcadores no dom que comunicam com o angular
  - de atributo: alteram aparência e comportamento de um elemento,  componente ou outra diretiva
  - estruturais: adicionar ou remover elementos do  dom

* Template
* Metadata
* Data Binding
* Injeção de Dependência

* Lifecycle  Hooks - métodos hooks são executados sempre que há uma mudança dentro do componente

