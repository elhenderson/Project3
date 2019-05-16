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
            type: DataTypes.STRING, 
            get: function() {
                return JSON.parse(this.getDataValue('myArrayField'));
            }, 
            set: function(val) {
                return this.setDataValue('myArrayField', JSON.stringify(val));
            }
        }
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {

        })
    }

    return Post;
}