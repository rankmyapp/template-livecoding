## Live Coding Test

- Será usada uma API publica no teste (https://rickandmortyapi.com/documentation/#rest)
- O candidato precisará criar uma rota que pega x characters (parametrizável por um parametro na qury string) e depois insere no banco de dados. Se bater mais de uma vez na rota a aplicação não pode inserir characters repetidos
- Precisará pegar apenas os campos: id, name, status, species, type, gender
- Precisar colocar o timestamp automático (createdAt, updatedAt)
- Deve criar uma rota que lista os characters salvos no banco, com opção de fazer filtragem pelo type, gender e status. Deve ter também opção de paginar o resultado dessa busca (recebendo os parametros page e pageSize).
- Deve criar uma rota para deletar um character pelo id
