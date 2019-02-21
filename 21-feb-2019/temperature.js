/*insert() - records a new temperature

get_max() - returns the highest temp we've seen so far

get_min() - returns the lowest temp we've seen so far

get_mean() - returns the mean of all temps we've seen so far

get_mode() - returns a mode of all temps we've seen so far

*/
var temperature = [
    {
        'temp' : 20
    },
    {
        'temp' : 11
    },
    {
        'temp' : 23
    },
    {
        'temp' : 34
    },
    {
        'temp' : 32
    }
]

var max=0,min=temperature[0].temp,mean=0;

function insert(newTemp)
{
    temperature.push({'temp':newTemp});
}

function get_max()
{
    for(var i=0;i<temperature.length;i++)
    {
        if(max < temperature[i].temp)
        {
            max = temperature[i].temp;
        }
    }console.log(max);
}

function get_min()
{
    for(var j=0;j<temperature.length;j++)
    {
        if(min > temperature[j].temp)
        {
            min = temperature[j].temp;
        }
    }console.log(min);
}

function get_mean()
{
    for(var k=0;k<temperature.length;k++)
    {
        mean += temperature[k].temp;
    }
    mean = mean/temperature.length;
    console.log(mean);
}

function get_mode()
{
    var mode = {};
    for(var l=0;l<temperature.length;l++)
    {
        if(mode[temperature[l].temp] == undefined)
        {
            mode[temperature[l].temp] = 1;
        }
        else
        {
            mode[temperature[l].temp] += 1;
        }    
    }
    console.log(mode);
}

insert(90);
get_max();
get_min();
get_mean();
get_mode();