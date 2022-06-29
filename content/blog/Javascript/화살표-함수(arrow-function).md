---
title: 화살표 함수(arrow function)
date: 2022-06-08 19:06:77
category: Javascript
thumbnail: { thumbnailSrc }
draft: false
---

## ❓ 화살표 함수란?

화살표 함수는 ES6에서 출시된 전통적 함수 표현의 간편한 대안책 이다.

기본적으로는 익명 함수로만 사용할 수 있으며 함수의 호출을 위해선 함수 표현식을 사용해야 한다.

```javascript
// 기존 함수 선언문
function add(a, b) {
  return a + b
}

// 화살표 함수(ES6)
const add = (a, b) => a + b
```

## 💻 화살표 함수의 탄생 배경

ES5까지의 함수는 function 키워드를 통한 생성 방법밖에 없었다.

자바스크립트의 함수에서 this는 기본적으로 전역 객체(window)를 가리킨다.

다음의 코드에서 `setTimeout`속 콜백함수는 undefined를 반환한다. 콜백함수의 this가 전역을 가리키고 있기 때문에 전역에서의 `myVar`를 찾을 수 없어 발생한 문제이다.

```javascript
let obj = {
  myVar: 'foo',

  myFunc: function() {
    console.log(this.myVar) // foo

    setTimeout(function() {
      console.log(this.myVar) // undefined
    }, 1000)
  },
}
obj.myFunc()
```

따라서 자신이 원하는 객체를 바인딩 하기 위해서는 `call(), apply(), bind() or 전역`등을 활용하여 동적으로 연결해야 한다.

이 상황에서 **가장 현명한 방법은 화살표 함수를 사용**하는 것이다.

```javascript
let obj = {
  myVar: 'foo',

  myFunc: function() {
    console.log(this.myVar) // foo

    setTimeout(() => {
      console.log(this.myVar) // foo
    }, 1000)
  },
}
obj.myFunc()
```

그렇다면 화살표 함수는 어떠한 특징이 있길래 가장 현명한 방법이었을까?

## ✏️ 화살표 함수의 특징

- 기본적으로 this가 존재하지 않으며, this에 바인딩 할 객체가 정적으로 결정된다. 기본적으로는 상위 스코프를 참조하고 이를 `LexicalThis`라 한다.

- 기존 function 키워드로 생성된 함수와 달리 `prototype` 객체가 없어 일반 함수보다 가볍게 사용할 수 있다.

- 위의 이유들로 인해 `new` 연산자를 사용할 수 없다.

- `argument`객체가 존재하지 않다. 따라서 파라미터의 개수에 맞게 전달을 해주어야 한다.

## 🪄 화살표 함수의 작성 방법

화살표 함수는 기본적으로는 익명함수이며 주로 함수 표현식과 함께 사용된다.

화살표 함수는 `{}`를 작성하지 않아도 되며 이럴 경우 `return`이 암시적으로 생성된다.

```javascript
const add = (a, b) => a + b // == return a + b;
```
