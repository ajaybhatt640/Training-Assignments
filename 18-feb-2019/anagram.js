//Declaring Variables
var strarray1=[100];
var strarray2=[100];
var str1='dacbe';
var str2="dcabe";
var check1='';
var check2='';

//Converting First String into Array (Let Array1)
for(var i = 0; i < str1.length; i++)
{	
    strarray1[i]=str1[i];
}

//Converting Second String into Array (Let Array2)
for(var j = 0; j < str2.length; j++){	
    strarray2[j]=str2[j];
}

//Sorting Array1 
for(var k=1;k<strarray1.length;k++)
{
    for(l=0;l<strarray1.length-l;l++)
    {
        if(strarray1[l]>strarray1[l+1])
        {
            var temp=strarray1[l];
            strarray1[l]=strarray1[l+1];
            strarray1[l+1] = temp;
        }
    }
}

//Converting Array1 back into String
for(var l=0;l<strarray1.length;l++)
{
    check1 += strarray1[l]; 
}

//Sorting Array2 
for(var k=1;k<strarray2.length;k++)
{
    for(l=0;l<strarray2.length-l;l++)
    {
        if(strarray2[l]>strarray2[l+1])
        {
            var temp=strarray2[l];
            strarray2[l]=strarray2[l+1];
            strarray2[l+1] = temp;
        }
    }
	
}
     

//Converting Array2 back into String
for(var l=0;l<strarray2.length;l++)
{
    check2 += strarray2[l]; 
}
    
console.log(check1);//Printing First String In Sorted Manner
console.log(check2);//Printing Second String In Sorted Manner

if(check1===check2)
{
    console.log("isAnagram");//Printing if string is Anagram
}

else
{
    console.log("Not Anagram");//Printing if string is not Anagram
}