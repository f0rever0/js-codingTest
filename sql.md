```md
# 적는 순서

SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY - LIMIT

# 실행 순서

FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY - LIMIT

# 적는 순서

SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY - LIMIT

# 실행 순서

FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY - LIMIT₩
```

### SELECT

-> 중복제거 : SELECT DISTINCE COLUMN FROM TABLE

### JOIN -> 기본 INNER JOIN (교집합), OUTER JOIN(합집합)

https://superman28.tistory.com/23

#### LEFT OUTER JOIN

https://chanhuiseok.github.io/posts/db-7/

```sql
천재지변으로 인해 일부 데이터가 유실되었습니다. 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을 ID 순으로 조회하는 SQL문을 작성해주세요.

SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_OUTS O LEFT OUTER JOIN ANIMAL_INS I
ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE I.ANIMAL_ID IS NULL
ORDER BY O.ANIMAL_ID

왼쪽에 outs는 무조건 데리고 오고 , 거기서 ins가 없는건 null처리
outs가 더 크니까 여기서는 left가 outs

```

```sql
PRODUCT 테이블과 OFFLINE_SALE 테이블에서 상품코드 별 매출액(판매가 * 판매량) 합계를 출력하는 SQL문을 작성해주세요. 결과는 매출액을 기준으로 내림차순 정렬해주시고 매출액이 같다면 상품코드를 기준으로 오름차순 정렬해주세요.


SELECT P.PRODUCT_CODE , SUM(P.PRICE * O.SALES_AMOUNT) AS 'SALES'
FROM PRODUCT P INNER JOIN OFFLINE_SALE  O
ON P.PRODUCT_ID = O.PRODUCT_ID
GROUP BY P.PRODUCT_CODE
ORDER BY SALES DESC , P.PRODUCT_CODE ASC;

'경제' 카테고리에 속하는 도서들의 도서 ID(BOOK_ID), 저자명(AUTHOR_NAME), 출판일(PUBLISHED_DATE) 리스트를 출력하는 SQL문을 작성해주세요.
결과는 출판일을 기준으로 오름차순 정렬해주세요


SELECT B.BOOK_ID, A.AUTHOR_NAME, DATE_FORMAT(B.PUBLISHED_DATE, "%Y-%m-%d") as PUBLISHED_DATE
FROM BOOK B INNER JOIN AUTHOR A
ON B.AUTHOR_ID = A.AUTHOR_ID
WHERE CATEGORY = "경제"
ORDER BY PUBLISHED_DATE ASC
```

### WHERE LIKE (조건) -> A\__ , %A (_:정해진 글자 수, % : 글자 수 상관없음)

```sql
SELECT ...
FROM ...
WHERE ID BETWEEN 10 AND 40


SELECT CATEGORY,PRICE as MAX_PRICE,PRODUCT_NAME
FROM FOOD_PRODUCT
WHERE (PRICE) IN (SELECT MAX(PRICE) FROM FOOD_PRODUCT GROUP BY CATEGORY)
AND CATEGORY IN ('과자', '국', '김치', '식용유') // 해당 카테고리만 출력하려면 IN
ORDER BY PRICE DESC
```

---

### SUM

### MAX

```sql
SELECT MAX(PRICE) AS MAX_PRICE FROM PRODUCT
```

### MIN

### COUNT -> COUNT (DISTINCT NAME) : NAME열에서 중복 제거한 개수

---

= , <=, <>(!==)

ASC : 오름차순
DESC : 내림차순
LIMIT(1) : 1번째 행 LIMIT(2,6) : 2~6번째 행

```sql
WHERE PRICE = (SELECT MAX(PRICE) FROM FOOD_PRODUCT)
```

---

// 해당 column의 값 중 NULL이 있으면, 대체값 입력
SELECT IFNULL(COLUMN, 대체값)

---

// 제곱
POW(밑, 지수)
// 절댓값
ABS(숫자)
// 수를 지정된 소수점 자리까지 버림하여 반환
TRUNCATE(수, [, 자릿수])

---

// 반올림
ROUND(숫자, 몇 번째 자리에서 올릴 건지)
// 올림
CEILING(숫자) 
// 내림 
FLOOR(숫자)

---

### GROUP BY

#### COUNT(\*)는 모든 행의 개수를 센다

이 쿼리는 같은 도시에 살고있는 사람들을 그룹핑한다음에 그 도시에 사는 사람들이 가진 돈의 총합을 구하는 쿼리다.

