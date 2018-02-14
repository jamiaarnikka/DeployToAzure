
const winnerlist = function(req, res){
    res.render('methods',{
        methods:
        [
            {number:'1', name:'Spinning'},
            {number:'2', name:'Jigging'},
            {number:'3', name:'Fly-fishing'},
            {number:'4', name:'Angling'},
            {number:'5', name:'Ice-fishing'}
        ]});
};

module.exports = {
    winnerlist
};