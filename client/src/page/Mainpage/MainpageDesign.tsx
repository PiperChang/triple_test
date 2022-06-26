import styled, { keyframes } from 'styled-components'

import logo from '../../assets/triple2x.png'

const fadeIn = keyframes`
from {
  opacity: 0;
  margin-top: 10px;
}
to {
  opacity: 1;
  margin-top: 0px;
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

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  animation-delay: 100ms;
  div {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }
  strong {
    font-weight: bold;
  }
`

export {
  AwardsItem,
  AwardsContainer,
  ContentLogo,
  Section,
  SectionContainer,
  MetricsContainer,
}
