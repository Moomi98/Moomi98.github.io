---
title: webpack에 대해서
date: 2022-04-30 19:04:37
category: dev
thumbnail: { thumbnailSrc }
draft: false
---

## ✏️ webpack 이란?

webpack은 **자바스크립트 파일들을 하나로 번들링**(묶어서) 사용할 수 있게 해주는 도구(module bundler)이다.

즉, 필요한 모든 자바스크립트 파일을 하나의 자바스크립트 파일로 만들어주는 것을 webpack이라 한다.

## ❓ webpack이 왜 필요할까?

- 최근의 웹페이지들은 SPA 방식을 선호하며 하나의 페이지 내에서 동적으로 렌더링 트리를 변경하며 사용하기 때문에 모든 자바스크립트 파일들이 미리 로드되어 있어야 한다.

- 이를 위해 파일을 컴파일 할 때, 여러 파일을 불러오는데 시간이 오래 걸린다.

- 이를 해결하기 위해 여러개의 자바스크립트 파일들을 하나의 파일로 번들링을 해준다.

- 이러면 SPA 적용시에 로딩 시간이 향상되어 웹페이지 성능이 올라간다.

## 🪄 webpack의 원리와 기본 실행

![image](https://user-images.githubusercontent.com/76273383/166103275-dcac0f3b-1270-48c3-bd18-5dc7b5496ec8.png)

webpack은 여러 정적 파일(Javscript, CSS 등)들을 번들링 하여 각각 하나의 static asset으로 만들어낸다.

이러한 파일을 만들어내기 위해 webpack은 다음과 같은 핵심 요소들을 활용합니다.

- Entry

- Output

- Loaders

- Plugins

- Mode

### Entry & Output

Entry는 **webpack building의 시작점**이라 할 수 있다.

```javascript
entry: [
  // dev 모드면 Hot reload(파일의 변경사항 자동 반영) 설정을 추가
  isEnvDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),

  // src/index.js
  paths.appIndexJs
].filter(Boolean), // true값인 결과만 반환
```

Output은 **building된 파일에 결과를 제공**한다.

```javascript
output: {
  // build path, filename 지정
  path: isEnvProduction ? paths.appBuild : undefined,
  filename: isEnvProduction
    ? 'static/js/[name].[contenthash:8].js' // 해시 값을 넣음으로써 로컬에서 캐싱을 유도할 수 있습니다.
    : isEnvDevelopment && 'static/js/bundle.js',
  // more...
},
```

### Loader

Loader는 **번들링할 파일에 대한 규칙을 정하고 실행하는 역할**을 담당한다.

```javascript
loaders: [
  {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    // ...
  },
]
```

Loader에 대해서는 다음 포스팅에 적어보도록 하겠다.

## Plugins

Plugin은 **번들 최적화, 환경 변수 주입과 같은 작업**들을 수행한다.

## Mode

Mode는 **webpack을 실행할 때 지정하는 속성**을 의미한다.

`development`, `production`, `none` 을 지정할 수 있는데, 각 방식에 따라 webpack이 어떠한 방식으로 최적화된 번들링을 제작할지 정할 수 있다.

자세한 설정 방법은 공식 문서를 참조하면 된다.
