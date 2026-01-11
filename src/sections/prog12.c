#include <stdio.h>

int main() {
    int n, i;
    
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];
    printf("Enter %d elements:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }

    int sum_normal = 0, sum_unrolled = 0;

    /* -----------------------------
         NORMAL FOR LOOP
       ----------------------------- */
    for (i = 0; i < n; i++) {
        sum_normal += a[i];
    }

    /* -----------------------------
         LOOP UNROLLING (factor 4)
       ----------------------------- */
    for (i = 0; i < n - (n % 4); i += 4) {
        sum_unrolled += a[i];
        sum_unrolled += a[i+1];
        sum_unrolled += a[i+2];
        sum_unrolled += a[i+3];
    }

    /* Handle remaining elements (if n not multiple of 4) */
    for (; i < n; i++) {
        sum_unrolled += a[i];
    }

    printf("\nSum using normal loop     = %d", sum_normal);
    printf("\nSum using loop unrolling  = %d\n", sum_unrolled);

    return 0;
}
