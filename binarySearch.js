function binarysearch(arr, n, k) {
  // code here
  let start = 0,
    end = arr.length - 1,
    mid = Math.floor(end / 2);

  while (Number.isInteger(mid) && end >= start) {
    // console.log("start=> ",start," mid=> ",mid," end=> ",end)
    if (arr[mid] == k) {
      return mid;
    } else if (arr[mid] > k) {
      end = mid - 1;
      mid = Math.floor(end / 2);
    } else {
      start = mid + 1;
      mid = Math.floor((end + start) / 2);
    }
  }

  return -1;
}
