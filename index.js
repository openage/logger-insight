let insight = require('@open-age/insight-client')

exports.transport = (options) => {
    class InsightTransport {
        name = 'insight'
        level = 'info'
        constructor(params) {
            if(params.level) {
                this.level = params.level
            }
        }

        log = (level, message, meta, callback) => {
            let context = meta.context
            meta.context = undefined
            const model = {
                level: level,
                message: message,
                app: process.env.APP,
                meta: meta,
            }

            for (const field of Object.getOwnPropertyNames(context)) {
                switch (field) {
                    case 'location':
                    case 'device':
                        model[field] = context[field]
                        context[field] = undefined
                        break
                }
            }

            insight.logs.create(model, context).then(() => {
                callback(null, true)
            }).catch(err=> {
                callback(null, true)
            })
        }
    }

    return new InsightTransport(options)
}