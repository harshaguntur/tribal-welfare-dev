import ShopItemDB from "../DB/models/shop.model.js";


const GetShopItems = async (req,res)=>{

    const shopItems = await ShopItemDB.find();
   
    res.send(shopItems)
}




export default GetShopItems;