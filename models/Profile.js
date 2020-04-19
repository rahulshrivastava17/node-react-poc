const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company:{
        type: String
    },
    website:{
        type: String
    },
    location:{
        type: String
    },
    status:{
        type: String,
        required: true
    },
    skills:{
        type: [String],
        required: true
    },
    bio:{
        type: String
    },
    githubusername:{
        type: String
    },
    experience:[
       {
        title:{
            type: String,
            require: true
        },
        company:{
            type: String,
            require: true
        },
        location:{
            type: String,
        },
        from:{
            type: Date,
            require: true
        },
        to:{
            type: Date,
        },
        current:{
            type: Boolean,
            default: false
        },
        description:{
            type: String
        }
       }
    ],
    education:[
        {
            school:{
                type: String,
                require: true
            },
            degree:{
                type: String,
                require: true
            },
            fieldofstudy:{
                type: String,
                require: true
            },
            from:{
                type: Date,
                require: true
            },
            to:{
                type: String,
            },
            current:{
                type: Boolean,
                require: false
            },
            description:{
                type: String,
            }
        }
    ],
    social: {
        youtube:{
            type: String
        },
        twitter:{
            type: String
        },
        facebook:{
            type: String
        },
        linkedin:{
            type: String
        },
        instagram:{
            type: String
        }
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = profile = mongoose.model('profile', ProfileSchema);