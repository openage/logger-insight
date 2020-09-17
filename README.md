# logger-insight

Push the logs to insight service

Add dependency in `package.json`

```json
{
    "dependencies": {
        "@open-age/logger": "^1.3.6",
        "@open-age/logger-insight": "^1.0.0"
    }
}
```

Add the logger-insight to logger `config.json`

```json
{
    "logger": {
        "@open-age/logger-insight": {
            "level": "silly"
        }
    },
    "providers": {
        "insight": {
            "url": "https://dev.openage.in/insight/api"
        }
    }
}
```

Add config for `@open-age/logger-insight` in `config.json`

```json
{
    "providers": {
        "insight": {
            "url": "https://dev.openage.in/insight/api"
        }
    }
}
```
