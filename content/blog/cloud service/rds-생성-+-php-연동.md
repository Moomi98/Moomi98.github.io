---
title: RDS 생성 + php 연동
date: 2022-05-04 15:05:02
category: cloud service
thumbnail: { thumbnailSrc }
draft: false
---

## 💡 Amazon RDS란?

아마존 웹 서비스(AWS)가 제공하는 **분산 관계형 데이터베이스.**

애플리케이션 내에서 관계형 데이터베이스의 설정, 운영, 스케일링을 단순케 하도록 설계된 클라우드 내에서 동작하는 웹 서비스이다.

데이터베이스 소프트웨어를 패치하거나 데이터베이스를 백업하거나 시점 복구를 활성화하는 것과 같은 복잡한 관리 프로세스들은 자동으로 관리된다. 스토리지와 연산 자원들을 스케일링하는 것은 하나의 API 호출로 수행할 수 있다.

## 💾 인스턴스 생성

**데이터베이스 생성 방식 선택**

![image](https://user-images.githubusercontent.com/76273383/166634328-defe0cff-20bf-4085-9646-a1034062139b.png)

\**엔진 선택*8

![image](https://user-images.githubusercontent.com/76273383/166634417-8ec977e5-a9f4-41dd-928f-85658e14031d.png)

**템플릿 선택**

![image](https://user-images.githubusercontent.com/76273383/166634481-a467ad43-a44f-4e34-b42a-7605b851020f.png)

**기타 설정 적용**

![image](https://user-images.githubusercontent.com/76273383/166634530-ba7c8e30-5fd6-4d02-abd3-8f6c4b9bf6fa.png)

**인스턴스 구성**

![image](https://user-images.githubusercontent.com/76273383/166634580-e70e38fc-2965-471e-b7c9-f518a9fb6f2e.png)

**가용성 및 내구성 설정**

![image](https://user-images.githubusercontent.com/76273383/166634617-946ea906-544b-4d69-8273-b5b5de0b042d.png)

**VPC 설정**

![image](https://user-images.githubusercontent.com/76273383/166634677-aea2b014-bb61-4f5e-a892-7e8b7550d098.png)

## 🔍 RDS 설치 확인법

1. 생성한 데이터베이스 인스턴스 에서 VPC 보안 그룹 클릭

2. 인바운드 규칙 탭으로 이동하여 인바운드 규칙 편집 클릭

3. 규칙 추가 클릭

   유형: MYSQL/Aurora, 사용자: AnyWhere-IPv4 클릭 후 규칙 저장

4. EC2 에 MySQL 설치

   `$ mysql -V` 로 설치 확인

   `$ sudo yum install mysql` 로 설치

5. EC2 에서 RDS 인스턴스 접근 RDS 인스턴스에서 엔드포인트 확인 후

   `$ mysql -u {마스터 사용자 이름} -p -h {RDS 인스턴스 엔드포인트}` 로 RDS 접근

## 🔗 PHP 연동하기

1. `$ php -v` 로 버전 확인

2. `$ sudo apt install php7.2-mysql` 알맞은 버전으로 설치

3. MySQL 과 Apache 재시작

```bash
$ sudo service mysql restart
$ sudo service mysql restart
$ sudo apachectl restart
$ sudo apt update
$ sudo apt-get install mysql-server
$ sudo service mysql restart
$ sudo apachectl restart
```
