---
title: linux 명령어 2
date: 2022-04-08 00:04:93
category: cloud service
thumbnail: { thumbnailSrc }
draft: false
---

## 절대경로와 상대경로

절대경로 : root부터 현재 디렉토리까지의 고정된 경로를 표현

상대경로 : 현재 위치한 곳을 기준으로 해서 해당 디렉토리의 위치를 표현

## 패키지 다운로드

apt-get : root 권한이 있어야만 사용 가능 -> sudo 명령어로 root 권한을 잠시 빌릴 수 있음

## 패스워드 설정

`sudo passwd root`

여기서 `sudo` 란 root 관리자의 권한을 1회성으로 빌려오는 명령어이다.

## 유저 변경

`su`

root로 변경 => `su - root`

다시 일반 유저로 변경 => `exit`

## 권한

| rwx  | rwx   | rwx   |
| ---- | ----- | ----- |
| user | group | other |

r : read

w : write

x : execute

## 권한 변환

`chmod`

방법 1: 숫자로 변경 (이진수 활용)

r : 4, w : 2, x : 1

```
//  user에게 읽기, 쓰기, 실행 권한 부여
// group, other 에게 읽기, 실행 권한 부여
$ chmod 755 file1

```

방법 2 : 문자열로 변경

```
// user에게 file1 파일에 대해 읽기, 쓰기 권한 부여
$ chmod u+rw file1
```

## 파일 소유자 변경

```
chown ubuntu rfile1
```

## 파일 내용 덮어쓰기

cat file1 >> file2

## 문서 안의 특정 문자열 찾기

grep 문자열 파일명

-w : 해당 문자만 찾아줌
