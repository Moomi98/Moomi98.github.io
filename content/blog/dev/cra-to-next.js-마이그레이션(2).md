---
title: CRA to Next.js 마이그레이션(2)
date: 2022-04-15 21:04:97
category: dev
thumbnail: { thumbnailSrc }
draft: false
---

## 🧸 styled-component 적용

styled-component를 next.js에서 사용하려면 약간의 과정이 필요하다.

먼저 babel-plugin-styled-components를 설치한다.

```c
    npm i -D babel-plugin-styled-components
    // yarn add -D babel-plugin-styled-components
```

그후 root 폴더 밑에 `.babelrc` 파일을 생성해준다.

이제 아래와 같이 styled-component 플러그인을 적용해준다.

```javascript
    {
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}

```

이 상태로 `yarn dev`를 실행하면 css가 적용되지 않은채로 잠깐 보였다가 이후에 css가 적용된다.

원인은 styled-component에 SSR이 적용되지 않아서 그렇다.

이에 Next.js 공식문서에는 `renderPage` 를 사용하면 해결할 수 있다고 적혀있다.

root 밑에 `_document.js` 파일을 생성하고 아래와 같이 작성한다.

아래 예제는 styled-component 공식문서의 예제를 응용한 것이다.

```javascript
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

## ⚙ Routing 방법

Next.js에서는 react-router-dom을 사용하지 않고 자체적으로 제공하는 라우팅 함수들이 있다.

react-router-dom과 유사하게 Link 컴포넌트를 이용하여 라우팅을 할 수 있다.

href속성로 파일 경로를 적어주면 해당 페이지를 띄워주게 된다.

혹은 `useRouter()` 의 push() 함수를 이용하여 파일 경로를 적어주면 동적으로 라우팅을 할 수 있다.

```javascript
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Notes = () => {
  const router = useRouter()
  const { params } = router.query
  return (
    <div>
      <h1> Note</h1>
      <Link href="/notes1">note 1</Link>
      <button onClick={() => router.push('/notes2')}>note 2</button>
    </div>
  )
}

export default Notes
```
