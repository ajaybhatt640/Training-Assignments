function check_datatype(data) {
    if(data=== null) {
        console.log('Type : NULL' + "     " + 'Value: ' + data)
    } 
    else if(data && typeof(data) === 'object' && data.constructor === Object){
        console.log('Type : Object' + "     " + 'Value: ' + data)
    }
    else if(typeof(data)==='object'&& typeof(data[0])==='object')
    {
        console.log("Type : Array of objects");
        data.map((x,i)=>{
            console.log(x)
        })
    }
    else if(typeof(data) === 'undefined') {
        console.log('Type : undefined')
    }
    else  if(typeof(data)==='object'&& typeof(data[0])!=='object' )
    {
        console.log("Type : Array");
        data.map((x,i)=>{
            console.log(x)
        })
       
    }
    else if(typeof(data) === 'string' || data instanceof String) {
        console.log('Type : String' + "     " + 'Value: ' + data)
    }
    else if(typeof(data) === 'number' && isFinite(data)) {
        console.log('Type : Number' + "     " + 'Value: ' + data)
    }
    else if(data==true){
        console.log('Type : NaN')
    }
    else if(typeof(data)==='boolean')

    {
         console.log('Type : boolean' + "     " + 'Value: ' + data)
    }
}
   
var arr=[18,7,3,12];
check_datatype(arr);
check_datatype("characterArray");
check_datatype(null);
check_datatype(20);
var b=[{'id1':101},{'id2':102}];
check_datatype(b);
check_datatype({'id':10});
check_datatype(1-arr)
check_datatype(true)
