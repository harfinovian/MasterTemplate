export default idr = (value) => {
    if (value) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " IDR";    
}