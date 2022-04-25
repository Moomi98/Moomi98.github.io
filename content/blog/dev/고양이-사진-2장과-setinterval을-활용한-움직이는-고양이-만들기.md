---
title: 고양이 사진 2장과 setInterval을 활용한 움직이는 고양이 만들기
date: 2022-04-25 14:04:01
category: dev
thumbnail: { thumbnailSrc }
draft: false
---

## 💡 개요

고양이와 함께하는 힐링 웹사이트에 대한 개발을 최근에 시작했다.

화면 중앙에는 공부하는 고양이가 등장하는데 이 고양이가 가만히 있으면 밋밋할 것 같아 고양이 사진 2장을 통해 고양이가 숨쉬는 듯한 느낌을 구현하려고 한다.

## 📘 setInterval

고양이가 숨쉬는 듯한 동작을 반복하기 위해 일정 시간마다 고양이 이미지 2장에 대해 반복 렌더링을 진행해야 했다.

이 때 setInterval 함수를 이용했는데 일단 이 함수가 뭔지 간단하게 알아보자.

```javascript
const func = setInterval(반복 실행할 함수, 반복 실행 시간(ms));
```

setInterval은 일정한 시간 간격으로 작업을 수행하기 위해 사용하는 함수이다. 첫 번째 인자로 반복 수행을 진행할 함수를 넣고, 두 번째 인자로 반복 수행할 시간을 ms 단위로 설정한다.

만약 setInterval 함수를 통한 반복 수행을 중단하고 싶다면 clearInterval 함수를 호출하면 된다.

```javascript
clearInterval(func)
```

이를 응용하여 60초 타이머 기능을 가진 함수는 다음과 같이 만들 수 있다.

```javascript
let time = 0
const timer = setInterval(() => {
  time++
  console.log(time)
}, 1000)

if (time === 60) {
  clearInterval(timer)
}
```

## 🕹️ useEffect와 결합하여 고양이 움직이기

고양이는 최초에 화면에 렌더링 된 후 숨쉬는 듯한 동작을 계속 반복해야 한다.

이를 위해 `useEffect`를 이용하여 최초 렌더링 때 고양이 이미지를 로딩한 후 `setInterval` 함수를 등록하여 고양이 이미지 2장을 계속 변경하며 출력하도록 구현했다.

```javascript
useEffect(() => {
  const canvas = canvasRef.current
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
  const context = canvas?.getContext('2d')

  const catImage = new Image()
  catImage.src = '../../images/cat1.png'
  catImage.onload = () => {
    context.drawImage(catImage, 500, 500, 300, 300)
  }
  let i = 0

  const cat = setInterval(() => {
    catImage.src = cats[i]
    context.clearRect(500, 500, 300, 300)
    context.drawImage(catImage, 500, 500, 300, 300)
    i = i === 1 ? 0 : 1
  }, 800)

  return () => clearInterval(cat)
}, [])
```

## ❗해결해야될 문제

이미지는 정상적으로 반복 변경되지만 최초 2~3번은 이미지 변경 시 마다 이미지가 깜빡이는 현상이 발생한다. 아직 원인은 잘 모르겠다...😭
