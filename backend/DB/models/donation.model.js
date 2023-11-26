import mongoose from "mongoose";

const DonationProblemsSchema = new mongoose.Schema(
   {

       image : {
           type: String,
           required : true,
           
        }, 
        ProblemName : {
         type : String,
         required : true,
         
        },
        ProblemDescription : {
            type : String,
            required : true,
            
        }
     
    }

    







);


const DonationDB  = mongoose.model('donationProblems',DonationProblemsSchema);


export default DonationDB; 
