describe('translate', function(){
    it('word start with A', function(){
        expect(translate('apple')).toEqual('appleway')
    });
    it('word start with E', function(){
        expect(translate('eggplant')).toEqual('eggplantway')
    });
    it('word start with I', function(){
        expect(translate('ice')).toEqual('iceway')
    });
    it('word start with consonate', function(){
        expect(translate('pear')).toEqual('earpay')
    });
    it('word start with 2 consonate', function(){
        expect(translate('truck')).toEqual('ucktray')
    });
    it('word start with 3 consonate', function(){
        expect(translate('string')).toEqual('ingstray')
    });
    it('word has capital letters', function(){
        expect(translate('APPLE')),toEqual('appleway')
    });
    // it('word has lowercase letters', function(){
    //     expect(translate('beepbeep')),toEqual('EEPBEEPBAY') 
    // })
    //this test is an example of what upperCase test should be written as
})