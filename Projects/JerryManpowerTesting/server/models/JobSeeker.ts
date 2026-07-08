import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const JobSeekerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, toJSON: { virtuals: true }, toObject: {virtuals: true}
});

JobSeekerSchema.plugin(mongooseUniqueValidator, {
    message: "{PATH} {VALUE} is already in use, please try another",
});

const JobSeeker = mongoose.model("Event", JobSeekerSchema);

export default JobSeeker;
