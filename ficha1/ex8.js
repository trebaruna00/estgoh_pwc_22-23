for(var i = 0; i <= 100; i++) {
    if(i == 0) {
        console.log(i + " não é um número primo.");
    } else if(i == 1) {
        console.log(i + " não é um número primo.");
    } else if(i > 1) {
        var primo = true;
        for(var j = 2; j < i; j++) {
            if(i % j == 0) {
                primo = false;
                break;
            }
        }

        if(primo) {
            console.log(i + " é um número primo.");
        }
    }
}