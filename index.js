function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42    
    }
    else { return 42 - blocks

    }

    

}
function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264
}
function distanceTravelledInFeet(start, end) {
if (start > end){
    return (start - end) * 264
}
else {
    return (end - start) * 264
}

}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start,destination) <= 400) { 
        return 0
    }
    else if (distanceTravelledInFeet(start,destination) >= 400 && (distanceTravelledInFeet(start,destination) <= 2000)) {
        return (distanceTravelledInFeet(start,destination) - 400) * .02
    }
    else if (distanceTravelledInFeet(start,destination) > 2500) {
        return 'cannot travel that far'
        
        }
    else if (distanceTravelledInFeet(start,destination) > 2000) {
        return 25 
    }


}
