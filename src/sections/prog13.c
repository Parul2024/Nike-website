#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX 20

// Function to check if a string is a number
int isNumber(char s[]) {
    for (int i = 0; s[i]; i++) {
        if (!isdigit(s[i])) return 0;
    }
    return 1;
}

int main() {
    char lhs[MAX][10], rhs[MAX][20];
    int n;

    printf("Enter number of statements: ");
    scanf("%d", &n);

    printf("Enter statements in form: x = y or x = 5\n");

    for (int i = 0; i < n; i++) {
        scanf("%s = %s", lhs[i], rhs[i]);
    }

    /* -----------------------------
         CONSTANT PROPAGATION
       ----------------------------- */
    for (int i = 0; i < n; i++) {

        // If RHS is a number, propagate it
        if (isNumber(rhs[i])) {
            char constant[20];
            strcpy(constant, rhs[i]);   // save constant value

            // replace occurrences in later statements
            for (int j = i + 1; j < n; j++) {
                if (strcmp(lhs[i], rhs[j]) == 0) {
                    strcpy(rhs[j], constant);
                }
            }
        }
    }

    /* -----------------------------
           PRINT RESULT
       ----------------------------- */
    printf("\nAfter Constant Propagation:\n");
    for (int i = 0; i < n; i++) {
        printf("%s = %s\n", lhs[i], rhs[i]);
    }

    return 0;
}
