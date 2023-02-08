describe('Test Suite', () => {
    it('test 1', () => {
        console.log('first test'); // Първи тест минава
    });

    it('test 2', () => {
        throw new Error('it didn\'t work'); //Втори тест - хвърля грешка
    });
});
