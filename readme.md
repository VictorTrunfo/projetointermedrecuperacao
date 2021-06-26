O codigo faz o scrapping da pagina para receber o nome, funcao e descricao de cada classe em particular.
foi feito de maneira com que se em algum momento o jogo receba uma classe nova funcione normalmente e adicione a classe nova ao retorno,
ele recebe as classes do jogo world of warcraft da pagina https://worldofwarcraft.com/pt-br/game/classes

a separacao das informacoes foi feita utilizado 2 fors, um para rodar cada card e o outro pra recuperar as informacoes dos cards
foi ulilizado axios, express e node-html-parser para realizar o trabalho.

api/classes para receber as classes provenientes do site
filtro : classe="nome da classe"
api/info para mostrar as informacoes do autor, disciplina




Projeto upado para o github no link : https://github.com/VictorTrunfo/projetointermedrecuperacao


Relatos de Modificacoes:
Adicao do filtro
Adicao de mais um endpoint
Implementacao no Heroku no link https://projetointermed.herokuapp.com/
Reoorganizacao das rotas em pastas
