let i, j, n1, n2, a = [], b = [];
n1 = prompt("Enter number of rows of 2D matrix:");
n2 = prompt("Enter number of columns of 2D matrix:");

for (i = 0; i < n1; i++) {
    a[i] = [];
    for (j = 0; j < n2; j++) {
        a[i][j] = prompt("Element of a[" + i + "][" + j + "]:");
    }
}

let k = 0;
for (i = 0; i < n1; i++) {
    for (j = 0; j < n2; j++) {
        b[k] = a[i][j];
        document.write(b[k] + " ");
        k++;
    }
}