# goodly-cli
Allows you to emit events into the goodly infrastructuring from the command line. This allows events to be emitted via cron or from scripts.

## Usage

```bash
goodly emit --host [rabbit mq host] --event [event path] --data <data>
goodly emit -h [rabbit mq host] -e event -d <data>
```
