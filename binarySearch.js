

function binarySearch( nums, n, flag ){
    if( !flag ){
        nums.sort( (a,b) => a - b );
    }

    let initial = 0;
    let end = nums.length - 1;
    let middle = Math.floor( end / 2 );

    let found = false;
    let index = -1;

    while( !found ){
        if( end < initial ){
            found = true;
        }
        if( nums[middle] === n ){
            found = true;
            index = middle;
        }
        else{
            if( n > nums[middle] ){
                initial = middle + 1;
            }
            else{
                end = middle - 1;
            }
            middle = Math.floor( (end + initial) / 2 );
        }
    }
    console.log( nums );
    return index;
}

let nums = [9, 1, 4, 5, 10, 8, 7, 2, 3, 6];

console.log( binarySearch( nums, 6.5, false ));