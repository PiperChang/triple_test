import styled, { keyframes } from 'styled-components'

import logo from '../assets/triple2x.png'
import googlePlayStore from '../assets/play-store2x.png'
import appleAppStore from '../assets/badge-apple4x.png'

import MetricsContainer from './MetricsContainer'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  .fadeIn {
    opacity: 0;
    animation-name: ${fadeIn};
    animation-duration: 700ms;
    animation-fill-mode: forwards;
  }
`
const Section = styled.section`
  width: 1040px;
  height: auto;
  margin: 0px auto;
  position: relative;
`
const ContentLogo = styled.div`
  width: 400px;
  height: 338px;
  padding: 280px 0 0;
  position: absolute;
  top: 150px;
  right: 640px;
  text-align: center;
  font-size: 15px;
  line-height: 15px;
  box-sizing: border-box;
  background-size: 400px 338px;
  background-repeat: no-repeat;
  background-image: url(${logo});
  color: rgba(58, 58, 58, 0.7);
`

const AwardsContainer = styled.div`
  margin-left: 623px;
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  animation-delay: 200ms;
`

interface AwardItemProps {
  src: string
}

const AwardsItem = styled.div<AwardItemProps>`
  display: inline-block;
  padding: 5px 0px 5px 62px;
  height: 54px;
  font-size: 14px;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);
  line-height: 22px;
  margin-right: 39px;
  background-image: url(${(props) => props.src});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 54px 54px;
`

const Mainpage = () => {
  return (
    <SectionContainer>
      <Section>
        <ContentLogo className="fadeIn">2021년 12월 기준</ContentLogo>

        <MetricsContainer />
        <AwardsContainer className="fadeIn">
          <AwardsItem src={googlePlayStore}>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardsItem>
          <AwardsItem src={appleAppStore}>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardsItem>
        </AwardsContainer>
      </Section>
    </SectionContainer>
  )
}

export default Mainpage
