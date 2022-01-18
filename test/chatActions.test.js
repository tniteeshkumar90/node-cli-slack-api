import { postChatMessage } from "../src/chatActions.js";
import { expect } from "chai";

jest.mock('../src/chatActions.js');

describe('post chat message tests', () => {
    it('posts the chat message', async () => {
        const data = {
            "ok": true,
            "channel": "slack_client",
            "ts": "1503435956.000247",
            "message": {
                "text": "Hello World",
                "username": "ecto1",
                "bot_id": "B19LU7CSY",
                "attachments": [
                    {
                        "text": "This is an attachment",
                        "id": 1,
                        "fallback": "This is an attachment's fallback"
                    }
                ],
                "type": "message",
                "subtype": "bot_message",
                "ts": "1503435956.000247"
            }
        };
        let param = {
            chatParam: {
                channel: "slack-client",
                text: "Hello world"
            }
        };
        postChatMessage.mockImplementationOnce(() => Promise.resolve(data));
        await expect(postChatMessage('fake', 'fake', param)).resolves.toEqual(data);
    });

    it('get users List return not_authed error', () => {
        getUserList.mockImplementationOnce(() => Promise.resolve({"ok": true, "error": "not_authed"}));
        await expect(getUserList('fake', 'fake')).resolves.toEqual({"ok": true, "error": "not_authed"});
    });
});