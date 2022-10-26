// leet code combination sum problem v


var candidates = [2,3,6,7]
var target = 7

function findCombination(index,candidates,target,finalAns,initArr){
     console.log("finalAns1",finalAns)
    if (index == candidates.length ){
        if (target == 0){
            // console.log("initArr",initArr,finalAns)
            finalAns.push(initArr)
            console.log("finalAns7",finalAns)
        }
        return;
    }
    
    if (candidates[index] <= target){
        initArr.push(candidates[index])
        console.log("final1230",finalAns)
            findCombination (index,candidates,target-candidates[index],finalAns,initArr)
        initArr.pop()
    }
     console.log("final1231",finalAns)
    findCombination (index+1,candidates,target,finalAns,initArr)
    console.log("final1232",finalAns)

    
}
var combinationSum = function(candidates, target) {
    
    let finalAns = []
    let initArr = []
    
    findCombination (0,candidates,target,finalAns,[])
    console.log("finalAns8",finalAns)
    return finalAns
    
    
};

combinationSum(candidates,target)


