var arr = [
    {
      "type": 'A',
      "percentage": 5,
    },
    {
      "type": 'B',
      "percentage": 9,
    },
    {
      "type": 'c',
      "percentage": 7,
    },
    {
      "type": 'D',
      "percentage": 12,
    },
    {
      "type": 'E',
      "percentage": 6,
    }
]

var title,amount,amountdeducted,netamount;

function calc(title,amount){
    for(let i=0;i<arr.length;i++)
    {
        if(title==arr[i].type)
        {
            amountdeducted = (arr[i].percentage * (amount/100)); 
            netamount = amount - amountdeducted;    
            console.log('Type : ' + arr[i].type + '\n' + 'Amount : ' + amount + '\n' + 'Percentage : ' + arr[i].percentage + '\n' + 'Amount Deducted : ' + amountdeducted + '\n' + 'Net Amount : ' + netamount);
        }
    }
}
calc('A',200);