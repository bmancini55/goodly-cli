
import goodly from 'goodly';

export default async function emit(options) {

  const {
    host = 'localhost',
    event,
    data = {}
  } = options;

  const service = goodly({ name: 'cli' });
  await service.start({ brokerPath: host });
  await service.emit(event, data);
  setTimeout(() => service.stop(), 100);

  console.log('Event %s has been emitted', event);
}