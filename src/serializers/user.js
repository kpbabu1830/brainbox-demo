class UserSerializer {
  static serialize(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profilePictureUrl: user.profilePicture ? user.profilePicture.url : null,
      profilePictureThumbnail: user.profilePicture ? user.profilePicture.thumbnail : null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}

module.exports = UserSerializer;
