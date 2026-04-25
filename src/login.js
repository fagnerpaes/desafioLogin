/*
**Pré-requisitos:**
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

**Desafio:**
Construa uma função de para realizar login. 
Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso 
caso exista um usuário com email e senha iguais aos informados. 
A função deve dizer que as credenciais expiraram caso expirado for true. 
A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou 
a senha esteja incorreta para aquele email.

*/

const usuarios = [
  {
    id: 1,
    nome: "João",
    email: "joao@pgats.com",
    senha: "senhaCerta123",
    expirado: false
  },
  {
    id: 2,
    nome: "Maria",
    email: "maria@pgats.com",
    senha: "outraSenha123",
    expirado: true
  },
  {
    id: 3,
    nome: "Pedro",
    email: "pedro@pgats.com",
    senha: "senha3",
    expirado: false
  }
];

export function login(email, senha) {
  
  if (email == null || senha == null) {
    return "Credenciais incorretas";
  }

  for(let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email == email) {
      if (usuarios[i].senha == senha) {
        if (usuarios[i].expirado) {
          return "Credenciais expiradas";
        }
        return "Login realizado com sucesso";
      } else {
        return "Credenciais incorretas";
      }
    }
  }
  return "Credenciais incorretas";
}