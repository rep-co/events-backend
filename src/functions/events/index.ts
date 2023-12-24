import { Handler } from '@yandex-cloud/function-types'
import { EventItem } from '../../types/event'
import { safeJsonParse } from '../../utils/safeJsonParse'

const getEventsHandler: () => EventItem[] = () => {
  return [
    {
      name: 'A',
      date: new Date(),
      description: undefined,
      location: undefined,
      price: undefined,
    },
    {
      name: 'B',
      date: new Date(),
      description: undefined,
      location: undefined,
      price: undefined,
    },
    {
      name: 'C',
      date: new Date(),
      description: undefined,
      location: undefined,
      price: undefined,
    },
  ]
}

const addEventHandler = (event: EventItem) => {
  return event.name
}

export const handler: Handler.Http = async (event, context) => {
  switch (event.httpMethod) {
    case 'GET':
      const events = getEventsHandler()
      return { statusCode: 200, body: JSON.stringify(events) }

    case 'POST':
      const item: EventItem | undefined = safeJsonParse(event.body)
      if (!item) return { statusCode: 400, body: 'Error' }

      const message = addEventHandler(item)
      return { statusCode: 200, body: message }

    default:
      return { statusCode: 404, body: 'Error' }
  }
}
