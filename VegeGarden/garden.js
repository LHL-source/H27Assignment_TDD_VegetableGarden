//getYieldForPlant NO factor  -----------------------
// const getYieldForPlant = (corn) => {
//     const testCornYield = corn.yield
//     return corn.yield;
// };

//end getYieldForplant_1------------------------------
//start getYieldForPlant_1 WITH factor
const getYieldForPlant_1 = (input) => {
    const sun_value = input.crop.factors.sun[input.sun]
    const wind_value = input.crop.factors.wind[input.wind]

    const sunFactor = (100 + sun_value) / 100;
    const windFactor = (100 + wind_value) / 100;

    const sunWind = sunFactor * windFactor;
    const yieldInclFac = input.crop.yield * sunWind;

    return parseFloat(yieldInclFac.toFixed(2));
};
//end getYieldForPlant_1-- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//getYieldForCrop with environment factor  -----------------------
const getYieldForCrop = (input) => {

    const yieldPerPlant = getYieldForPlant_1(input);
    const yieldPerCrop = yieldPerPlant * input.numCrops;
    const parseYieldForCrop = parseFloat(yieldPerCrop.toFixed(2));
    return parseYieldForCrop;

};
//end getYieldForCrop no factor------------------------------------

//start test getTotalYield no factor --------------------------------------
//const getTotalYield = (input) => {

//  const cornYield = input.crops[0].crop.yield; 
//    const cornNumCrops = input.crops[0].numCrops; 
//  const cornYieldNumCrops = cornYield * cornNumCrops; 
//    const pumpkinYield = input.crops[1].crop.yield; 
//   const pumpkinNumCrops = input.crops[1].numCrops; 
//const pumpkinYieldNumCrops = pumpkinYield * pumpkinNumCrops; 
//const resultYieldCrop = cornYieldNumCrops + pumpkinYieldNumCrops; 

//return resultYieldCrop
//} 
//end getTotalYield no fac---------------------------------------------------------------

//start test getTotalYield WITH factor --------------------------------------
const getTotalYieldWithFactor = (input) => {

    const yieldPerCrop = input.crops.map((eachCrop) => {

        const getYieldForCropArray = getYieldForCrop(eachCrop);
        return getYieldForCropArray

    });

    let acc;
    let cur;

    const totalYield = yieldPerCrop.reduce((acc, cur) => acc + cur);
    return parseFloat(totalYield.toFixed(2));
};

//end getTotalYield WITH factor--------------------------------------------------------------

//start test getTotalYield_ZeroAmount No factor -----------------------------------------
// const getTotalYield_ZeroAmount = (cropsObj) => {

//         const cornYield = cropsObj.crops[0].crop.yield; 
//         const cornNumCrops = cropsObj.crops[0].numCrops; 
//         const cornYieldNumCrops = cornYield * cornNumCrops; 
//         const resultYieldCrop = cornYieldNumCrops;

//         return resultYieldCrop
//     } 
//end getTotalYield---------------------------------------------------------------

//start getCostForCrop works? yes good job--------------------------------------
const getCostForCrop = (input) => {
        const costOnePlant = 1;
        const costCorn = input.numCrops * costOnePlant;
        const sumCost = costCorn;
        return sumCost
    } //getTotalY
    // end  getCostForCrop----------------------------------------------

//start getRevenueForCrop No Factor-------------------------------------
// const getRevenueForCropWithFactor = (input, factor) => {

//         const revenueForOnePlant = input.crop.salesPrice * getYieldForPlant_1(input, factor)
//         const revenueForCrop = revenueForOnePlant * input.numCrops;
//         return revenueForCrop 
//     } 
//end getRevenueForCrop ---------------------------------------------

//start getRevenueForCrop With Factor----------------------------------------
const getRevenueForCropWithFactor = (input) => {

        const revenueForOnePlant = input.crop.salesPrice * getYieldForPlant_1(input);
        const revenueForCrop = revenueForOnePlant * input.numCrops;
        return revenueForCrop
    }
    //end getRevenueForCrop WITH factor ---------------------------------------------

//getProfitForCrop--------------------------------------------------------------
const getProfitForCrop = (input) => {

        const profitForCrop = getRevenueForCropWithFactor(input) - getCostForCrop(input);
        return profitForCrop
    }
    //end getProfitForCrop -----------------------------------------------


//start getTotalProfitForCrop NO factor----------------------------------------

const getTotalProfit = (input) => {

    let profitForCrop_1 = 0;
    const totalProfit = input.map((eachCrop) => {

        const profitForCrop = getProfitForCrop(eachCrop);
        return profitForCrop
    })

    const totalProfitSum = totalProfit.reduce((total, item) => {

        const totalItem = total + item;
        return totalItem

    }, 0)

    return totalProfitSum

}

// here under getYieldForCrop no factor-- -- -- -- -- -- -- -- -- -- -- -- -
// const cropDataYield = input.crop.yield; 
// const cropDataNumCrops = input.numCrops;
// const result = cropDataYield * cropDataNumCrops; 
// return result;



module.exports = {
    // getYieldForPlant,
    getYieldForPlant_1,
    getYieldForCrop,
    // getTotalYield,
    getTotalYieldWithFactor,
    // //getTotalYield_ZeroAmount,
    getCostForCrop,
    // getRevenueForCrop,
    getRevenueForCropWithFactor,
    getProfitForCrop,
    getTotalProfit
};