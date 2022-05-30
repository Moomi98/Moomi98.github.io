---
title: Docker 기본 개념
date: 2022-05-30 13:05:32
category: cloud service
thumbnail: { thumbnailSrc }
draft: false
---

## 🐋 Docker란?

Docker는 컨테이너 기반의 오픈소스 가상화 플랫폼이다.

기존에는 주로 OS 가상화를 통해 호스트 OS 위에 게스트 OS를 돌리는 방식으로 작동했다.

이러한 방식은 OS를 자유롭게 사용할 수 있지만, 무겁고 느리다는 단점이 있다.

이를 해결하기 위해 프로세스 단위로 가상화를 하는 방법이 등장했고, 이 중 리눅스에서 지원하는 **리눅스 컨테이너**를 활용한 가상화 플랫폼이 Docker이다.

## 🪄 실행 방법

### 1. repository 인덱스 갱신하기

```shell
sudo apt update
```

### 2. Docker 다운을 위해 필요한 패키지 설치

```shell
sudo apt install apt-transport-https
sudo apt install ca-certificates
sudo apt install curl
sudo apt install software-properties-common

```

### 3. curl 명령어로 Docker 다운로드

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add
```

### 4. repository에 경로 추가

```shell
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
```

### 5. Docker 설치

```shell
apt-cache policy docker-ce
sudo apt install docker-ce
```

### 6. 이미지 다운로드

```shell
sudo docker pull hello-world
sudo docker images
sudo docker run hello-world
sudo docker ps -a
sudo docker rm (containerID}
sudo docker images
```
