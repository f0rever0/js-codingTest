SELECT
JOIN -> 기본 INNER JOIN (교집합), OUTER JOIN(합집합)
WHERE LIKE (조건) -> A\__ , %A (_:정해진 글자 수, % : 글자 수 상관없음)
SUM
MAX
MIN
COUNT -> COUNT (DISTINCT NAME) : NAME열에서 중복 제거
= , <=, <>(!==)
ASC : 오름차순
DESC : 내림차순
LIMIT(1) : 1번째 행 LIMIT(2,6) : 2~6번째 행

```sql
WHERE PRICE = (SELECT MAX(PRICE) FROM FOOD_PRODUCT)
```