```sql
SELECT Person.city, SUM(Person.money) from Person
GROUP BY Person.city;
```

동물 보호소에 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL문을 작성해주세요. 이때 결과는 이름이 없는 동물은 집계에서 제외하며, 결과는 이름 순으로 조회해주세요.

```sql
SELECT NAME, COUNT(NAME) AS 'COUNT' FROM ANIMAL_INS
WHERE NAME IS NOT NULL
GROUP BY NAME
HAVING COUNT(NAME) >= 2
ORDER BY NAME
// (having을 group by와 order by 위에 쓰기)
```

```sql
SELECT  ice.INGREDIENT_TYPE  , SUM(fir.TOTAL_ORDER) AS 'TOTAL_ORDER'
FROM ICECREAM_INFO ice, FIRST_HALF  fir
WHERE ice.FLAVOR = fir.FLAVOR
GROUP BY ice.INGREDIENT_TYPE
ORDER BY TOTAL_ORDER ASC

SELECT INGREDIENT_TYPE, SUM(TOTAL_ORDER) AS TOTAL_ORDER
FROM FIRST_HALF INNER JOIN ICECREAM_INFO ON FIRST_HALF.FLAVOR = ICECREAM_INFO.FLAVOR
GROUP BY INGREDIENT_TYPE
ORDER BY TOTAL_ORDER ASC;

// 이렇게 inner join 하고 반드시 ON 을 이용하여 두 테이블의 key 를 이어주는 걸 잊지말자!
```

APPOINTMENT 테이블에서 2022년 5월에 예약한 환자 수를 진료과코드 별로 조회하는 SQL문을 작성해주세요. 이때, 컬럼명은 '진료과 코드', '5월예약건수'로 지정해주시고 결과는 진료과별 예약한 환자 수를 기준으로 오름차순 정렬하고, 예약한 환자 수가 같다면 진료과 코드를 기준으로 오름차순 정렬해주세요.

```sql
SELECT MCDP_CD AS "진료과코드", COUNT(MCDP_CD) AS "5월예약건수" FROM APPOINTMENT
WHERE MONTH(APNT_YMD) = 5
GROUP BY MCDP_CD
ORDER BY COUNT(MCDP_CD) ASC, MCDP_CD ASC
```

CAR_RENTAL_COMPANY_CAR 테이블에서 '통풍시트', '열선시트', '가죽시트' 중 하나 이상의 옵션이 포함된 자동차가 자동차 종류 별로 몇 대인지 출력하는 SQL문을 작성해주세요. 이때 자동차 수에 대한 컬럼명은 CARS로 지정하고, 결과는 자동차 종류를 기준으로 오름차순 정렬해주세요.

```sql
SELECT CAR_TYPE, COUNT(CAR_TYPE) AS CARS FROM CAR_RENTAL_COMPANY_CAR
WHERE OPTIONS LIKE '%열선시트%' OR OPTIONS LIKE '%통풍시트%' OR OPTIONS LIKE '%가죽시트%'
GROUP BY CAR_TYPE
ORDER BY CAR_TYPE ASC;
```

---

### 실행 순서

SELECT - 5순위 (필수)

FROM - 1순위 (필수)

WHERE - 2순위

GROUP BY - 3순위

HAVING - 4순위

ORDER BY - 6순위

(having을 group by와 order by 위에 쓰기)

---

### DATE

```sql
# 각 연/월/일을 가져오기
YEAR(날짜), MONTH(날짜), DAY(날짜), DATE(날짜)

# 형 변환
1) DATE_FORMAT(날짜, 원하는 format) ex. %Y-%m-%d
2) TO_DATE(날짜, 원하는 format)

# format
Y = 2022, y=22, M=October, m=10 뭐 이런 식~

# 더하기/빼기
// (날짜, INTERVAL_더할/뺄 숫자_단위)
DATE_ADD(DATE, INTERVAL 1 HOUR)
DATE_SUB(DATE, INTERVAL 1 HOUR)

# 차이 구하기
DATEDIFF(날짜1, 날짜2) => '일(DAY)' 기준
TIMESTAMPDIFF(단위, 날짜1, 날짜2) => 단위 기준
```

---

### NULL 처리

```sql
SELECT ANIMAL_TYPE,	IFNULL(NAME,'No name') AS NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
ORDER BY ANIMAL_ID ASC

-> NAME 에 null 있으면 'No name' 으로 처리하기
```

### LIMIT

LIMIt 3 -> 3행까지만 조회, 맨 마지막 줄에 적기
