import ShopItemDB from "../DB/models/shop.model.js";


const GetProductById = async (req,res)=>{
    // console.log(req.body.id.id);
    const id = req.body.id.id;
    const data = await ShopItemDB.findOne({_id : id });
    res.send(data);
}



export default GetProductById;