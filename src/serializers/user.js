class UserSerializer {
  static serialize(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profilePictureUrl: user.profilePicture.url,
      profilePictureThumbnail: user.profilePicture.thumbnail,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}

module.exports = UserSerializer;
