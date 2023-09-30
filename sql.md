SELECT
JOIN -> 기본 INNER JOIN (교집합), OUTER JOIN(합집합)
WHERE LIKE (조건) -> A\__ , %A (_:정해진 글자 수, % : 글자 수 상관없음)

```sql
SELECT CATEGORY,PRICE as MAX_PRICE,PRODUCT_NAME
FROM FOOD_PRODUCT
WHERE (PRICE) IN (SELECT MAX(PRICE) FROM FOOD_PRODUCT GROUP BY CATEGORY)
AND CATEGORY IN ('과자', '국', '김치', '식용유') // 해당 카테고리만 출력하려면 IN
ORDER BY PRICE DESC
```

SUM
MAX
MIN
COUNT -> COUNT (DISTINCT NAME) : NAME열에서 중복 제거한 개수

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

// 해당 column의 값 중 NULL이 있으면, 대체값 입력
SELECT IFNULL(COLUMN, 대체값)

// 제곱
POW(밑, 지수)
// 절댓값
ABS(숫자)

// 반올림
ROUND(숫자, 몇 번째 자리에서 올릴 건지)
// 올림
CEILING(숫자) 
// 내림 
FLOOR(숫자)
