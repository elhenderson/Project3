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
        pluscode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING, 
            defaultValue: "Hello",
            get: function() {
                return JSON.parse(this.getDataValue('photo'));
            }, 
            set: function(val) {
                return this.setDataValue('photo', JSON.stringify(val));
            }
        }
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {

        })
    }

    return Post;
}