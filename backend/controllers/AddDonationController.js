import DonationDB from "../DB/models/donation.model.js";



const AddDonationController = async (req,res) => {
    
    const imageName = req.file.filename;
    
    const {Name , Description } = req.body

    

    try {
      await DonationDB.create({ image: imageName , ProblemName : Name , ProblemDescription : Description});
    } catch (error) {
      console.log(error);
    }
}



export default AddDonationController;


