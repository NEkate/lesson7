;(function(){
    console.log('\nasd'.match(/^./));//строка должна начинаться со следующего правила // null
    console.log('\nasd\ndfg\n1sdf'.match(/^\d/m));// \d -строка должна начинаться с числа return null
    console.log('asd'.match(/^\d/) );// null
    console.log('1asd'.match(/^\d/) );// 1
    console.log('asd\n1sdfd'.match(/^\d/) );// null
    console.log('asd\n1sdfd'.match(/^\d/m) );// 1

})();