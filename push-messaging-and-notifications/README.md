Push Messaging and Notification Sample
===

Learn more at https://www.chromestatus.com/feature/5416033485586432 and https://www.chromestatus.com/feature/5480344312610816

To use this sample please do the following:

1. Create a project on the [Firebase Developer Console](https://console.firebase.google.com).
1. Go to Settings (the cog near the top left corner), click the 'Cloud Messaging Tab'.
1. Create a copy of [config.sample.js](config.sample.js) called config.js.
1. Create a copy of [manifest.sample.json](manifest.sample.json) called manifest.json.
1. Replace `<Your Cloud Messaging API Key ...>` in your new `config.js` file with your own API key from your new project on Firebase Developer Console.
4. Replace `<Your Cloud Sender ID ...>` in your new `manifest.json` with your own sender ID from the Firebase Developer Console project.

# Related Samples
  Push messaging and notifications are built on [service workers](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker).

#cURL Command to Send Push ex.
curl --header "Authorization: key=AAAAh6ZLAb4:APA91bGDshnZFvdvY8TPdglT2bCswIDtUvaSjfP2fGHV2hGz2jf9TYubVP3lXTFdonFIITg-t2zSjhOPPhlKVAaW16G7w84kU-pHqh3tx-2R3zLUYpldNHpHCl8LdJJZJlUYegmtghc1" --header Content-Type:"application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"cQGPs4K0L34:APA91bEzCUYESUewqSTNRYHGkNyOr-W5rOoIhc7AuCkFxZbKjkwMqucP5aWmFFKHfF1t4ek0aPjvkrP5agRcihC3t5EuwrEbVukBS4E5DIsYoMHvGLsvY_gKZ4aei8wMnA5w7bEqoaQO\"]}"
