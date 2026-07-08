import { updateOne } from "../../lib/helper";
import JobSeeker from "../../models/JobSeeker";

const updateJobSeeker = updateOne(JobSeeker, [
    'fullName',
    'email',
    'password',
    'phoneNumber',
    'address'
])

export default updateJobSeeker;