---
title: CRA to Next.js 마이그레이션(1)
<<<<<<< HEAD
date: 2022-04-12 23:04:80
=======
date: 2022-04-14 12:04:31
>>>>>>> f332c4b665c7acf1af811eb27ee2e135ecdb3050
category: dev
thumbnail: { thumbnailSrc }
draft: false
---

<<<<<<< HEAD
=======
## 💡개요

현재 Kodeal 이라는 졸업작품을 만들고 있다.

이 서비스의 개선을 위해 CRA로 만들었던 졸업작품에 Next.js를 적용시키기로 했다.

## ✏️ About Next.js

<p align="center"><img src="https://user-images.githubusercontent.com/76273383/163317021-1afca698-3c71-4020-866d-d88ac7c41061.png"/></p>

Next.js는 **React의 프레임워크**중 하나이다. 대표적으로 SSR를 지원한다.

이 외에도 디렉토리 구조를 통한 **페이지 기반 라우팅**, **built-in-CSS**, **Image Optimization** 등의 개발 편의성 및 서비스 성능 향상 등을 위한 많은 기능들을 제공한다.

SSR에 대해서는 추후 포스팅을 진행할 예정이다. 혹은 구글에 훌륭하신 분들이 깔끔하게 정리해 놓은 글들을 보는 것도 많은 도움이 될 것이다.

## 💾 설치

먼저 기존 CRA에서 사용중인 dependency중 Next.js에서 필요없는 것을 제거한다.

```c
    npm uninstall react-scripts react-router-dom
    // yarn remove react-scripts react-router-dom
```

그 후 Next.js를 설치한다

```c
    npm install next
    // yarn add next
```

## 📌 기본 설정

설치 후 package.json의 script를 Next.js에 맞게 다음과 같이 수정한다.

```javascript
{
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start",
	}
}
```

## 📁 디렉토리 구조 변경

Next.js에서 사용되는 기본적인 파일 구조는 다음과 같다.

- `/public` : 이미지와 같은 asset 파일
- `/pages` : 페이지 관련 jsx 혹은 tsx

나는 위 디렉토리 구조를 기반으로 파일 구조를 변경하였다.

![image](https://user-images.githubusercontent.com/76273383/163315577-fa8aaf73-0435-42e7-b79c-c9a7c004db89.png)

## 🪄 index.ts 구현

Next.js는 `pages/index.ts(js)` 를 페이지의 첫 화면으로 띄워준다. 프로젝트 실행 시 원하는 첫 화면을 구성하면 된다. 또한 헤더의 설정도 이곳에서 진행한다. 기존 html 태그인 `<head>` 가 아닌 Next.js에서 제공하는 `<Head>` 태그를 사용하면 된다. 이 태그를 사용하면 SEO가 잘 적용되도록 웹페이지가 구성된다고 한다.

```javascript
import MainPage from 'pages/main'
import Head from 'next/head'
import styled from 'styled-components'

const Index = (): JSX.Element => {
  return (
    <>
      <AppContainer>
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="#" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <title>Kodeal</title>
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        </Head>
        <MainPage></MainPage>
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export default Index
```

여기까지만 적용해도 기본적인 Next.js migration은 성공적으로 끝난다.

다음 포스팅에는 Next.js에 styled-component 적용기 및 라우팅 방법을 적어보도록 하겠다.
>>>>>>> f332c4b665c7acf1af811eb27ee2e135ecdb3050
