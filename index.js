function dinerMenu() {

    let breakfastItem = this.breakfastItem;
    let breakfastSideItem = this.breakfastSideItem;
    let breakfastSideItem1 = this.breakfastSideItem1;
    let lunchItem = this.lunchItem;
    let lunchSideItem = this.lunchSideItem;
    let lunchSideItem1 = this.lunchSideItem1;
    let dinnerItem = this.dinnerItem;
    let dinnerSideItem = this.dinnerSideItem;
    let dinnerSideItem1 = this.dinnerSideItem1;
    let totalBill = 0;
    
 

    const breakfastMenu = {
        'Biscuits and Gravy': '$3.99',
        'Steak and Eggs': '$12.99',
        'Country Ham and Eggs': '$7.25',
        'Pancakes and Eggs': '$4.35'
    };
    const lunchMenu = {
        'Fried Chicken': '$6.50',
        'Meatloaf': '$7.25',
        'BBQ Pork': '$6.99',
        'Chicken and Dumpling': '$5.99'
    };
    const dinnerMenu = {
        'Fried Chicken': '$9.50',
        'Meatloaf': '$10.25',
        'BBQ Pork': '$9.99',
        'Chicken and Dumplings': '$8.99'
    };
    const breakfastSides = {
        'Grits': '$1.00',
        'Fresh Fruit': '$1.00',
        'Hashbrowns': '$1.50',
        'Yogurt': '$1.00'
    };
    const sidesMenu = {
        'Mashed Potatoes': '$1.25',
        'Macaroni and Cheese': '$1.25',
        'Coleslaw': '$1.00',
        'Baked Beans': '$1.00'
    };

    function menuIterater(someArray) {
        for (let key in someArray) {
            console.log(`${key}  ${someArray[key]}`);
        }
    }


    console.log("Howdy Ya'll!\nWelcome to Rob's Country Diner!\n");
    console.log("What are ya'll in the mood for today?\n");
    answer = prompt('Breakfast, Lunch or Dinner?\n');
    switch (answer.toLowerCase()) {
        case "breakfast":
            console.log("Awesome! Here is our breakfast menu.")
            menuIterater(breakfastMenu);
            breakfastItem = prompt(`What would you like from our breakfast menu today?\n`);

            switch (breakfastItem.toLowerCase()) {
                case "biscuits and gravy":
                    totalBill += 3.99;
                console.log("Excellent choice! That will be $3.99 and it comes with two sides which are listed here.");   
                    break;
                case "steak and eggs":
                    totalBill += 12.99;
                console.log("Excellent choice! That will be $12.99 and it comes with two sides which are listed here.");   
                    break;
                case "country ham and eggs":
                    totalBill += 7.25;
                console.log("Excellent choice! That will be $7.25 and it comes with two sides which are listed here.");   
                    break;
                case "pancakes and eggs":
                    totalBill += 4.35;
                console.log("Excellent choice! That will be $4.35 and it comes with two sides which are listed here.");   
                    break;
                default:
                    console.log("It looks like you did not select one of the breakfast items\n");
                break;
            }

            menuIterater(breakfastSides);
            breakfastSideItem = prompt('What would you like for your first side?\n');

            switch (breakfastSideItem.toLowerCase()) {
                case "grits":
                    totalBill += 1.00;
                    break;
                case "fresh fruit":
                    totalBill += 1.00;
                    break;
                case "hashbrowns":
                    totalBill += 1.50;
                    break;
                case "yogurt":
                    totalBill += 1.00;
                    break;
                default:
                    console.log("It looks like you did not select one of the breakfast side items\n");
            }

            breakfastSideItem1 = prompt(`I love our ${breakfastSideItem}!\nWhat would you like for your second side?\n`);

            switch (breakfastSideItem1.toLowerCase()) {
                case "grits":
                    totalBill += 1.00;
                    break;
                case "fresh fruit":
                    totalBill += 1.00;
                    break;
                case "hashbrowns":
                    totalBill += 1.50;
                    break;
                case "yogurt":
                    totalBill += 1.00;
                    break;
                default:
                    console.log("It looks like you did not select one of the breakfast side items\n");
            }
            console.log(`Perfect! The ${breakfastSideItem1} is one of my favorites!\n`);
            console.log(`So you ordered ${breakfastItem}, ${breakfastSideItem} and ${breakfastSideItem1};\nthat brings your total to $ ${totalBill}.\nI'll have that to you as soon as it's ready.`)
                
            break;
        case "lunch":
            console.log("Awesome! Here is our lunch menu.\n")
            menuIterater(lunchMenu);
            lunchItem = prompt(`What would you like from our lunch menu today?\n`);
        

            switch (lunchItem.toLowerCase()) {
                case "fried chicken":
                    totalBill += 6.50;
                console.log("Excellent choice! That will be $6.50 and it comes with two sides which are listed here.");   
                    break;
                case "meatloaf":
                    totalBill += 7.25;
                console.log("Excellent choice! That will be $7.25 and it comes with two sides which are listed here.");   
                    break;
                case "bbq pork":
                    totalBill += 6.99;
                console.log("Excellent choice! That will be $6.99 and it comes with two sides which are listed here.");   
                    break;
                case "chicken and dumplings":
                    totalBill += 5.99;
                console.log("Excellent choice! That will be $5.99 and it comes with two sides which are listed here.");
                    break;   
                default:
                console.log("It looks like you did not select one of the lunch items\n");
                    break;

            }

                menuIterater(sidesMenu);
                lunchSideItem = prompt('What would you like for your first side?\n');
            switch (lunchSideItem.toLowerCase()) {
                case "mashed potatoes":
                    totalBill += 1.25;
                    break;
                case "macaroni and cheese":
                    totalBill += 1.25;
                    break;
                case "coleslaw":
                    totalBill += 1.00;
                    break;
                case "baked beans":
                    totalBill += 1.00;
                    break;
                default:  
                    console.log("It looks like you did not select one of the lunch side items\n");
                    break;

            }
            lunchSideItem1 = prompt(`I love our ${lunchSideItem}!\nWhat would you like for your second side?`);

            switch (lunchSideItem1.toLowerCase()) {
                case "mashed potatoes":
                    totalBill += 1.25;
                    break;
                case "macaroni and cheese":
                    totalBill += 1.25;
                    break;
                case "coleslaw":
                    totalBill += 1.00;
                    break;
                case "baked beans":
                    totalBill += 1.00;
                    break;
                default:  
                    console.log("It looks like you did not select one of the lunch side items\n");


            }
            console.log(`Perfect! Our ${lunchSideItem1} is the best in town.`);
            console.log(`So you ordered ${lunchItem}, ${lunchSideItem} and ${lunchSideItem1}; that brings your total to $ ${totalBill}.\nI'll have that to you as soon as it's ready.`)
            break;
    
            case "dinner":
            console.log("Awesome! Here is our dinner menu.")
            menuIterater(dinnerMenu);
            dinnerItem = prompt(`What would you like from our dinner menu today?\n`);
                 

            switch (dinnerItem.toLowerCase()) {
                case "fried chicken":
                    totalBill += 9.50;
                console.log("Excellent choice! That will be $9.50 and it comes with two sides which are listed here.");   
                    break;
                case "meatloaf":
                    totalBill += 10.25;
                console.log("Excellent choice! That will be $10.25 and it comes with two sides which are listed here.");   
                    break;
                case "bbq pork":
                    totalBill += 9.99;
                console.log("Excellent choice! That will be $9.99 and it comes with two sides which are listed here.");   
                    break;
                case "chicken and dumplings":
                    totalBill += 8.99;
                console.log("Excellent choice! That will be $8.99 and it comes with two sides which are listed here.");   
                default:
                console.log("It looks like you did not select one of the dinner items\n");

            }

            menuIterater(sidesMenu);
            dinnerSideItem = prompt('What would you like for your first side?\n');
            switch (dinnerSideItem.toLowerCase()) {
                case "mashed potatoes":
                    totalBill += 1.25;
                    break;
                case "macaroni and cheese":
                    totalBill += 1.25;
                    break;
                case "coleslaw":
                    totalBill += 1.00;
                    break;
                case "baked beans":
                    totalBill += 1.00;
                    break;
                default:  
                    console.log("It looks like you did not select one of the dinner side items\n");

            }
            dinnerSideItem1 = prompt(`I love our ${dinnerSideItem}!\nWhat would you like for your second side?\n`);

            switch (dinnerSideItem1.toLowerCase()) {
                case "mashed potatoes":
                    totalBill += 1.25;
                    break;
                case "macaroni and cheese":
                    totalBill += 1.25;
                    break;
                case "coleslaw":
                    totalBill += 1.00;
                    break;
                case "baked beans":
                    totalBill += 1.00;
                    break;
                default:  
                    console.log("It looks like you did not select one of the dinner side items\n");

            }
            console.log(`Perfect! Our ${dinnerSideItem1} is the best in town.\n`);
            console.log(`So you ordered ${dinnerItem}, ${dinnerSideItem} and ${dinnerSideItem1};\nthat brings your total to $ ${totalBill}.\nI'll have that to you as soon as it's ready.`)
    
    }


}
dinerMenu();
