function digital_root(n) {
    while(String(n).length > 1) {
        n = String(n).split("").reduce((a,b) => Number(a) + Number(b));
    }

    return n;
}