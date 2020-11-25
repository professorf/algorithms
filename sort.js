/*
 * sort.js:
 *     The three most popular sorting algorithms
 *         1. Bubble
 *         2. Merge
 *         3. Quicksort
 *
 * Author:
 *     Nick V. Flor (nickflor@mentalsystemsinc.com, @ProfessorF)
 *
 * License: 
 *     GNU General Purpose License v3 (GPLv3)
 *
 * Date: 
 *     October 30, 2020
 */

/*
 * bsort : BUBBLE SORT (ascending)
 */
function bsort(a) {
var i, j, t
    for (i=0;i<a.length;i++) {
        for (j=0; j<(a.length-1); j++) {
            t=a[j]
            if (a[j]>a[j+1]) {
                a[j]=a[j+1]
                a[j+1]=t
            }
        }
        if (debug) console.log(a)
    }
}

/*
 * msort: MERGE SORT (ascending)
 */
function msort(a, i, j) {
    var n=j-i+1 // Size of the subarray to sort
    if (n>1) {  // As long as you have a subarray of at least 2
        var m=Math.floor((i+j)/2) // midpoint
        msort(a,i,m)              // sort i..midpoint
        msort(a,m+1,j)            // sort mipoint+1..j
        //
        // MERGE the two halves, but the big
        // challenge is unequal sized "halves"
        // 
        var b=a.slice(i,m+1)      // b: upper-half COPY
        var c=a.slice(m+1,j+1)    // c: lower-half COPY
        var d=[]                  // d: destination
        var x=0                   // x: index into b
        var y=0                   // y: index into c
        var w=j-i+1               // w: width of destination
        var bfin=false,cfin=false // all entries accounted for
        for (var l=0;l<w;l++) {
            bfin=(x>=b.length)    // reached end of b subarray
            cfin=(y>=c.length)    // reached end of c subarray
            if (!bfin && !cfin && b[x]<=c[y]) {
                d[l]=b[x]
                x++
            } else if (!bfin && !cfin && b[x]>=c[y]) {
                d[l]=c[y]
                y++
            } else if (cfin) {
                d[l]=b[x]
                x++
            } else if (bfin) {
                d[l]=c[y]
                y++
            }
        }
        // Copy destination array to the original array
        for (var k=i,l=0;k<=j;k++,l++) {
            a[k]=d[l] 
        }
        if (debug) console.log("("+i+","+j+":"+m+")"+"> "+a)
    }
}

/*
 * qsort: QUICKSORT (ascending)
 */
function qsort(a, i, j)     {
    if (i<j) {
        // PARTITION ALGORITHM
        // choose a partitioning index
        var ip = Math.floor((i+j)/2) // use median algorithm
        var p  = a[ip]             // p: pivot value at the pivot index
        // partition array
        var aL  = [] // lower   than p          
        var aR  = [] // greater than p
        var aM  = [] // equal to p
        var v
        if (debug) console.log("< ("+i+","+j+") ["+p+"@"+ip+"]: ", a)
        for (var k=i;k<=j;k++) {
            v=a[k]
            if      (a[k]<p) aL.push(v) // <p on Left   Array
            else if (a[k]>p) aR.push(v) // >p on Right  Array
            else             aM.push(v) // =p on Middle Array
        }
        // copy left & right arrays back into original array 
        for (var k=0; k<aL.length; k++) { // left array
            var l = i+k 
            a[l] = aL[k]
        }
        for (var k=0; k<aM.length;k++) { // middle array (duplicates)
            var l = i+k+aL.length
            a[l] = aM[k]
        }
        var np = i+aL.length
        for (var k=0; k<aR.length; k++) { // right array
            var l = i+k+aL.length+aM.length
            a[l] = aR[k]
        }
        if (debug) console.log("= ("+i+","+j+") ["+p+"@"+np+"]: ", a)
        if (debug) console.log("+ ("+ i    +","+(np-1)+")")
        if (debug) console.log("+ ("+(np+1)+","+     j+")")
        qsort(a, i   , np-1)
        if (debug) console.log("pop ("+i+","+j+") ["+p+"@"+np+"]: ", a)
        qsort(a, np+1, j)
    }
}


/* Sample Usage */
N=10 // # of random numbers
z=[]
for (var i=1;i<=N;i++) {x=Math.round(Math.random()*10);z.push(x)}
console.log(z)
debug=true
// msort(z, 0, z.length-1)
// bsort(z)
qsort(z, 0, z.length-1)
console.log(z)
brake=0 // For debuggers
