import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
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

const MetricsContainer = () => {
  const travelerRef = useRef<HTMLInputElement>(null)
  const reviewRef = useRef<HTMLInputElement>(null)
  const scheduleRef = useRef<HTMLInputElement>(null)
  const refList = [travelerRef, reviewRef, scheduleRef]

  useEffect(() => {
    refList.forEach((ref) => {
      if (ref.current !== null) {
        const max = parseInt(ref.current.innerHTML)
        let percent = 1
        let cnt = 0
        const slowInterval = setInterval(() => {
          if (ref.current !== null) {
            if (cnt >= max) {
              clearInterval(slowInterval)
            } else {
              // eslint-disable-next-line no-console
              console.log(new Date().getTime())
              percent = percent / 1.1
              cnt = Math.ceil(max * (1 - percent))
              ref.current.innerText = cnt.toString()
            }
          }
        }, 30)
      }
    })
  })

  return (
    <Container className="fadeIn">
      <div>
        <strong>
          <span ref={travelerRef}>350</span>만 명
        </strong>
        의 사용자
      </div>
      <div>
        <strong>
          <span ref={reviewRef}>21</span>만 개
        </strong>
        의 리뷰
      </div>
      <div>
        <strong>
          <span ref={scheduleRef}>650</span>만 개
        </strong>
        의 저장
      </div>
    </Container>
  )
}

export default MetricsContainer
