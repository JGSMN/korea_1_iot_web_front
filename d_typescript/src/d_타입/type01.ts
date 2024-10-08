// b_union.ts
export const tmp = '';

// 타입을 정의해서 "사용자의 데이터를 요청"하는 로직 작성

//! 1. 사용자의 데이터에 대한 응답 정의 (타입 별칭)

type Success = {
  name: string;
  email: string;
}

type Fail = {
  error: string;
}

type FetchResponse = Success | Fail;

//! 2. 사용자의 데이터 요청에 대한 "응답을 처리"하는 함수 정의
function handleResponse(response: FetchResponse) {
  // 성공 또는 실패의 데이터를 처리하는 함수

  // in 연산자
  // : '속성' in 객체명
  // >> 해당 속성이 객체 안에 있는지의 여부를 boolean 타입으로 반환

  if ('error' in response) { // 실패(Fail)의 데이터가 전달된 경우
    console.error(response.error);
  } else {
    // 성공(Success)의 데이터가 전달된 경우
    console.log(`Name: ${response.name}, Email: ${response.email}`);
  }
}

//! 3. 비동기 작업을 사용하여 JSONPlaceholder에서 '사용자 데이터'를 가져오는 함수 정의
// >> async / await
async function fetchUserData(userId: number) {
  // https://jsonplaceholder.typicode.com/users
  // >> 사용자 10명의 데이터를 모두 가져옴
  
  // https://jsonplaceholder.typicode.com/users/${userId}
  // >> 해당 id를 가진 사용자 한 명의 데이터를 가져옴

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // >> fetch함수: 해당 경로를 통해 데이터를 가져와 Response 응답을 반환하는 함수

    if (!response.ok) {
      // response의 응답에 성공이 없다면 (실패)
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

  } catch(e) {
    // Fail 타입 >> 객체
    /*
    {
      error: 값(삼항연산자 계산, e instanceof Error ? e.message : 'Unknown Error')
    }
      */

    // A instanceof B
    // : A 데이터가 B 안에 포함되어 있는지의 여부를 확인 (상속되어 있는지 여부)
    handleResponse({ error: e instanceof Error ? e.message : 'Unknown Error' });
  }
}