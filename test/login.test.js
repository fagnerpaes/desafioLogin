import { login } from '../src/login.js';
import assert from 'assert';

describe('Teste de Login', function() {
    it('Realizar login com sucesso', function() { 
        //Arrange (o que eu preciso para realizar o teste?)
        const email = "joao@pgats.com";
        const senha = "senhaCerta123";
        const resultadoEsperado = "Login realizado com sucesso";

        //Act (ao que eu vou fazer para realizar o teste?) 
        const resultado = login(email, senha);

        //Assert (O que eu espero como resultado?)
        assert.equal(resultado, resultadoEsperado);
    });

    it('Tentar realizar login com credenciais expiradas', function() {
        //Arrange (o que eu preciso para realizar o teste?)
        const email = "maria@pgats.com";
        const senha = "outraSenha123";
        const resultadoEsperado = "Credenciais expiradas";

        //Act (ao que eu vou fazer para realizar o teste?) 
        const resultado = login(email, senha);

        //Assert (O que eu espero como resultado?)
        assert.equal(resultado, resultadoEsperado);
    });

    it('Tentar realizar login com credenciais não encontradas', function() {
        //Arrange (o que eu preciso para realizar o teste?)
        const email = "email@naoexiste.com";
        const senha = "senhaIncorreta";
        const resultadoEsperado = "Credenciais incorretas";

        //Act (ao que eu vou fazer para realizar o teste?) 
        const resultado = login(email, senha);

        //Assert (O que eu espero como resultado?)
        assert.equal(resultado, resultadoEsperado);
    });

    it('Tentar realizar login com senha incorreta', function() {
        //Arrange (o que eu preciso para realizar o teste?)
        const email = "pedro@pgats.com";
        const senha = "senhaIncorreta";
        const resultadoEsperado = "Credenciais incorretas";

        //Act (ao que eu vou fazer para realizar o teste?) 
        const resultado = login(email, senha);

        //Assert (O que eu espero como resultado?)
        assert.equal(resultado, resultadoEsperado);
    });
});