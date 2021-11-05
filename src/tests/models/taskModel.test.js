const { expect } = require('chai');

const taskModel = {
  create: () => String,
};

describe('Insere uma tarefa no BD', () => {
  const taskPayload = String;

  describe('quando é inserida com sucesso', () => {
    it('retorna uma string', () => {
      const res = await.taskModel.create(taskPayload);

      expect(res).to.be.a('string');
    });
  });
});
