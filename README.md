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
초기엔 Rerender가 일어나야 할 부분이 없고, 코드양이 많지 않아, 하나의 Component로 구성하려 함. 이 후, 가독성을 위해, Design file과  MetricsContainer 부분을 분리. 

### 상태관리
숫자 증가 에니메이션을 별도로 state 사용하지 않고 useRef와 setInterval 이용하여 구현.
