import { getUserList } from "../src/userActions.js";
import { expect } from "chai";

jest.mock('../src/userActions.js');

describe('users list tests', () => {
    it('get the users list', async () => {
        const data = {
            "ok": true,
            "members": 
            [
                {
                    "id": "W012A3CDE",
                    "team_id": "T012AB3C4",
                    "name": "spengler"
                },
                {
                    "id": "W012A3CDF",
                    "team_id": "T012AB3C3",
                    "name": "spengler1"
                },
            ]
        }
        getUserList.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getUserList('fake', 'fake')).resolves.toEqual(data);
    });

    it('get users List return not_authed error', () => {
        getUserList.mockImplementationOnce(() => Promise.resolve({"ok": true, "error": "not_authed"}));
        await expect(getUserList('fake', 'fake')).resolves.toEqual({"ok": true, "error": "not_authed"});
    });
});