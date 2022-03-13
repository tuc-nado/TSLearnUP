function concat(str1:string, str2:string):string{
    return str1 + str2;
}

interface ForHpmeWork {
    howIDoIt: string,
    simeArray: [],
    withData?: [ForHpmeWork]
}

interface MyArray<T> {
    [N: number]: T;
    reduce<U>(fn:(total: U, el: T) => U): U;
}