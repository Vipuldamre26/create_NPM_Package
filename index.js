
const binarySearch = function(arr, num){

    arr.sort();
    
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);
        if(arr[mid] === num){
            return mid;
        }
        else if(arr[mid] > num){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }

    return -1;
}

// let arr = [1,2, 3,4, 5, 6, 7, 8,9];
// console.log(binarySearch(arr, 7));