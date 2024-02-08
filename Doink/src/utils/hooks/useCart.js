import { useSelector } from "react-redux";

const useCart = () => {
    const cartItems = useSelector(store => store.cart.items);
    function calculateTotalPrice(){
        let total = 0;
        for (const key in cartItems) {
            const foodInfo = cartItems[key];
            const price = foodInfo?.price/100 || foodInfo?.defaultPrice/100;
            const tPrice = price * foodInfo?.quantity;
            total += tPrice;
        }
        // console.log("t", total);
        return total;
    }
    return { calculateTotalPrice };
}
export default useCart;