---
title: About 클로저
date: 2022-05-12 20:05:02
category: Javascript
thumbnail: { thumbnailSrc }
draft: false
---

## 🎺 개요

클로저는 자바스크립트의 여러 개념들 중에서도 난해하기로 손꼽히는 개념 중 하나이다.

사실 클로저는 이전에 포스팅한 실행 컨텍스트의 개념을 이해하고 있다면 크게 어려운 개념은 아니다.

개인적으로 신기했던 사실은, 클로저는 자바스크립트 고유의 개념이 아니라 함수를 일급 객체로 취급하는 언어에서 사용되는 중요한 특성이라는 것이다.

이렇게 중요한 클로저, 한 번 정리해보자.

## 🔍 클로저(Closure)란?

MDN에선 클로저의 개념을 다음과 같이 정의하고 있다.

> **클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.**

한 번에 감이 잡히지는 않는다. 하지만 누가 봐도 중요하다 싶은 단어가 있다.

바로 **렉시컬 환경**.

```javascript
function outerFunc() {
  const x = 10
  function innerFunc() {
    console.log(x) // 10
  }
  innerFunc()
}

outerFunc()
```

위 코드에서 `innerFunc()` 함수의 Lexical Environment가 `outerFunc()`의 `x` 변수 정보를 가지고 있기 때문에 스코프 체이닝을 통해 `x`의 값에 접근할 수 있다.

클로저는 쉽게 생각하면 저 `x` 값을 계속 사용하고 싶을 때 활용하는 방법이다.

```javascript
function outerFunc() {
  const x = 10
  return function innerFunc() {
    x += 10
    console.log(x) // 20
  }
  innerFunc()
}

const a = outerFunc()
a() // 30
```

변수 `a`는 `outerFunc()` 함수의 반환 값을 저장하고 있다. 즉 함수 실행 후, a는 `innerFunc()`함수를 가지게 된다.

이후에 `a()`를 호출하면 콘솔에는 30이 찍히게 된다.

변수 a에 할당된 `innerFunc()`의 Lexical Environment가 (정확히는 Lexical Environment 속 `outerEnvironmentReference`) x 정보를 가지고 있고, 우리는 해당 정보를 포함한 a를 호출하고 있으니
접근이 가능한 것이다.

이것이 클로저다. 실행 컨텍스트를 이해하고 이 과정을 이해한다면 처음에 언급한 클로저의 정의가 딱 들어맞게 된다.

## 🪄 클로저의 장점

클로저는 private이란 개념이 없는 Javascript에 **private과 유사한 기능**을 제공한다.

따라서 다음과 같은 장점이 있다.

### 1. 전역 변수의 남용을 막는다.

클로저는 해당 함수의 Lexcial Enviromnent를 활용하기 때문에 바로 바깥 함수의 변수들을 활용할 수 있어
굳이 전역 변수를 사용해야 하는 상황들을 회피할 수 있다.

### 2. 캡슐화를 통한 데이터 은닉이 가능하다.

> 캡슐화 : 객체의 속성(data field)과 행위(methods)를 하나로 묶고, 실제 구현 내용 일부를 외부에 감추어 은닉한다.

클로저는 외부 함수 및 변수들을 사용하지만 실제 결과물은 내부함수에서 받기 때문에 외부함수에서 어떠한 과정이 일어나는지는 감출 수 있다. 이러한 캡슐화를 통해 private 개념을 따라할 수 있다.
