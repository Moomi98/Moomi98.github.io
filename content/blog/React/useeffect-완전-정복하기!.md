---
title: useEffect 완전 정복하기!
date: 2022-05-09 15:05:17
category: react
thumbnail: { thumbnailSrc }
draft: false
---

## 🔖 개요

React에서는 함수형 컴포넌트와 클래스형 컴포넌트를 모두 지원한다.

이 중, 함수형 컴포넌트 내에서 state를 관리하기 위해 hook이라는 시스템을 제공하는데, 대표적으로 useState, useEffect, useCallback 등이 있다.

오늘은 가장 유용하게 사용하는 hook중 하나인 useEffect에 대해 정리를 해보려고 한다.

## ❓ useEffect란?

useEffect() 함수는 컴포넌트가 렌더링 될 때 마다 발생하는 Side Effect를 실행하게 해주는 hook의 일종이다.

useEffect의 등장으로 인해 클래스형 컴포넌트에서 사용하던 생명주기 메서드(`componentDidMount`, `componentDidUpdate` 등)를 함수형 컴포넌트에서도 사용할 수 있다.

> Side effect : 컴포넌트가 화면에 렌더링 된 이후 비동기적으로 처리되어야 하는 부수적인 과정들.
> 대표적으로 API호출, 쿠키 저장 및 호출 등이 있다.

## ✏️ useEffect의 기본 형태

useEffect()는 다음과 같이 작성한다.

```javascript
useEffect(() => {}, [])
```

useEffect는 기본적으로 2개의 인자를 필요로 한다.

- function() : Side effect 발생 시 실행할 함수.

- deps : useEffect를 실행시키는데 영향을 줄 값들을 등록

deps 배열 안의 값들의 유무에 따라 useEffect의 실행 조건이 바뀌게 된다.

- deps 배열 안에 변수들을 넣으면 해당 변수의 값이 변경될 때마다 useEffect()를 실행시킨다.

```javascript
useEffect(() => {
  const sum = x + y
  console.log(sum)
}, [x, y])
```

- 만약 deps 배열이 빈 배열이면 컴포넌트가 최초로 렌더링 될 때만 실행되고 이후에는 실행되지 않는다.

```javascript
useEffect(() => {
  const x = 10
  const y = 30
  const sum = x + y
  console.log(sum)
}, [])
```

- deps 배열을 인자로 전달하지 않는다면 해당 컴포넌트가 렌더링 될 때마다 useEffect 함수가 실행된다.

```javascript
useEffect(() => {
  const x = 10
  const y = 30
  const sum = x + y
  console.log(sum)
})
```

## 📘 useEffect에서의 return

useEffect에서 `return`문을 활용해 생명주기 메서드인 `ComponentWillUnmount`를 구현할 수 있다.

> componentWillUnmount : 컴포넌트가 언마운트될 때 실행하는 함수

```javascript
useEffect(() => {
  console.log('hello world!')

  return () => {
    isSend = false
    isLoading = true
  }
}, [])
```
