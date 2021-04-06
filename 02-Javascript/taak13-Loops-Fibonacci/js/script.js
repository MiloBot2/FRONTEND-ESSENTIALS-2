var a = 0, b = 1, f = 1;
for (i = 1; i <= 10; i++) {
    f = a + b;
    a = b;
    b = f;
    console.log(f);
}