
//Functio Of Converting feet to mile
function feetToMile(feet){
    if(isNaN(feet)){
        console.log("Only Number are accepted... please enter a positive number");
    }else{
        if(feet >= 0){
            var mile = feet / 5280 ;
            return mile;
        }else{
            console.log("Negative number is not accepted... Please enter a positive number");
        }
    }
    return "";
}
console.log("Mile = ",feetToMile(1000000));

//Function of calculate wood amount needed
function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    if(isNaN(chairQuantity) || chairQuantity<0){
        console.log("Please enter Chair quantity as positive number");
    }else{
        if(isNaN(tableQuantity) || tableQuantity <0){
            console.log("Please enter Table quantity as positive number");
        }else{
            if(isNaN(bedQuantity) || bedQuantity < 0){
                console.log("Please enter Bed quantity as positive number");
            }else{
                var totalWood = (chairQuantity*1)+(tableQuantity*3)+(bedQuantity*5);
                return totalWood;
            }
        }
    }
    return "";
}
console.log("wood = ",woodCalculator(5,5,5));

//function of brick count
function brickCalculator(floorNumber){
    if(isNaN(floorNumber)){
        console.log("Only Number are accepted... please enter a positive floor number");
    }else{
        if(floorNumber >= 0){
            var totalBricks = 0;
            if(floorNumber>20){
                totalBricks = (10*15*1000) + (10*12*1000);
                totalBricks += ((floorNumber-20) * 10 *1000);
            }else if(floorNumber>10){
                totalBricks = (10*15*1000);
                totalBricks += ((floorNumber-10) * 12 *1000);
            }else{
                totalBricks = (floorNumber*15*1000);
            }

            return totalBricks;
        }else{
            console.log("Negative Floor number is not accepted... Please enter a positive Floor number");
        }
    }
    return "";
}
console.log("Total Bricks = ",brickCalculator(45));

//function of find shortest name friend
function tinyFriend(friendList){

    if(Array.isArray(friendList)){
        if(friendList.length > 0){
            var length = friendList.length;
            var shortIndex= 0;
            for(var i=0;i<length;i++){
                if(friendList[shortIndex].length > friendList[i].length){
                    shortIndex = i;
                }
            }
            return friendList[shortIndex];
        }else{
            console.log("Your given Friend List is empty..");
        }
    }else{
        console.log("Your given Friend List is not a array//")
    }
    return "";
}
console.log("Shortest name friend = " ,tinyFriend(["Kamal","Mohiuddin","Mohammad","jony","Liton"]));