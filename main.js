;(function(){
    console.log('asd1asd'.match(/\d$/) );// null
    console.log('asd1'.match(/\d$/) );// 1
    console.log('asd1\nsdfd'.match(/\d$/) );// null
    console.log('asd1\n1sdfd'.match(/\d$/m) );// 1

})();