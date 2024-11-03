let n, i, j;
let a = [];
let b = [];
let c = [];
n = prompt("Value of rows and columns?");

for (i = 0; i < n; i++) {
    a[i] = [];
    for (j = 0; j < n; j++) {
        a[i][j] = prompt("Enter value for matrix A[" + i + "][" + j + "]:");
    }
}

for (i = 0; i < n; i++) {
    b[i] = [];
    for (j = 0; j < n; j++) {
        b[i][j] = prompt("Enter value for matrix B[" + i + "][" + j + "]:");
    }
}

for (i = 0; i < n; i++) {
    c[i] = [];
    for (j = 0; j < n; j++) {
        c[i][j] = a[i][j] * b[i][j];
        document.write(c[i][j] + " ");
    }
    document.write("<br>");
}
