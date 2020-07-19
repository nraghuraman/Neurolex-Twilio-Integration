# Neurolex-Twilio-Integration
This is a software demo project which I completed as a part of NeuroLex Lab's TRIBE 4 competition. As a part of this project, I was tasked with developing software which can further NeuroLex's mission of improving primary care through technology. I decided to use Twilio to implement a few features I felt were important.

This system is a React web application with two uses thus far:
1. It can be used to send automated text messages. This feature has many applications; for example, it can send weekly text messages to diabetes patients reminding them to check in with their health care providers. Specifically, these text messages can contain links to SurveyLex surveys, which are voice surveys developed by NeuroLex for voice analysis, for patients to complete on a weekly basis.
2. It can be used to send automated phone calls with a designated survey question to a patient. During these automated phone calls, a patient's response is recorded and saved onto the Twilio console for later use. This feature is highly relevant to NeuroLex. At the moment, individuals can only respond to SurveyLex survey questions by recording themselves directly on a web browser, but this does not work on every device. Hence, as an alternate way of responding to surveys, survey participants can have Twilio call them with the survey question, and their response will be recorded and saved as normal.

To try out this system:
1. Create a Twilio account and purchase a number with both voice and SMS capabilities (or create a free Twilio trial account).
2. Follow the directions in the file `auto-text-backend/twilio/twilio-functions` to add your credentials to the code and add the correct XML configuration to your Twilio console.
3. In the terminal, run `npm i` in both `auto-text-backend` and `auto-text` followed by `npm start` in both.

In addition to the React frontend, this project was created with a Node.js/Express backend.

I hope to add to this project in the future. In particular, here are some potential areas for improvement:

1. The UI for this web application is still fairly bare. I would be interested in making it more compelling and interesting to use without sacrificing the simplicity.
2. The functionality is limited to the two uses listed above. There may be more use cases of Twilio in NeuroLex's products that I did not explore.
