---
title: RDS μμ± + php μ°λ
date: 2022-05-04 15:05:02
category: cloud service
thumbnail: { thumbnailSrc }
draft: false
---

## π‘ Amazon RDSλ?

μλ§μ‘΄ μΉ μλΉμ€(AWS)κ° μ κ³΅νλ **λΆμ° κ΄κ³ν λ°μ΄ν°λ² μ΄μ€.**

μ νλ¦¬μΌμ΄μ λ΄μμ κ΄κ³ν λ°μ΄ν°λ² μ΄μ€μ μ€μ , μ΄μ, μ€μΌμΌλ§μ λ¨μμΌ νλλ‘ μ€κ³λ ν΄λΌμ°λ λ΄μμ λμνλ μΉ μλΉμ€μ΄λ€.

λ°μ΄ν°λ² μ΄μ€ μννΈμ¨μ΄λ₯Ό ν¨μΉνκ±°λ λ°μ΄ν°λ² μ΄μ€λ₯Ό λ°±μνκ±°λ μμ  λ³΅κ΅¬λ₯Ό νμ±ννλ κ²κ³Ό κ°μ λ³΅μ‘ν κ΄λ¦¬ νλ‘μΈμ€λ€μ μλμΌλ‘ κ΄λ¦¬λλ€. μ€ν λ¦¬μ§μ μ°μ° μμλ€μ μ€μΌμΌλ§νλ κ²μ νλμ API νΈμΆλ‘ μνν  μ μλ€.

## πΎ μΈμ€ν΄μ€ μμ±

**λ°μ΄ν°λ² μ΄μ€ μμ± λ°©μ μ ν**

![image](https://user-images.githubusercontent.com/76273383/166634328-defe0cff-20bf-4085-9646-a1034062139b.png)

\**μμ§ μ ν*8

![image](https://user-images.githubusercontent.com/76273383/166634417-8ec977e5-a9f4-41dd-928f-85658e14031d.png)

**ννλ¦Ώ μ ν**

![image](https://user-images.githubusercontent.com/76273383/166634481-a467ad43-a44f-4e34-b42a-7605b851020f.png)

**κΈ°ν μ€μ  μ μ©**

![image](https://user-images.githubusercontent.com/76273383/166634530-ba7c8e30-5fd6-4d02-abd3-8f6c4b9bf6fa.png)

**μΈμ€ν΄μ€ κ΅¬μ±**

![image](https://user-images.githubusercontent.com/76273383/166634580-e70e38fc-2965-471e-b7c9-f518a9fb6f2e.png)

**κ°μ©μ± λ° λ΄κ΅¬μ± μ€μ **

![image](https://user-images.githubusercontent.com/76273383/166634617-946ea906-544b-4d69-8273-b5b5de0b042d.png)

**VPC μ€μ **

![image](https://user-images.githubusercontent.com/76273383/166634677-aea2b014-bb61-4f5e-a892-7e8b7550d098.png)

## π RDS μ€μΉ νμΈλ²

1. μμ±ν λ°μ΄ν°λ² μ΄μ€ μΈμ€ν΄μ€ μμ VPC λ³΄μ κ·Έλ£Ή ν΄λ¦­

2. μΈλ°μ΄λ κ·μΉ ν­μΌλ‘ μ΄λνμ¬ μΈλ°μ΄λ κ·μΉ νΈμ§ ν΄λ¦­

3. κ·μΉ μΆκ° ν΄λ¦­

   μ ν: MYSQL/Aurora, μ¬μ©μ: AnyWhere-IPv4 ν΄λ¦­ ν κ·μΉ μ μ₯

4. EC2 μ MySQL μ€μΉ

   `$ mysql -V` λ‘ μ€μΉ νμΈ

   `$ sudo yum install mysql` λ‘ μ€μΉ

5. EC2 μμ RDS μΈμ€ν΄μ€ μ κ·Ό RDS μΈμ€ν΄μ€μμ μλν¬μΈνΈ νμΈ ν

   `$ mysql -u {λ§μ€ν° μ¬μ©μ μ΄λ¦} -p -h {RDS μΈμ€ν΄μ€ μλν¬μΈνΈ}` λ‘ RDS μ κ·Ό

## π PHP μ°λνκΈ°

1. `$ php -v` λ‘ λ²μ  νμΈ

2. `$ sudo apt install php7.2-mysql` μλ§μ λ²μ μΌλ‘ μ€μΉ

3. MySQL κ³Ό Apache μ¬μμ

```bash
$ sudo service mysql restart
$ sudo service mysql restart
$ sudo apachectl restart
$ sudo apt update
$ sudo apt-get install mysql-server
$ sudo service mysql restart
$ sudo apachectl restart
```
