---
title: Re-rendering이 되는 상황들
date: 2022-06-14 22:06:57
category: React
thumbnail: { thumbnailSrc }
draft: false
---

리액트에서 렌더링이란, 컴포넌트가 현재 props와 state를 바탕으로 UI를 구성하는 방법을 컴포넌트에게 요청하는 작업을 의미한다.

React에서는 다음과 같은 상황에서 리렌더링이 일어난다. (forceUpdate()는 React18에서 사라졌으므로 적지 않는다.)

1. props가 변경되었을 때

2. state가 변경되었을 때

3. 부모 컴포넌트가 렌더링 될 때

## 📕 props가 변경되었을 때

```javascript
function Timer({ time }) {
  return <div>현재 시각은 {time}입니다.</div>
}
```

다음과 같이 시간 값 `time`을 props로 받는 컴포넌트가 있다고 하자.

시간은 매 초 마다 바뀌게 되므로 초가 변경될 때 마다 `time`이 변하게 될 것이고, Timer가 받는 props도 매 초마다 변경 될 것이다.

그러면 Timer 컴포넌트는 매 초 변하는 시간을 표시하기 위해 렌더링을 하게 될 것이다.

이렇게 props가 변경되게 되면 리렌더링이 일어난다.

## 📗 state가 변경되었을 때

컴포넌트의 state 값이 변경되었을 때에도 리렌더링이 일어난다.

```javascript
function App(){
    const [state, setState] = useState();

    return (
        <div>
        {state : (
            <span>on</span>
        ): (
            <span>off</span>
        )}
        <button onClick={() => {
            state ? setState(false) : setState(true);
        }}></button>
        </div>
    )
}
```

App 컴포넌트는 button과 텍스트 태그를 가지고 있고 버튼를 누를 때마다 `onClick`의 실행으로 state 값이 바뀌게 된다.

이때는 state 값의 여부에 따라 텍스트가 on / off 로 리렌더링 되게 된다.

## 📘 부모 컴포넌트가 렌더링 될 때

부모 컴포넌트가 리렌더링이 되면 자식 컴포넌트들도 모두 리렌더링이 된다.

그 이유는 Rendering tree에서 부모 트리가 자식 트리를 이어지게 하기 때문에 부모 컴포넌트의 tree가 변경되면 자식 컴포넌트의 tree도 변경되게 된다.

React에서 성능을 최적화 한다고 하면 주로 리렌더링의 횟수를 줄이는 방향을 찾는다.

그 중 props 혹은 부모 컴포넌트의 리렌더링 과정들을 주로 살펴보게 된다.

따라서 자식 컴포넌트를 많이 가지고 있는 부모 컴포넌트는 최대한 리렌더링을 적게 하도록 설계하는 것이 바람직하다.
