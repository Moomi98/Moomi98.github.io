---
title: Docker ๊ธฐ๋ณธ ๊ฐ๋
date: 2022-05-30 13:05:32
category: cloud service
thumbnail: { thumbnailSrc }
draft: false
---

## ๐ Docker๋?

Docker๋ ์ปจํ์ด๋ ๊ธฐ๋ฐ์ ์คํ์์ค ๊ฐ์ํ ํ๋ซํผ์ด๋ค.

๊ธฐ์กด์๋ ์ฃผ๋ก OS ๊ฐ์ํ๋ฅผ ํตํด ํธ์คํธ OS ์์ ๊ฒ์คํธ OS๋ฅผ ๋๋ฆฌ๋ ๋ฐฉ์์ผ๋ก ์๋ํ๋ค.

์ด๋ฌํ ๋ฐฉ์์ OS๋ฅผ ์์ ๋กญ๊ฒ ์ฌ์ฉํ  ์ ์์ง๋ง, ๋ฌด๊ฒ๊ณ  ๋๋ฆฌ๋ค๋ ๋จ์ ์ด ์๋ค.

์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด ํ๋ก์ธ์ค ๋จ์๋ก ๊ฐ์ํ๋ฅผ ํ๋ ๋ฐฉ๋ฒ์ด ๋ฑ์ฅํ๊ณ , ์ด ์ค ๋ฆฌ๋์ค์์ ์ง์ํ๋ **๋ฆฌ๋์ค ์ปจํ์ด๋**๋ฅผ ํ์ฉํ ๊ฐ์ํ ํ๋ซํผ์ด Docker์ด๋ค.

## ๐ช ์คํ ๋ฐฉ๋ฒ

### 1. repository ์ธ๋ฑ์ค ๊ฐฑ์ ํ๊ธฐ

```shell
sudo apt update
```

### 2. Docker ๋ค์ด์ ์ํด ํ์ํ ํจํค์ง ์ค์น

```shell
sudo apt install apt-transport-https
sudo apt install ca-certificates
sudo apt install curl
sudo apt install software-properties-common

```

### 3. curl ๋ช๋ น์ด๋ก Docker ๋ค์ด๋ก๋

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add
```

### 4. repository์ ๊ฒฝ๋ก ์ถ๊ฐ

```shell
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
```

### 5. Docker ์ค์น

```shell
apt-cache policy docker-ce
sudo apt install docker-ce
```

### 6. ์ด๋ฏธ์ง ๋ค์ด๋ก๋

```shell
sudo docker pull hello-world
sudo docker images
sudo docker run hello-world
sudo docker ps -a
sudo docker rm (containerID}
sudo docker images
```
