# triple_test
트리플 과제 테스트

# 프로젝트 실행 방법
Before you test the project, install modules to do it.

`npm install`

If you want to run the project without build,

`npm run start`

If you want to run the production mode, run below commands.

`npm run build
`

`npm run start`

You can check the project on this address.

`http://localhost:3000`

# 사용한 기술
- React
- Typescript : To check error explcitly and to use built-in method of each data type easily. 
- Styled-component : To make code brief by using props of element (To take advantage of CSS-in-JS + Most familiar styling library 😋)

# 구현 순서
- Setting(ESLint, Prettier)
- MarkUp & Styling
- Animation(Opacity)
- Animation(Number increasement)
- Animation(Float up)

# 특이사항
### 컴포넌트 나눈 기준
초기엔 Rerender가 일어나야 할 부분이 없고, 코드양이 많지 않아, 하나의 Component로 구성하려 함. 이 후, 가독성을 위해 MetricsContainer 컴포넌트만 분리. 
Design file.

### 상태관리
숫자 증가 에니메이션을 별도로 state 사용하지 않고 useRef와 setInterval 이용하여 구현.

#### 결과는>
참패

### 왜 떨어졌을까?
1. 컴포넌트를 어떻게 나누는지 평가
- 사용한 state가 없으니깐, 재렌더링도 안일어난다고 생각했다. 그러니깐, 굳이 컴포넌트를 나눌 필요가 없다고 생각했다. 가독성을 위해서, styled component로 만든 태그 단위로 컴포넌트를 묶었어야 했을까?
2. 적절한 위치에서 상태 관리. 
- 상태를 썻어야했다는 뜻이었네
3. 협업하기 좋은 개발자인가?
- 컨벤션에 맞는 커밋 메세지 사용하자.
4. 일관된 코드 스타일이었나?
잘 모르겠다..
