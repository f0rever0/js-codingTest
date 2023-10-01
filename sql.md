SELECT
-> 중복제거 : SELECT DISTINCE COLUMN FROM TABLE
JOIN -> 기본 INNER JOIN (교집합), OUTER JOIN(합집합)
WHERE LIKE (조건) -> A\__ , %A (_:정해진 글자 수, % : 글자 수 상관없음)

```sql
SELECT CATEGORY,PRICE as MAX_PRICE,PRODUCT_NAME
FROM FOOD_PRODUCT
WHERE (PRICE) IN (SELECT MAX(PRICE) FROM FOOD_PRODUCT GROUP BY CATEGORY)
AND CATEGORY IN ('과자', '국', '김치', '식용유') // 해당 카테고리만 출력하려면 IN
ORDER BY PRICE DESC
```

---

SUM
MAX

```sql
SELECT MAX(PRICE) AS MAX_PRICE FROM PRODUCT
```

MIN
COUNT -> COUNT (DISTINCT NAME) : NAME열에서 중복 제거한 개수

---

= , <=, <>(!==)

SELECT ...
FROM ...
WHERE ID BETWEEN 10 AND 40

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

// GROUP BY
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

// 실행 순서
SELECT - 5순위 (필수)

FROM - 1순위 (필수)

WHERE - 2순위

GROUP BY - 3순위

HAVING - 4순위

ORDER BY - 6순위

(having을 group by와 order by 위에 쓰기)

---

// DATE

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

// NULL 처리

```sql
SELECT ANIMAL_TYPE,	IFNULL(NAME,'No name') AS NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
ORDER BY ANIMAL_ID ASC

-> NAME 에 null 있으면 'No name' 으로 처리하기
```
