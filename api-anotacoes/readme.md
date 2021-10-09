#  Passo a Passo


## Terminal

Criar o arquivo package json para instalar as dependências
~~~Terminal
npm init -y
~~~

Instalar o express, framework do node.js para construir aplicações web
~~~Terminal
npm install express --save
~~~

Instalar o nodemon para iniciar o servidor automaticamente
~~~Terminal
npm install --save-dev nodemon
nodemon app.js
~~~

Instalar o uuid para criar um identificador únido dos registros
~~~Terminal
npm install uuid
~~~

Instalar o cors para tratar erros com HTML
~~~Terminal
npm install cors
~~~

Adicionar jquery pra usar ajax, antes de fechar o body
~~~index.html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
~~~