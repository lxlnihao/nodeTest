let mysql = require('mysql')
let options = {
    host:'192.168.123.128',
    port:'3306',
    user:'root',
    password:'Wajiu123',
    database:'mysql'
}
let con = mysql.createConnection(options);
con.connect((error)=>{

    if(error){

        console.log('链接失败')
    }else{
        console.log('链接成功')
    }
})
con.query('select *from db',(err,res,fields)=>{

    console.log(res);
    console.log(fields);
    
})