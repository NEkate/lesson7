;(function(){
    console.log('asd fdghf qwe'.match(/asd|qwe/));//asd
    console.log('asd fdghf qwe'.match(/asd|qwe/g));//asd qwe
    console.log('asd fdghf 1qwe'.match(/\d(asd|qwe)/g));//1qwe
    console.log('asd fdghf qwe'.match(/asd|qwe|fd/));//asd
    console.log('asd fdghf qwe'.match(/asd|qwe|fd/g));//asd fd qwe
})();