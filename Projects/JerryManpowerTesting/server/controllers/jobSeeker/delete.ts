import { deleteOne } from "../../lib/helper";
import JobSeeker from "../../models/JobSeeker";

const deleteJobSeeker = deleteOne(JobSeeker)

export default deleteJobSeeker;