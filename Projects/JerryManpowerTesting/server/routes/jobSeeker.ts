import express from "express"

import createJobSeeker from "../controllers/jobSeeker/create"
import deleteJobSeeker from "../controllers/jobSeeker/delete"
import getAllJobSeekers from "../controllers/jobSeeker/getAll"
import getOneJobSeeker from "../controllers/jobSeeker/getOne"
import updateJobSeeker from "../controllers/jobSeeker/update"

const router = express.Router()

// GET a single job seeker
router.get("/:id", getOneJobSeeker)

// GET all job seekers
router.get("/", getAllJobSeekers)

// CREATE a new job seeker
router.post("/", createJobSeeker)

// UPDATE a job seeker
router.patch("/:id", updateJobSeeker)

// DELETE  a job seeker
router.delete("/:id", deleteJobSeeker)


export default router;