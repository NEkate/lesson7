;(function(){
    console.log('asd'.match(/.*/));//asd
    console.log(''.match(/.*/));//null
    console.log('asd'.match(/./g));//'a'
    console.log('asd'.match(/.+/g));//'asd'
    console.log('asd\nasdasd'.match(/.+/g));//['asd', 'asdasd']
    console.log(''.match(/.+/g));//null
    console.log(''.match(/.?/g));//''
    console.log('asd'.match(/.?/));//a

})();