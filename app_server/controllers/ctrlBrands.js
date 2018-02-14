
const winnerlist = function(req, res){
    res.render('brands',{
        brands:
            [
                {number:'1', name:'Rapala'},
                {number:'2', name:'Kuusamo'},
                {number:'3', name:'Nils Master'},
                {number:'4', name:'Finlandia-Uistin'}
            ]});
};

module.exports = {
    winnerlist
};