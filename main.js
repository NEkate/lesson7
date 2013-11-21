;(function(){
    console.log('asd1\nasd'.match(/\d\n./) );// 1\na
    console.log('asd113241\nasd'.match(/\d+\n./) );// 113241\na
    console.log('12345'.match(/\d{2,3}/) );// 123
    console.log('12345'.match(/\d{2}/) );// 12
    console.log('12345'.match(/\d{2}/g) );// 12 34

})();