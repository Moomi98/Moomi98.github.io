---
title: useState 동작 원리
date: 2022-04-08 00:04:26
category: React
thumbnail: { thumbnailSrc }
draft: false
---

## 📝 이 글을 쓰게 된 이유

react에서 제공하는 hook은 웹페이지를 구현하는데 정말 많은 편리함을 가져다준다.

그중에서도 `useState`는 state값에 따른 조건부 렌더링, state에 따른 로직 처리 등 정말 다양한 곳에서 사용되고 있는데,

useState를 사용하면서 많은 React 입문자들이 겪었을 의문점을 나도 가지게 되었다.

**setState 함수로 갱신한 state 값을 바로 사용할 때 갱신된 값이 바로 사용되지 않는다.**

너무나 자연스럽게 사용했지만 그 원리는 자세히 알지 못했던 useState의 작동 원리를 정리해보고자 한다.

## 📖 useState의 구조

우리는 useState를 `react` 모듈로부터 import 한 후 비구조화 할당을 통해 다음과 같이 사용한다.

```javascript
import { useState } from 'react'
const [state, setState] = useState(initialState)
```

여기서 기존에 가지고 있던 생각의 첫 번째 의문점이 든다.

#### state는 const로 선언되어 있는데 어떻게 값의 변경이 가능한거지?

![image](https://user-images.githubusercontent.com/76273383/161983353-fa573762-5f3e-4403-959d-f3501d0b4cc6.png)

위 사진은 `react.development.js` 내부에 각종 hook이 선언된 파일이다.

useState는 dispatcher라는 인스턴스를 생성한 후 dispatcher의 useState 함수를 반환한다.

또한 `resolveDispatcher` 함수를 따라가보면 다음과 같이 작성되었다는 것을 알 수 있다.

![image](https://user-images.githubusercontent.com/76273383/161984118-41d7e345-7277-4e33-bace-c4200ebf37a3.png)

이 함수는 `ReactCurrentDispatcher` 라는 객체를 불러온 후 에러 처리를 진행한다.

그럼 마지막으로 `ReactCurrentDistacher` 함수를 따라가보자.

![image](https://user-images.githubusercontent.com/76273383/161984456-4b30a72f-5e33-43fd-b3f7-551a04fb0a72.png)

이 함수는 전역으로 선언되었고, current라는 속성을 지니고 있다. 이 **current**에 우리의 dispatcher가 저장되는 것이다.

이렇게 함수를 따라가면 한 가지 떠오르는 것이 있다.

함수의 선언보다 상위의 함수의 값에 접근하는 방법, 바로 **Closure** 다.

이 이상의 접근은 React 자체를 뜯어봐야 한다. 아직 거기까지의 실력은...

좀 더 자세한 과정을 알고 싶다면 이 글을 작성하며 참고한 블로그를 추천한다.

> https://goidle.github.io/react/in-depth-react-hooks_1/

## ❓ 그래서 과정이 어떻게 되는건데?

아직 겉핥기 식의 원리만 이해하고 있기 때문에 자세하게 적지는 못했다.

나중에 시간이 되면 useState와 함께 hook의 원리를 간단하게 정리해보려 한다.

그래서 useState의 대략적인 과정은 다음과 같다.

1. Component의 setState 함수가 이전 state의 값을 closure의 형태로 가지고 있다.

2. Component에서 setState가 호출되면 useState 내부에서 value 값과 setState 함수를 배열로 반환한다.

3. setState 함수를 호출되면서 컴포넌트 리렌더링을 발생시킨다.

> _<span style="color: red">즉, state의 값 자체가 바뀌는 것이 아니라 변경된 값을 배열에 담아 반환받기 때문에 const로 사용해도 문제가 없는 것이었다.</span>_
> (변경된 state 값은 useState가 가져오기 때문에)

## 💬 마치며

아직 React를 열심히 공부중이기 때문에 많은 오류들이 있을 수 있다.

하지만 이 글은 useState의 대략적인 원리를 이해하기 위해 작성했으며 추후 많은 공부를 진행하면 다시 깊게 정리해보려고 한다.
