import { getAll } from "../../lib/helper";
import JobSeeker from "../../models/JobSeeker";

const getAllJobSeekers = getAll(JobSeeker);

export default getAllJobSeekers;