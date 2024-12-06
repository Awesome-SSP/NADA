// const mongoose = require('mongoose');
import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  caseId: String,
  athleteId: String,
  status: String,
  evidence: [{ type: mongoose.Schema.Types.ObjectId, ref: "Evidence" }],
  assignedInvestigator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Investigator",
  },
});

const Case = mongoose.model("Case", caseSchema);
export default Case;
