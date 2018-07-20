import React from 'react'

import Timeline from 'react-calendar-timeline/lib'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const dates = [
  ['14.12.2018', '21.1.2019'],
  ['28.12.2018', '28.1.2019'],
  ['11.1.2019', '4.2.2019'],
  ['25.1.2019', '11.2.2019'],
  ['1.2.2019', '18.2.2019'],
  ['8.2.2019', '25.2.2019'],
  ['15.2.2019', '4.3.2019'],
  ['1.3.2019', '18.3.2019'],
  ['8.3.2019', '25.3.2019'],
  ['15.3.2019', '1.4.2019'],
  ['22.3.2019', '8.4.2019'],
  ['29.3.2019', '15.4.2019'],
  ['12.4.2019', '29.4.2019'],
  ['19.4.2019', '6.5.2019'],
]

const items2 = dates.map((dateArray, i) => ({
  id: i,
  group: i,
  title: `Osa ${i}`,
  start_time: moment(dateArray[0], 'DD.MM.YYY'),
  end_time: moment(dateArray[1], 'DD.MM.YYY'),
}))

const groups2 = dates.map((_, i) => ({
  id: i,
  title: `Osa ${i}`,
}))

// groups2.push({
//   id: groups2.length + 2,
//   title: 'Näyttökokeet'
// })

// items2.push({
//   id: items2.length + 2,
//   group: items2.length + 2,
//   title: 'Näyttökokeet',
//   start_time: moment('8.5.2019', 'DD.MM.YYY'),
//   end_time: moment('16.5.2019', 'DD.MM.YYY'),
// })

export default () => (
  <div>
    <Timeline
      stackItems
      useResizeHandle
      groups={groups2}
      items={items2}
      defaultTimeStart={moment('01.12.2018', 'DD.MM.YYY')}
      defaultTimeEnd={moment('31.05.2019', 'DD.MM.YYY')}
    />
  </div>
)
