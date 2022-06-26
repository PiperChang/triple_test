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
      let count = 0
      if (ref.current !== null) {
        const max = parseInt(ref.current.innerHTML)
        const a = setInterval(() => {
          if (ref.current !== null) {
            if (count < max) {
              count += 1
              ref.current.innerText = count.toString()
            } else {
              clearInterval(a)
            }
          }
        }, 10)
      }
    })
  })

  return (
    <Container>
      <div>
        <strong>
          <span ref={travelerRef}>700</span>만 명
        </strong>
        의 여행자
      </div>
      <div>
        <strong>
          <span ref={reviewRef}>100</span>만 개
        </strong>
        의 여행 리뷰
      </div>
      <div>
        <strong>
          <span ref={scheduleRef}>470</span>만 개
        </strong>
        의 여행 일정
      </div>
    </Container>
  )
}

export default MetricsContainer
