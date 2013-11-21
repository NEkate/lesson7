;(function(){
    console.log('asd'.match(/[sdfa\d]/));//return a
    console.log('q1we'.match(/[wq\d]+/));//return q1w
    console.log('q1we qwqw'.match(/[wq\d]+/g));//return q1w qwqw
    console.log('q1we qwqw'.match(/[wq\d]/g));//return q 1 w q w q w
    console.log('q1we qwqw'.match(/[^wq\d]/g));//return e
    console.log('q1we qwqw^'.match(/[\^wq\d]+/g));//return q1w qwqw^
})();