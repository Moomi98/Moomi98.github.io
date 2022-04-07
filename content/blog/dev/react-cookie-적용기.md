---
title: React-cookie 적용기
date: 2022-04-08 00:04:93
category: dev
thumbnail: { thumbnailSrc }
draft: false
---

졸업작품을 진행하던 중 사용자 정보를 다른 페이지에서 활용할 일들이 생겨 방법을 고민해봤다.

우선 기존에는 Redux를 이용하여 사용자가 로그인을 완료하면 Redux에 저장한 후 그 데이터를 활용하려 했다.

그러나, 이 방법의 심각한 문제점은 새로고침을 하면 Redux의 정보가 모두 날아간다는 것이었다.

따라서 사용자 정보를 로컬 브라우저에 담아야 했고, **쿠키**를 생성하여 사용하기로 했다.

# 🍪 쿠키란?

## About cookie

- 웹 서버가 브라우저에게 보내어 저장했다가 서버의 부가적인 요청이 있을 때 다시 서버로 보내주는 문자열 정보
- 웹페이지 방문 시 방문 기록 등 브라우저의 정보들이 저장된 **텍스트 파일**

## 쿠키의 종류

- 필수적인 쿠키 : 페이지 탐색, 웹사이트의 보안영역 접속, 검색을 포함한 웹사이트의 기본적인 기능의 활성화를 목적으로 사용.
  이러한 쿠키들은 없으면 최적화된 기능 수행이 불가능하므로 별도의 사용자 동의 없이 활성화

- 기능 쿠키 : 사용자의 접속 지역 및 언어 등 웹서아트의 외관에 영향을 줄 수 있는 접속자 설정을 저장.

- 성능 쿠키 : 정보의 익명 수집 및 보고를 통해 웹사이트 운영자가 방문자와 웹사이트 사이의 상호작용을 이해하는데 도움을 주며, 유저와의 상호관계에 대한 통계자료를 제공함으로서, 최적화된 웹사이트 개발에 도움을 줌.

- 마케팅 쿠키 : 사용자의 웹사이트 방문 내역을 추적하며, 쿠키 제공자가 접속자의 경향 및 웹사이트 이용 패턴을 파악하도록 함으로서 사용자에게 관련성 높은 광고나 제품이 제공되는데 기여

# 💾 설치

```
    npm install react-cookie
    yarn add react-cookie
```

# 🎮 사용하기

cookie를 설정 및 사용하려면 react-cookie에서 제공하는 useCookies라는 hook을 사용해야 한다.

```javascript
import { useCookies } from 'react-cookie'
const [cookies, setCookie, removeCookie] = useCookies(['cookie_name'])
```

사용자가 로그인에 성공하면 서버로부터 받은 사용자의 정보를 쿠키에 저장한다.

```javascript
const login = async (e: any) => {
  e.preventDefault()
  const result: any = await api.login(id, pwd)
  if (result) {
    handleCookie(result.data.userid, result.data.username, result.data.email)
  } else {
    alert('로그인 실패')
  }
}
const handleCookie = (userid: string, username: string, email: string) => {
  const expireDate = new Date()
  expireDate.setMinutes(expireDate.getMinutes() + 10)
  setCookie(
    'cookie_name',
    {
      userid: userid,
      username: username,
      email: email,
    },
    {
      path: '/',
      expires: expireDate,
    }
  )
}
```

setCookie는 3가지의 매개변수를 받는다.

1. 쿠키의 이름
2. 저장할 정보를 담은 객체
3. 쿠키 설정 값

setCookie 함수의 설정에서 path를 지정하면 해당 페이지에서만 쿠키가 작동하며
'/'로 설정하면 전체 페이지에서 사용이 가능하다.

expires는 쿠키의 만료시간을 지정하는 변수이다.

---

이렇게 설정한 쿠키를 다른 페이지에서 사용하고 싶다면 해당 페이지의 컴포넌트에서 useCookie를 사용하면 된다.

쿠키 내부의 정보들을 접근하고 싶다면 . 을 이용하여 접근하면 된다.

```javascript
const [cookies, setCookie, removeCookie] = useCookies(['userInfo'])
const onStart = () => {
  if (!cookies.userInfo) {
    alert('로그인 후 이용해주세요.')
  } else {
    router.push('/qna')
  }
}
```
