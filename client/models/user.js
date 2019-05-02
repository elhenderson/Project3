module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Post, {
            onDelete: "cascade",
            onUpdate: "cascade"
        })
    }

    return User;
}