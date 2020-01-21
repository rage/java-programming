import React from "react"
import { Card, CardContent, Typography } from "@material-ui/core"

export default ({ points }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        Pisteet: {points.group}
      </Typography>
    </CardContent>
  </Card>
)
