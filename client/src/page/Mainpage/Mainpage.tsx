import googlePlayStore from '../../assets/play-store2x.png'
import appleAppStore from '../../assets/badge-apple4x.png'

import {
  AwardsItem,
  AwardsContainer,
  ContentLogo,
  Section,
  SectionContainer,
} from './MainpageDesign'
import MetricsSection from './MetricsSection'

const Mainpage = () => {
  return (
    <SectionContainer>
      <Section>
        <ContentLogo className="fadeIn">2021년 12월 기준</ContentLogo>
        <MetricsSection />
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
