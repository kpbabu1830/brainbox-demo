const UserSerializer = require('../serializers/user');

const users = {
  '1': {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    profilePicture: { url: 'https://example.com/alice.jpg', thumbnail: 'https://example.com/alice-thumb.jpg' },
    createdAt: '2024-01-15',
    updatedAt: '2024-03-20',
  },
  '2': {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    profilePicture: null,
    createdAt: '2024-02-10',
    updatedAt: '2024-03-18',
  },
};

class UserController {
  static getProfile(req, res) {
    const userId = req.params.id;
    const user = users[userId];

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const serialized = UserSerializer.serialize(user);
    return res.status(200).json(serialized);
  }
}

module.exports = UserController;
