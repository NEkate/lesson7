;(function(){
    console.log('13px solid #fff'.match(/\d+px/));//13px
    console.log('13px solid #fff'.match(/(\d+)px/));//13px 13
})();