module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        photo: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        }
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {

        })
    }

    return Post;
}