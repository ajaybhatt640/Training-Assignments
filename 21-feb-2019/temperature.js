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

//function to push new object into array
function insert(newTemp)
{
    temperature.push({'temp':newTemp});
}

//function to find maximum temperature
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

//function to find minimum temperature
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

//function to find mean of all temperatures
function get_mean()
{
    for(var k=0;k<temperature.length;k++)
    {
        mean += temperature[k].temp;
    }
    mean = mean/temperature.length;
    console.log(mean);
}

//function to find mode
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

insert(90);//inserting new temperature
get_max();
get_min();
get_mean();
get_mode();
