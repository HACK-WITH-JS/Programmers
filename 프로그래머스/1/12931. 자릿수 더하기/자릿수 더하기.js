function solution(n)
{
    return (n + "").split("").reduce((acc, elem) => acc + Number(elem), 0);
}