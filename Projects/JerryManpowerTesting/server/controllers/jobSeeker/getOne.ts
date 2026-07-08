import { getOne } from "../../lib/helper";
import JobSeeker from "../../models/JobSeeker";

const getOneJobSeeker = getOne(JobSeeker, [], [])

export default getOneJobSeeker;