// 자연수 n개로 이루어진 중복 집합
// 최고의 집합 = 각 원소의 합이 S이다, 각 원소의 곱이 최대이다.
// 집합 => S를 N개의 수의 합으로 나타내는 방법
// 자연수의 분할을 한다. 각 원소들의 차이가 최소가 되도록 
// 풀이는 맞았는데 코드가 틀렷네 ㅇㅁㅇ;;
function solution(n, s) {
  const share = s / n >> 0;
  
  if(!share) return [-1];
  
  const rest = s % n;
  const answer = new Array(n).fill(share);
  
  for(let i = 0; i < rest; i ++)
    answer[answer.length - 1 - i]++;
  
  return answer;
}