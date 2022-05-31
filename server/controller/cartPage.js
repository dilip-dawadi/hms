import Cart from "../models/cartModel.js";

export const getCartPage = async (req, res) => {
    try {
        const cartData = await Cart.find();
        res.status(200).json({ cartData, message: "Welcome to Cart Page" });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const createCartOfFoodPage = async (req, res) => {
    const { title, description, selectedFile, price, tags, quantity } = req.body;
    // const { id } = req.userId;
    try {
        if (!title || !description) {
            return res.status(400).json({
                message: "Please provide all required fields"
            });
        };
        if (!selectedFile) {
            return res.status(400).json({
                message: "Please provide a file"
            });
        }
        if (!price) {
            return res.status(400).json({
                message: "Please provide a price"
            });
        }
        if (!tags) {
            return res.status(400).json({
                message: "Please provide a tags"
            });
        }
        if (!quantity) {
            return res.status(400).json({
                message: "Please provide a quantity"
            });
        }
        const CartData = new Cart({ title, description, selectedFile, price, tags, quantity });
        const savedCart = await CartData.save();
        res.status(200).json({ savedCart, message: "Cart item created successfully" });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const cartController = async (req, res) => {
    const { id } = req.params;
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const cardAdd = await Cart.findById(id);
    if (!cardAdd) return res.status(404).send(`No post with id: ${id}`);
    const index = cardAdd.quantity.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        cardAdd?.quantity?.push(req.userId);
        const updatedcardAdd = await Cart.findByIdAndUpdate(id, cardAdd, { new: true });
        res.status(200).json({ foodLike: updatedcardAdd, message: "Like Successfully " + Math.floor((Math.random() * 10) + 1) });
    } else {
        cardAdd.quantity = cardAdd.quantity.filter((id) => id !== String(req.userId));
        const updatedcardAdd = await Cart.findByIdAndUpdate(id, cardAdd, { new: true });
        res.status(200).json({ foodLike: updatedcardAdd, message: "UnLike Successfully " + Math.floor((Math.random() * 10) + 1) });
    }
}