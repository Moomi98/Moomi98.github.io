---
title: HOF에 대해서
date: 2022-04-19 13:04:32
category: javascript
thumbnail: { thumbnailSrc }
draft: false
---

## ✏️ HOF란?

Higher Order Function, 고차함수라고도 불리운다.

자바스크립트와 같은 언어에서 함수형 프로그래밍을 할 때 사용되는 개념으로

**함수를 인자로 받고 함수를 반환하는 함수**를 말한다.

## 🔎 자바스크립트에서의 함수

자바스크립트에서는 함수도 일종의 **값**으로 취급된다.

따라서 변수에 할당이 가능하며 배열의 원소 및 객체의 속성으로도 넣을 수 있다.

이러한 특성 때문에 자바스크립트에서 함수는 **일급 객체** 라는 특별한 이름을 가지고 있다.

그렇다면 일급 객체란 무엇일까?

## 📌 일급 객체

일급 객체란 다음의 조건을 만족하는 객체이다.

> - 변수에 할당할 수 있다.
> - 다른 함수를 인자로 전달받는다.
> - 다른 함수의 결과로서 리턴될 수 있다.

예를 들면 이런 것이다.

### 변수에 할당할 수 있다.

```javascript
const addThree = function(number) {
  return number + 3
}
```

### 다른 함수를 인자로 받는다.

```javascript
function add(number) {
  return number + 1
}

function addMore(func, number) {
  return func(number)
}

const result = addMore(add, number) // 첫번째 인자로 add함수를 전달하고 있다.
```

### 다른 함수의 결과로서 리턴될 수 있다.

```javascript
function addThree(number1) {
  return function add(number2) {
    return number1 + number2 + 3
  }
}

const result = addThree(3) // return : add(number2);
```

고차함수는 일급객체의 조건들 중 2, 3번을 가진 함수라고 이해해도 편할것이다.

## 📖 HOF의 예시

우리가 자주 사용하는 배열 메소드인 `forEach`,`map`,`filter` 들이 모두 HOF( 더 정확히는 callback function) 으로 만들어져 있다.

```javascript
const arr = [1, 2, 3, 4, 5]
const result = arr.filter(number => {
  return number < 3
}) // filter 함수의 매개변수로 함수가 들어간다.
```

## 🕶️ 마무리

React에선 HOF를 응용한 HOC라는 것이 존재한다. 함수를 받고 함수를 리턴하는 대신 컴포넌트를 인자로 받고 컴포넌트를 리턴하는 것이다. 이에 대해서는 React 카테고리에서 다뤄보도록 하겠다.
