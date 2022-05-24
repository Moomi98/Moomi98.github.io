---
title: useRef 완전 정복하기!
date: 2022-05-24 12:05:19
category: React
thumbnail: { thumbnailSrc }
draft: false
---

## 🔖 개요

React hook에 관련된 **정복하기** 시리즈를 만들어 보려고 한다.

지난번 `useEffect`에 이어 이번에는 `useRef`를 정복해보자.

## ❓useRef란?

> useRef는 `.current` 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.

React 공식 문서에 나온 useRef에 관한 정의이다.

일반적인 자바스크립트에서는 `getElementById`, `querySelector` 함수를 사용해서 DOM을 접근한다.

React에서도 사용하지 말란 법은 없지만 위의 함수들을 통해 DOM에 직접 접근 할 경우 Virtual DOM은 아무런 영향을 끼칠 수 없어 **접근한 DOM의 값이 바뀔 때마다 리렌더링을 발생**시키게 된다.

이에 비해 `useRef`는 내부에 `current` 프로퍼티를 통해 값을 보관하기 때문에 **리렌더링을 유도하지 않는다.**

`const`로 선언된 배열, 객체 내의 값을 변경해도 되는 것과 같은 원리이다.

![image](https://user-images.githubusercontent.com/76273383/169948929-ebbe1042-9a47-4bfe-b53c-7496c3446b7e.png)

그러면 useRef는 어느 상황에서 사용하는 것이 좋을까?

React 공식 문서에서는 다음과 같은 상황에서 사용하는 것이 바람직하다고 설명한다.

- 포커스, 텍스트, 선택영역, 혹은 미디어의 재생을 관리할 때

- 애니매이션을 직접적으로 실행시킬 때

- 서드 파티 DOM 라이브러리를 React와 같이 사용할 때

또한 useRef는 개발하면서 다음과 같은 상황에서 많이 사용한다.

- 특정 DOM을 기억하고 싶을 때

- 컴포넌트 내의 변수를 리렌더링 하지 않으면서 갱신하고 싶을 때

## ✏️ 사용법

### 특정 DOM 활용하기

```javascript
import { useRef } from 'react'

function App() {
  const myRef = useRef()

  return (
    <div>
      <input type="text" ref={myRef} />
    </div>
  )
}
```

먼저 useRef 객체를 선언한다. 이 후 원하는 DOM의 ref에 ref객체를 등록하면 접근이 가능하다.

그러면 위 예시와 같이 `input` DOM을 조작하고 싶을 때는 어떻게 해야 할까?

간단하다. 기존 Javascript에서 `querySelector`등을 활용할 때와 똑같이 조작하면 된다.

다만, useRef는 선택된 DOM을 `useRef` 객체 내의 `current` 속성 안에 보관하고 있기 때문에 `.current` 프로퍼티를 통해 접근을 해야 한다.

```javascript
import { useRef } from 'react'

function App() {
  const myRef = useRef()

  const handleText = () => {
    console.log(myRef.current.vaule)
  }

  return (
    <div>
      <input type="text" ref={myRef} onChange={handleText} />
    </div>
  )
}
```

### 리렌더링 되지 않는 변수로 활용

useRef를 단순히 값을 넣는 용도로 사용하기 위해선 일반 객체와 동일하게 사용하면 된다.

다만, 위의 사용법과 같이 실제 값에 접근할 때는 `.current`를 활용해야 한다.

```javascript
import { useRef } from 'react'

function App() {
  const myRef = useRef(0) // 초기값 0으로 설정

  const handleText = () => {
    myRef.current += 5
    console.log(myRef.current.vaule)
  }

  return (
    <div>
      <div>{myRef.current}</div>
      <Button type="text" onClick={handleText} />
    </div>
  )
}
```

### ❗Typescript에서의 useRef

Typescript에서 `useRef` 사용 시에는 선택할 DOM의 타입을 명시해줘야 한다.

또한 초기값을 null로 초기화해주지 않으면 나중에 ref 사용 시 `개체가 null 인 것 같습니다.` 라는 에러메시지가 출력된다.

(해당 에러 메시지는 `tsconfig.json`에서 **scrictNullChecks:false** 로 설정하면 해결되긴 하지만 뭔가 Typescript의 본질을 흐리는 것 같아 선호하지 않는 편이다.)

```javascript
const divRef = useRef < HTMLDivElement > null // <div> 형태의 DOM
const inputRef = useRef < HTMLInputElement > null // <input> 형태의 DOM
```
