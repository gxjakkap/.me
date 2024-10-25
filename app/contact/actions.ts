'use server'

export async function handleFormSubmit (formData: FormData){
    const data = {
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        inquiry: formData.get('inq') || ''
    }
    const postWebhook = await fetch(process.env.CONTACT_DISCORD_WEBHOOK || "", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            "content": null,
            "embeds": [
              {
                "title": data.email,
                "description": data.inquiry,
                "color": null,
                "author": {
                  "name": data.name
                }
              }
            ],
            "attachments": []
          })
    })
    const postWebhookRes = await postWebhook.text()
    console.log(`sendwebhook: ${postWebhook.status} ${postWebhookRes}`)
    if (postWebhook.status === 200){
        
    }
    else {
        
    }
}