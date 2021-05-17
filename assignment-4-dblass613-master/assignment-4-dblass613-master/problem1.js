function start(){
    var rows = prompt( "Number of rows", 1 ),
    cols = prompt( "Number of columns", 1 ),
    inAr;
    inAr = inputArray(rows, cols);
    sumAll( inAr, rows, cols );
    rowSum( inAr );
    colSum( inAr );
}

function inputArray(rows, cols){
    var arr = [[rows],[cols]];
    var i, j;
    var tableInfo = document.getElementById( "input" ); 
    for(i = 0; i < rows; i++){
        var row = tableInfo.insertRow(i);
        for(j=0; j< cols; j++){
            num = prompt("Enter a number to put in the array");
            arr[i][j]= num;
            var cell =  row.insertCell(j);
            cell.innerHTML += arr[i][j];
        }
    }
    return arr;
}

function sumAll(arr, rows, cols){
    var row = arr.length;
    var i=0;
    var j=0;
    var sum = 0;
    var col = arr[i].length;
    var element =  document.getElementById( "sum" );
    for(i=0; i < rows; i++){
        for(j=0; j < cols; j++){
            sum += parseInt(arr[i][j]);
        }
    }
    element.innerHTML += sum;
}

function rowSum(arr){
    var i=0;
    var j=0;
    var sum = 0;
    var element =  document.getElementById( "rowS" );
    for(i=0; i<arr.length; i++){

        var row = element.insertRow(i);
        for(j=0; j< arr[i].length; j++){
            sum += parseInt(arr[i][j]);
        }
        var cell =  row.insertCell(0);
        cell.innerHTML = sum;
        sum = 0;
    }
}

function colSum(arr){
    var i=0;
    var j=0;
    var sum = 0;
    var element =  document.getElementById( "colS" );
    var row = element.insertRow(0);
    var b = 0;
    for(i=0; i<arr[b].length; i++){
        for(j=0; j< arr.length; j++){
            sum += parseInt(arr[j][i]);
        }
        var cell =  row.insertCell(i);
        cell.innerHTML = sum;
        sum = 0;
    }
    b++;
}

/* You write the functions inputArray(), sumAll(), rowSum(), and colSum(). Function
inputArray() is passed the number of rows and columns in the 2D array it builds by
prompting the user for integers. (You don’t have to verify input.) It returns this array, but,
before doing so, it constructs a string that represents the array as table rows (tr elements
containing td elements) and appends this to the content of the first table element (just after the 
COMP 322 Internet Systems Fall 2014 Assignment 4
3
caption element). This requires a nested loop. You can get by with one nested loop by
constructing the string as the values are obtained from the user.
Function sumAll() is passed the array, sums all the values (across all rows and columns),
and concatenates this sum to the end of the content of the p element.
Function rowSum() adds the rows together (i.e., forms the sum of each column) and
concatenates a tr whose td’s contain the column sums to the end of the content of the second
table (after the caption). Similarly, colSum() adds the columns together (i.e., forms the sum of
each row) and concatenates to the end of the content of the third table a sequence of tr’s, each
with one td, which contains the sum of the respective row. Neither of these functions requires
an additional array; just form the string as you produce the sums.
As an example, the following shows the rendering when the user answered 2 for the number
of rows and 3 for the number of columns and then entered in the prompts 1, 2, 3 (giving the first
row), and 4, 5, 6 (for the second row).
*/