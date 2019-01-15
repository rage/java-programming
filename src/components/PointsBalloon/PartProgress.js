import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"
import { BarChart, Bar, XAxis, YAxis, LabelList, Tooltip } from "recharts"
import { improveGroupName } from "../../util/strings"
import CustomTooltip from "./CustomTooltip"

const PartProgressContainer = styled.div`
  margin-bottom: 0.5rem;
`

const SmallP = styled.p`
  font-size: 0.8rem;
`

const LargeP = styled.p`
  font-size: 1rem;
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

const PartProgress = ({ name, data, appliesForStudyRight }) => {
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
    tool: "Tehtäväpisteet yhteensä",
    progress: Math.floor(totalProgress * 100 + 0.000000001),
    n_points: nPointsSum,
    max_points: maxPointsSum,
  })
  return (
    <PartProgressContainer>
      <b>{improveGroupName(name)}</b>
      <div>
        <BarChart
          layout="vertical"
          width={350}
          height={60 * allChartData.length}
          data={allChartData}
        >
          <Tooltip content={<CustomTooltip />} />
          <XAxis domain={[0, 100]} dataKey="progress" type="number" />
          <YAxis width={142} type="category" dataKey="tool" />
          <Bar dataKey="progress" fill="#f1a9a0">
            <LabelList
              content={CustomLabel}
              dataKey="progress"
              position="middle"
            />
          </Bar>
        </BarChart>
        <LargeP>
          Osasta saadut kurssipisteet:{" "}
          {Math.floor(Math.min(100, totalProgress * 111.112))}
          /100.
        </LargeP>
        {appliesForStudyRight && (
          <SmallP>
            Opinto-oikeuteen vaaditaan 90% ohjelmointitehtävien pisteistä.
            Edistymisesi tällä hetkellä:{" "}
            {allChartData.find(o => o.tool === "Ohjelmointitehtävät")?.progress}
            %.
          </SmallP>
        )}
      </div>
    </PartProgressContainer>
  )
}

export default withSimpleErrorBoundary(PartProgress)
