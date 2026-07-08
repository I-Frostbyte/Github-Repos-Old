import { createOne } from "../../lib/helper";
import JobSeeker from "../../models/JobSeeker";

const createJobSeeker = createOne(JobSeeker, [
    'fullName',
    'email',
    'password',
    'phoneNumber',
    'address'
])

export default createJobSeeker;