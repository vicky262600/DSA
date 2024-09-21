/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]; // Initialize the minimum price with the first day's price
    let maxDiff = 0; // Maximum profit (initially 0)

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        
        let profit = prices[i] - minPrice;

        if (profit > maxDiff) {
            maxDiff = profit;
        }
    }

    return maxDiff; 
};
