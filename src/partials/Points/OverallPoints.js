import React from "react"
import { Card, CardContent, Typography, Button } from "@material-ui/core"
import { LinearProgress } from "@material-ui/core"
import styled from "styled-components"

const ProgressLineContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  div {
    height: 20px;
  }
`

const StyledLinearProgress = styled(LinearProgress)`
  flex: 1;
  margin-left: 10px;
`

export default ({ courseName, progress, refetch }) => {
  const data = progress.user_course_progress.progress.sort((a, b) =>
    a.group.localeCompare(b.group, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  )
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {courseName}
        </Typography>

        {data.map((group) => {
          return (
            <>
              <ProgressLineContainer>
                <Typography>{group.group}</Typography>
                <StyledLinearProgress
                  variant="determinate"
                  value={group.progress * 100}
                />
              </ProgressLineContainer>
            </>
          )
        })}
        <Button
          onClick={() => {
            refetch()
          }}
        >
          Refresh
        </Button>
      </CardContent>
    </Card>
  )
}
