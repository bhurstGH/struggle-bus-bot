exports.handler = function (event, context, callback) {

    console.log(`Event body: ${event.body}`)

    const invokedByUser = event.body.user_name

    console.log(`User name var: ${invokedByUser}`)

    const res = {
        response_type: "in_channel",
        text: "http://devhumor.com/content/uploads/images/July2019/mvp_bugs.png",
        attachments: [
            {
                text: `Hey ${invokedByUser}! lowPriority is a simple Netlify function created by @Brett Hurst for the Struggle Buddy slack app. You should make it a highPriority to create your own! :D`
            }
        ]
    }

    console.log(`Response object before callback: ${res}`)

    callback(null, {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(res)
    })
}