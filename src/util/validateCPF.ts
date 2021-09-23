

const validateFirst = (cpf: number[]) => {
    const sum = cpf.reduce( (acc, value, index ) => {
        return index <= 9
            ? acc + value*(10-index)         
            : acc
    }, 0 );

    let rest = (sum * 10) % 11;
    rest = rest >= 10 ? 0: rest;

    return rest === cpf[9];
}
