db.dropDatabase();

db.brand.save(
    [
        {number:'1', name:'Rapala'},
        {number:'2', name:'Kuusamo'},
        {number:'3', name:'Nils Master'},
        {number:'4', name:'Finlandia-Uistin'}
    ]
);

db.method.save(
    [
        {number:'1', name:'Spinning'},
        {number:'2', name:'Jigging'},
        {number:'3', name:'Fly-fishing'},
        {number:'4', name:'Angling'},
        {number:'5', name:'Ice-fishing'}
    ]
);