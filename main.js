import './libs/liveReload.js';
import addMdToPage from './libs/addMdToPage.js';
import dbQuery from "./libs/dbQuery.js";
import tableFromData from './libs/tableFromData.js'

addMdToPage("50 students")

let students = await dbQuery("SELECT * FROM results limit 50")
tableFromData({ data: students })