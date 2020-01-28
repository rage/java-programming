import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"
import { BarChart, Bar, XAxis, YAxis, LabelList, Tooltip } from "recharts"
import { improveGroupName } from "../../util/strings"
import CustomTooltip from "./CustomTooltip"
import { SMALL_MEDIUM_BREAKPOINT } from "../../util/constants"
import { getCourseVariant } from "../../services/moocfi"
import { withTranslation } from "react-i18next"

const PartProgressContainer = styled.div`
  margin-bottom: 0.5rem;
`

const SmallP = styled.p`
  font-size: 0.8rem;
`

const LargeP = styled.p`
  font-size: 1rem;
`

const StyledBarChart = styled(BarChart)`
  margin: 0 auto;
  @media only screen and (max-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    font-size: 0.75rem;
  }
`

const CustomLabel = ({ x, y, stroke, value }) => {
  return (
    <text
      x={x}
      y={y}
      dy={23}
      dx={value < 15 ? 12 : value}
      fill={stroke}
      fontSize={10}
      textAnchor="middle"
    >
      {value}%
    </text>
  )
}

const PartProgress = ({ name, data, appliesForStudyRight, t }) => {
  var BAR_CHART_WIDTH = 375
  var BAR_CHART_Y_AXIS_WIDTH = 142

  if (window.innerWidth < SMALL_MEDIUM_BREAKPOINT.slice(0, -2)) {
    BAR_CHART_WIDTH = 300
    BAR_CHART_Y_AXIS_WIDTH = 110
  }

  const allChartData = Object.entries(data).map(([tool, data]) => {
    return {
      tool,
      progress: Math.floor(data.progress * 100 + 0.000000001),
      n_points: data.n_points,
      max_points: data.max_points,
    }
  })
  let nPointsSum = 0
  let maxPointsSum = 0

  Object.entries(data).forEach(([_tool, data]) => {
    nPointsSum += data.n_points
    maxPointsSum += data.max_points
  })
  let totalProgress = Math.floor((nPointsSum / maxPointsSum) * 100) / 100
  allChartData.push({
    tool: "Total points",
    progress: Math.floor(totalProgress * 100 + 0.000000001),
    n_points: nPointsSum,
    max_points: maxPointsSum,
  })
  return (
    <PartProgressContainer>
      <b>{improveGroupName(name)}</b>
      <div>
        <StyledBarChart
          layout="vertical"
          width={BAR_CHART_WIDTH}
          height={60 * allChartData.length}
          data={allChartData}
        >
          <Tooltip content={<CustomTooltip />} />
          <XAxis domain={[0, 100]} dataKey="progress" type="number" />
          <YAxis
            width={BAR_CHART_Y_AXIS_WIDTH}
            type="category"
            dataKey="tool"
          />
          <Bar dataKey="progress" fill="#f1a9a0">
            <LabelList
              content={CustomLabel}
              dataKey="progress"
              position="middle"
            />
          </Bar>
        </StyledBarChart>
      </div>
    </PartProgressContainer>
  )
}

export default withTranslation("points-balloon")(
  withSimpleErrorBoundary(PartProgress),
)
