// __tests__/combineUsers.test.js
const combineUsers = require('../index');

test('combineUsers merges arrays correctly', () => {
    const result = combineUsers(
        ["john", "mary"],
        ["alex", "jane"],
        ["collins"]
    );

    expect(result).toHaveProperty('users');
    expect(result).toHaveProperty('merge_date');
    expect(result.users).toEqual(["john", "mary", "alex", "jane", "collins"]);

    const today = new Date();
    const expectedDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    expect(result.merge_date).toBe(expectedDate);
});
