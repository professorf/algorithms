/*
 * tsort.js: TREESORT
 * 
 * Author: 
 *     Nick V. Flor (nickflor@mentalsystemsinc.com, @ProfessorF)
 *
 * License: 
 *     GNU General Purpose License v3 (GPLV3)
 *
 * Date: 
 *     October 30, 2020
 *
 */
function tsort(a) {
    // build tree
    for (i=0; i<a.length; i++) addNode(a[i], tree)
    // traverse tree to sort
    while (a.length>0) a.pop()
    walkTree(tree, a)
}

tree=null
node = function (v) {
    this.i=v
    this.L=null
    this.R=null
}

function walkTree(t, a) {
    if (t!=null) {
        // console.log(t.i)
        walkTree(t.L, a)
        //a.pop()
        a.push(t.i)
        // console.log("/"+t.i)
        walkTree(t.R, a)
        // console.log("\\"+t.i)
    }
}

function addNode(v, t) {
    n = new node(v)
    if (t!=null) {
        if (v<=t.i) {
            if (t.L==null) t.L=n
            else           addNode(v,t.L)
        } else {
            if (t.R==null) t.R=n
            else           addNode(v,t.R)
        }
    } else {
        tree=n
    }
}

/* Sample Usage */
N=10
z=[]
for (var i=1;i<=N;i++) {x=Math.round(Math.random()*10);z.push(x)}
console.log(z)
debug=true
tsort(z)
console.log(z)
foo=7
