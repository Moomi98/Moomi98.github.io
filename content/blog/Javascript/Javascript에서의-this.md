---
title: Javascript에서의 this
date: 2022-04-11 20:04:72
category: Javascript
thumbnail: { thumbnailSrc }
draft: false
---

## 💻 정의

this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.

this를 통해 자신이 속한 객체 또는 생성할 인스턴스의 프로퍼티나 메소드를 참조할 수 있다.

> this는 자바스크립트 엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다.  
> 또한 this는 함수 호출 방식에 의해 동적으로 결정될 수 있다.

## 📍 함수 호출 방식과 this 바인딩

함수 호출 방식에는 다음과 같은 방법들이 있다.

- 일반 함수 호출

- 메서드 호출

- 생성자 함수 호출

- `Function.prototype.apply/call/bind` 에 의한 간접 호출

함수 호출 방식 따른 `this`의 바인딩은 아래와 같다

### 1. 일반 함수 호출

**기본적으로 this에는 전역 객체가 바인딩된다.**

> 바인딩(Binding) : 식별자와 값을 연결하는 과정

그리고 일반 함수로 호출했을때 해당 함수 안에서의 this도 전역 객체가 바인딩 된다.

다만, `this`는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 객체를 생성하지 않는 일반 함수에서 `this`는 의미가 없다. 따라서 strict mode가 적용된 일반 함수 내부의 `this`에는 `undefined`가 바인딩된다.

### 2. 메서드 호출

메서드 내부에서의 this는 메서드를 호출한 객체, 즉 메서드를 호출할 때 이름 앞의 마침표 연산자 `.` 앞에 기술한 객체가 바인딩된다.

```javascript
const person = {
  name: 'Lee',
  getName() {
    return this.name
  },
}

console.log(person.getName())
```

위 예제의 getName 메서드는 person 객체의 메서드로 정의되었다. 메서드는 프로퍼티에 바인딩된 함수이므로 person 객체의 name 프로퍼티가 가리키는 함수 객체는 person 객체에 포함되는 것이 아니라 독립적으로 존재하는 별도의 객체다. getName 프로퍼티가 함수 객체를 가리키고 있을 뿐이다.

따라서 getName 메서드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될 수도 있고 일변 변수에 할당하여 일반 함수로 호출할 수도 있다.

그러므로 메서드 내부의 this는 **프로퍼티로 메서드를 가리키고 있는 객체와는 관계가 없고 메서드를 호출한 객체에 바인딩된다.**

### 3. 생성자 함수 호출

생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스가 바인딩된다.

### 4. `Function.prototype.apply/call/bind` 에 의한 간접 호출

`Function.prototype.apply`와 `Function.prototype.call` 메서드는 this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출한다.

```javascript
    @param thisArg // this로 사용할 객체
    @param argsArray, arg1, arg2 ... // 함수에게 전달한 인수 리스트의 배열 또는 유사 배열 객체

    Function.prototype.apply(thisArg[, argsArray]);
    Function.prototype.call(thisArg[, arg1[, arg2[, ...]]]);
```

`apply`와 `call` 메서드의 본질적인 기능은 **함수를 호출**하는 것이다.

`apply` 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.

`call` 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.

이처럼 `apply`와 `call` 메서드는 호출할 함수에 인수를 전달하는 방식만 다를 뿐 this로 사용할 객체를 전달하면서 함수를 호출하는 것인 동일하다.

`Function.prototype.bind` 메서드는 `apply`, `call`과 달리 함수를 호출하지 않고 this 바인딩이 교체된 함수를 새롭게 생성해 반환한다.

```javascript
function getThisBinding() {
  return this
}

const thisArg = { a: 1 }

console.log(getThisBinding.bind(thisArg)()) // 즉시 실행 함수, 결과 : {a : 1}
```

bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.
