const {
    //getYieldForPlant,
    //  getYieldForPlant_1,
    //  getYieldForCrop,
    // getTotalYield,
    // getTotalYieldWithFactor,
    // // getTotalYield_ZeroAmount,
    //getCostForCrop,
    //getRevenueForCropWithFactor,
    // getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} = require("./garden");

const {
    corn,
    pumpkin
} = require("./Vegetable");
//getYieldForPlant  ----------------------------------------------
// describe("getYieldForPlant", () => {
//     // const corn = {
//     //     name: "corn",
//     //     yield: 30,
//     // };
//     //test getYieldForplatn no environ w? yes good job
//     test("Get yield for plant with no environment factors", () => {
//         expect(getYieldForPlant(corn)).toBe(30);
//     }); //test
// }); //desc
//end getYieldForplant--------------------------------------------


//getYieldForPlant_1 WITH Factor ----------------------------------------------
// describe("getYieldForPlant_1", () => {

//     test("Get yield for plant with  environment factors", () => {
//         const input = {
//             crop: corn,
//             sun: "low", 
//             wind: "medium", 

//             numCrops: 1,
//         }; //input


//         expect(getYieldForPlant_1(input)).toBe(16.8); //30//24.00//16.80
//     }); //test
// }); //desc
//end getYieldForplant_1--------------------------------------------


// getYieldForCrop no factorw? yes good job---------------------------
// describe("getYieldForCrop", () => {
//     test("Get yield for crop, no environments factor", () => {

//         const input = {
//             crop: corn,
//             numCrops: 1,
//         };
//         expect(getYieldForCrop(input)).toBe(30); //input, toBe(30)
//     }); //test
// }); //desc

//end getYieldForCrop no factor----------------------------

// getYieldForCrop with factor ------- ---------------------------
// describe("getYieldForCrop", () => {
//     test("Get yield for crop, with environmentfactors", () => {
//         // const environmentFactors = {
//         //     sun: "low",
//         //     wind: "medium",
//         // };
//         const input = {
//             crop: corn,
//             sun: "low",
//             wind: "medium",

//             numCrops: 1,
//         };
//         expect(getYieldForCrop(input)).toBe(16.80); //24
//     }); //test
// }); //desc

//end getYieldForCrop with factor----------------------------


//getTotalYield no factor----------------------------------------
// describe("getTotalYield", () => {
//     test("Calculate total yield with multiple crops no fac", () => {
//         // const corn = {
//         //     name: "corn",
//         //     yield: 3,
//         // }; //corn

//         // const environmentFactors = {
//         //     sun: "medium",

//         //}; //envirnFac
//         const crops = [
//             { crop: corn, numCrops: 10 },
//             { crop: pumpkin, numCrops: 2 },
//         ];
//         expect(getTotalYield({ crops })).toBe(308);
//     }); //test
//end getTotalYield---------------------------------------------

//getTotalYield WITH factor -----------------------------------------
// describe("getTotalYieldWithFactor", () => {
//     test("getTotalYield WITH factor", () => {

//         const crops = [{
//                 crop: corn,
//                 sun: "high", 
//                 wind: "high",

//                 numCrops: 10
//             },
//             {
//                 crop: pumpkin,
//                 sun: "high",
//                 wind: "high",

//                 numCrops: 2
//             },
//         ];

//         expect(getTotalYieldWithFactor({ crops }))
//             .toBe(184.80); //308
//     }); //test
// });
//end getTotalYield--------------------------------------

//test Calculate total yield with 0 amount-------------------
//     test("Calculate total yield with 0 amount", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const crops = [{ crop: corn, numCrops: 0 }];
//         expect(getTotalYield_ZeroAmount({ crops })).toBe(0);
//     });
// }); //desc
//end test Calculate total yield with 0 amount

//test getCostForCrop-----------------------------------------
// describe('calculate cost for a crop', () => {
//     test("Calculate cost for a crop", () => {

//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };

//         expect(getCostForCrop(input)).toBe(10);

//     }); //test
// }); //desc
//end test getCostForCrop---------------------------------------
//test getRevenueForcrop No factor --------------------------------------
// describe('getRevenueForCrop No fac', () => {
//     test("getRevenueForCrop No fac", () => {

//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };

//         expect(getRevenueForCrop(input)).toBe(600);
//     }); //test
// }); //desc

//end test getRevenueForcrop

//test getRevenueForcrop With factor --------------------------------------
// describe('getRevenueForCrop With fac', () => {
//     test("getRevenueForCrop with fac", () => {

//         const input = {
//             crop: corn,
//             sun: "medium",
//             wind: "high",

//             numCrops: 10,
//         };
//         // const environmentFactors = {
//         //     sun: "medium",
//         //     wind: "high",
//         // }; //envirnFac
//         expect(getRevenueForCropWithFactor(input)).toBe(240.00);
//     }); //test
// }); //desc

//end test getRevenueForcropWithFactor

//test getProfitForCrop ----------------------------------------
// describe('getProfitForCrop', () => {
//     test("getProfitForCrop", () => {

//         const input = {
//             crop: corn,
//             sun: "low",
//             wind: "medium",

//             numCrops: 10,
//         };

//         expect(getProfitForCrop(input)).toBe(326.00);
//     }); //test
// }); //desc

//end test getProfitForCrop---------------------------------

//test getTotalProfit ------------------------------------------
describe('getTotalProfit', () => {
    test("getTotalProfit", () => {

        const crops = [{
                crop: corn,
                sun: "high",
                wind: "medium",
                numCrops: 10
            },
            {
                crop: pumpkin,
                sun: "medium",
                wind: "high",

                numCrops: 2
            },
        ];
        expect(getTotalProfit(crops)).toBe(627.60);

    });
});

//end test getTotalProfit-----------------------