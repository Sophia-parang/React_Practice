# Search For Dummies🐣 (서치박스)

<img src="public/searchBoxDemo.gif">

## 🐣 Search For Dummies는?

내장 데이터(data.jsx)를 검색하기 위한 서치박스입니다.

## 🗂️ 주요 기능

✅ 추천 리스트 출력 : 검색어 입력 시 추천 리스트가 출력됩니다. <br>
✅ 검색어 하이라이팅 : 입력한 텍스트와 일치하는 리스트 내 항목을 굵게 표시합니다. <br>
✅ 항목 선택 : 추천 리스트에서 항목 클릭 시 해당 항목의 key가 input field에 출력됩니다. <br>
✅ 타입 태그 : 검색 시 각 항목의 type이 함께 표시됩니다. <br>

✅ 키보드 탐색 : ↑,↓ 키로 추천 리스트에서 이동하고 Enter 키로 선택할 수 있습니다. <br>
✅ Debounce : 입력값 변경 시 300ms 지연 후 필터링이 적용됩니다. <br>
✅ 선택 후 콜백 : 추천리스트에서 항목 선택 시 해당 항목의 key와 type이 console.log에 출력됩니다. <br>
✅ 없음 처리 : 내장 데이터 내 검색 결과가 없을 시 "결과가 없습니다"를 출력합니다. <br>

## 🚀 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/Sophia-parang/React_Practice.git
cd React_Practice/10-search-box
```

이 프로젝트는 `10-search-box`라는 하위 폴더 안에 위치해 있습니다.

### 2. 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 브라우저에서 열기

```bash
http://localhost:5173
```

터미널에 표시되는 주소로 접속하세요.
위 주소는 기본값이며, 포트 번호는 컴퓨터 환경에 따라 달라질 수 있습니다.
