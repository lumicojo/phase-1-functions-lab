// Code your solution in this file!

function distanceFromHqInBlocks(blocks) { 
  const result = blocks - 42;
  return Math.abs(result); 
} 

function distanceFromHqInFeet(blocks) {
   const street = distanceFromHqInBlocks(blocks);
    let result = street * 264;

    return result;
}

function distanceTravelledInFeet() {
    
}