const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcrypt');

const contestSchema = new mongoose.Schema(
    {
        spots: {
            type: Number,
            required: true
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        typeOfContest: {
            type: String,
            enum: ['public', 'private']
        },
        paidFree: {
            type: String,
            enum: ['paid', 'free']
        },
        noOfTeams: {
            type: Number,
            required: true
        },
        pricePerTeam: {
            type: Number,
            required: true
        },
        winningPrice: {
            type: Number,
            default : 0
        },
        match: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Match'
        },
        code: {
            type: String
        }
    },
    { timestamps: true }
);

const Contest = mongoose.model('Contest', contestSchema);
module.exports = {Contest};