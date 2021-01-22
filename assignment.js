//https://github.com/sakhawathossensadi/JS

//convert kilometer to meter
function kilometerToMeter(kilometer) {
    var meter;
    if (kilometer < 0) {
        return "Distance cannot be negative";
    }
    else {
        meter = kilometer * 1000;
        return meter;
    }
}

var result = kilometerToMeter(17.3265);
console.log(result);


// calculte total amount of money you need to buy given amount of watches,mobiles and laptops
function budgetCalculator(amountOfWatch,amountOfMobile,amountOfLaptop)
{
    var totalWatchPrice=0,totalMobilePrice=0,totalLaptopPrice,totalPrice=0,watchPrice=50,mobilePrice=100,laptopPrice=500;
    if(amountOfWatch>=0 && amountOfMobile>=0 && amountOfLaptop>=0)
    {
        totalWatchPrice = amountOfWatch*watchPrice;
        totalMobilePrice = amountOfMobile*mobilePrice;
        totalLaptopPrice = amountOfLaptop*laptopPrice;
        totalPrice = totalWatchPrice+totalMobilePrice+totalLaptopPrice;
        return totalPrice;
    }
    else
    {
        return "Amount of watches,mobiles or laptops cannot be negative";
    }
}

var result = budgetCalculator(1,2,11);
console.log(result);



// calculate hotel cost
function hotelCost(numberOfDays) {
    var totalAmount1 = 0, totalAmount2 = 0, totalAmount3 = 0, day;
    if (numberOfDays >= 0) {
        if (numberOfDays <= 10) {
            totalAmount1 = numberOfDays * 100;
            return totalAmount1;
        }
        else if (numberOfDays > 10 && numberOfDays <= 20) {
            totalAmount1 = 100 * 10;
            day = numberOfDays - 10;
            totalAmount2 = 80 * day;
            totalAmount2 = totalAmount1 + totalAmount2;
            return totalAmount2;
        }
        else {
            totalAmount1 = 100 * 10;
            totalAmount2 = 80 * 10;
            day = numberOfDays - 20;
            totalAmount3 = 50 * day;
            totalAmount3 = totalAmount1 + totalAmount2 + totalAmount3;
            return totalAmount3;
        }
    }
    else {
        return "Number of days cannot be negative";
    }
}

var result = hotelCost(31);
console.log(result);



// find a name with maximum number of letters
function megaFriend(friendsList)
{
    if(friendsList.length==0)
    {
        return "Empty list of friends name";
    }
    else
    {
        var totalCharOfName=0,nameLength,megaName;
        for(var i=0; i<friendsList.length; i++)
        {
            var name = friendsList[i];
            nameLength = name.length;
            if(nameLength>totalCharOfName)
            {
                megaName = name;
                totalCharOfName=nameLength;
            }
        }
        return megaName;
    }
}

var friendNameList = ["jamal Uddin","Sakhawat Hossen Sadi","haff ashasf as","sjag sahfs"];
var friendName = megaFriend(friendNameList);
console.log(friendName);