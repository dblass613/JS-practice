var recs = [];

function go(){
    init();
    update(recs);
    outRecs(recs);
}

function init(){
    var i = 0;
    var moreNames = true;
    while(moreNames){
        moreNames = prompt("Enter a name");
        if(moreNames != null){
            var Account = new Object;
            Account.name = moreNames;
            Account.deposit=[];
            Account.withdrawals = [];
            Account.balance = 0;
            recs.push(Account);
        }
    }
}

function update(recs){
    var i;
    var num = -1;
    for (i = 0; i < recs.length; i++) {
        num = -1;
        while(num != 0){
            num = parseInt(prompt(recs[i].name + " please make a deposit. If you do not wish to make a deposit enter 0"));
            if(num != 0){
                recs[i].deposit.push(num);
                recs[i].balance = recs [i].balance + num;
            }

            num = parseInt(prompt(recs[i].name + " please make a withdrawal. If you do not wish to make a withdrawal enter 0"));
            if(num != 0){
                recs[i].withdrawals.push(num);
                recs[i].balance = recs [i].balance - num;
            }
        }
    }
}

function outRecs(names){
    var recsStr = "";
    var depositStr = "";
    var withdrawalStr = "";
    var balanceStr = "";
    var obj = document.getElementById("recsRef");
    var i = 0;
    for(i = 0; i< names.length; i++){
        recsStr = names[i].name + ":";
        depositStr = "  deposits: " + names[i].deposit.toString();
        withdrawalStr = "  withdrawals: " + names[i].withdrawals.toString();
        balanceStr = "  balance: " + names[i].balance;

        obj.innerHTML += ("<p>" + recsStr + "<br/> &nbsp " + depositStr + "<br/> &nbsp" + withdrawalStr + "<br/> &nbsp" +balanceStr + "<br/>");
    }

}
/*Finally, go() calls outRecs(), passing it recs. This function assigns to, say, recsRef a
reference to the div element (with id "recs"). Its constructs in, say, recStr a string with all
the information in associative array recs, and this string is assigned to the innerHTML property
of recsRef. For each element of recs, the string has one line with the name followed by a ‘:’.
The next three lines have, respectively, the array of deposits, the array of withdrawals, and the
balance for the person named. Each of these three lines begins with two spaces. (Use the
character entity reference &nbsp; to have the browser insert a space.) Use the toString()
method of the arrays of deposits and withdrawals to get a quick string representation of the
contents of these arrays; do not spend time on appearances. (The contents of these arrays will be
strings that have not been converted to numbers.
These strings are converted to numbers when the
balance is updated since that involves
subtraction.) */