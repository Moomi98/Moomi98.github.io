---
title: react-slick 라이브러리의 사용법
date: 2022-05-20 15:05:10
category: dev
thumbnail: { thumbnailSrc }
draft: false
---

## 📖 개요

NFT 마켓과 관련한 새로운 프로젝트를 진행중이다.

이 프로젝트의 메인 페이지와 리스트 페이지에서
에셋 리스트들을 슬라이딩 형식으로 보여주고 싶었는데, 마침 이전 현장실습에서 사용한 react-slick 라이브러리가 생각났다.

이번 포스트에선 React-slick의 설치 및 사용법, 내가 겪었던 문제들에 대해 적어보고자 한다.

## ❓ React-slick 이란?

React에서 컴포넌트를 슬라이딩하여 보여줄 수 있게(일명 Carousel) 하는 라이브러리이다.

css 파일들을 copy에서 직접 수정할 수도 있고 option을 통해 반응형도 제공하는 등 다양한 기능을 갖춘 라이브러리이다.

## 💾 설치

**npm**

```shell
npm install react-slick slick-carousel
```

**yarn**

```shell
yarn add react-slick slick-carousel
```

여기서 `slick-carousel`은 react-slick에서 제공하는 css 파일로 이 파일들을 import해야 기본적인 UI를 적용할 수 있다.

## 📜 사용법

### 속성 설정

먼저 react-slick을 사용하고 싶은 파일로 이동한 후 다음 파일들을 import한다.

```javascript
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
```

공식 문서에서는 클래스형 컴포넌트로 예시가 나와있지만, 여기서는 함수형 컴포넌트로 예시를 작성한다.

먼저 속성값들을 세팅해주는 객체를 생성한다.

```javascript
const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
}
```

각 속성들의 의미는 다음과 같다

- `arrows : boolean` : 슬라이더의 양 끝에 화살표 생성 여부 설정. 클릭 시 다음 슬라이드를 보여준다.

- `dots : boolean` : 슬라이더 아래에 슬라이드의 개수를 점 형태로 표시 여부 설정.

- `infinite : boolean` : 슬라이더의 슬라이드가 맨 끝에 도달했을 때 맨 처음 슬라이드를 다시 보여줄지 여부 설정.

- `slideToShow : number` : 화면에 한 번에 표시할 슬라이드의 개수 설정.

- `slideToScroll : number` : 화면을 옆으로 스크롤할 때 다음 보여 줄 슬라이드의 개수 설정.

- `speed : number` : 화면을 넘길 때 속도 설정.

- `autoPlay : boolean` : 슬라이드를 자동으로 넘길지의 여부 설정.

- `autoPlaySpeed : number` : `autoPlay : true` 설정 시 넘기는 시간 간격 설정(ms).

이 외에도 반응형, centerMode 등 다양한 속성을 설정할 수 있다. 자세한 사항은 공식문서로...

### 컴포넌트 반환

먼저 Slider를 import 한다.

```javascript
import Slider from 'react-slick'
```

그 후 Slider 컴포넌트의 props로 속성값을 설정한 객체 변수를 전달하고 하위 컴포넌트로 슬라이더에 넣을 컴포넌트들을 배치해준다.

나는 NFT 에셋들을 보여줘야 하기 때문에 Asset 컴포넌트를 map을 활용해 넘겨주었다.

```javascript
<Slider {...settings}>
  {assets.map((asset, index) => {
    return (
      <React.Fragment key={index}>
        <SliderAsset
          title={asset['title']}
          author={asset['author']}
          introduce={''}
        />
      </React.Fragment>
    )
  })}
</Slider>
```

이렇게 적용하면 화면엔 아래와 같이 슬라이더가 잘 보여진다.

![image](https://user-images.githubusercontent.com/76273383/169477167-5695715f-f5cf-45d3-9544-bb3ded126dcc.png)

## ❗문제점

해당 라이브러리를 사용하면서 느낀 대표적인 문제점이 있다.

한 Slider 내에 컴포넌트를 2개 이상 보여줘야 할 경우 + 각 컴포넌트 사이에 gap을 줄 경우에 컴포넌트들이 짤려서 출력되는 현상이 있디.

![image](https://user-images.githubusercontent.com/76273383/169485040-961f5b8d-8795-481e-b7ab-ea0a163dfb7f.png)

해당 현상의 근본적인 해결책은 Slider 내의 각 컴포넌트의 width와 gap을 더한 값을 Slider을 감싼 div의 width로 적용해야 한다.

게다가 이번 프로젝트는 웹과 모바일 모두를 반영하는 반응형 웹을 구현해야 했기 때문에 vw를 활용하여 width를 화면의 크기에 맞게 조절해야 했다.

## 🚗 마무리

이 라이브러리를 사용하면서 아직 반응형 웹에 대한 구현 능력이 많이 부족하다는 것을 깨달았다.

`@media` 쿼리를 덕지덕지 붙이는 것도 한계가 있어 반응형 웹에 대해 더 많이 공부해야겠다.
