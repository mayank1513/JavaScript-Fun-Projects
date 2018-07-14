function computeChange(e){
    e.preventDefault();
    var bills = [50, 20, 10, 5, 2, 1];
    var coins = [.5, .2, .1, .05, .02, .01];
    var to_return = [];
    var toreturn = parseFloat(document.getElementById('paid').value)
            - parseFloat(document.getElementById('due').value);
    var temp = toreturn, i = 0, x = 0;
    if(temp == 0)
        alert('Thank you!!\n You have paid the exact amount due');
    else if(temp<0){
        alert('Pay ' + -temp + ' sgd more');
    }
    else{
        while(temp>=1){
            if(x = Math.floor(temp/bills[i])){
                to_return.push(x + ' ' + '<b>'+ bills[i] + (x>1?'$ bills,':'$ bill,' + '</b>'))
                temp -= x*bills[i];
                temp = Math.round(temp*100)/100
            }
            i++
        }
        i = 0
        while(temp>0){
            if(x = Math.floor(temp/coins[i])){
                to_return.push(x + ' ' + '<b>' + 100*coins[i] + (x>1?'cent coins,':'&cent; coin,') + '</b>')
                temp -= x*coins[i]
                temp = Math.round(temp*100)/100
            }
            i++
        }
    }
    to_return[to_return.length-1] = 'and ' + to_return[to_return.length-1]
    console.log(to_return);
    document.getElementById('show_return').innerHTML=''; 
    var p = document.createElement('p')
    p.innerHTML = '<b>Please return ...  </b>'
    document.getElementById('show_return').appendChild(p); 
    for(var i = 0; i<to_return.length; i++){
        p = document.createElement('p')
        p.innerHTML = to_return[i];
        document.getElementById('show_return').appendChild(p);
    }
}

document.getElementById('logo').style.height = window.innerHeight*0.7 + 'px';
document.querySelector('form').style.marginTop = -(35 + window.innerHeight*.15)+'px';

window.onresize = function(){
    document.getElementById('logo').style.height = window.innerHeight*0.7 + 'px';
    document.querySelector('form').style.marginTop = -(35 + window.innerHeight*.15)+'px';
}
