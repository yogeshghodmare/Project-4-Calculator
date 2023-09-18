var display=document.getElementById("display1");
var expression="";
var result=0.0;
function getValue(input)
{
    var input=input;
    expression+=input;
    display.innerHTML=expression;
    
}

function deleteDigit()
{
    expression=expression.slice(0,-1);
    display.innerHTML=expression;
    
}

function calculate()
{
    
    let digit=0;
    let symbol="";
    for(var a=0;a<expression.length;a++)
    {
         if(expression[a]=='-')
        {
            result=digit;
            symbol='-';
        }
        else if(expression[a]=='x')
        {
            result=digit;
            symbol='*';
        }
        else if(expression[a]=='+')
        {
            result=digit;
            symbol='+';
        }
        else if(expression[a]=='/')
        {
            result=digit;
            symbol='/';
        }
        else{
            digit=parseInt(expression[a]);
            if(symbol=='+' || symbol=='-' ||symbol=='*' ||symbol=='/')
            {
                
                if(symbol=='+')
                {   
                    result=result+digit;
                }
                else if(symbol=='-')
                {
                    result=result-digit;
                }
                else if(symbol=='*')
                {
                    result=result*digit;
                }
                else if(symbol=='/')
                {
                    result=result/digit;
                }
                symbol="";
            }

        }
    }
    expression=result.toString();
    display.innerHTML=result;
    

}

function reset()
{
    expression="";
    display.innerHTML=expression;
    result=0;
}

