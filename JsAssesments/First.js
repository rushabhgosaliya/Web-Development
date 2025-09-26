function myfunction()
{
    let customername=prompt("Enter Customer Name:")
    console.log(customername);

    let order=[];
    // let orderitems=[];
    
    let orderitems=prompt("enter order items")
    orderitems=orderitems.trim();
    order=orderitems.split(',');
    console.log(order);

//    customername.append("Hello !"+customername);

document.getElementById('customername2').innerHTML="hello! " +customername;
document.getElementById('orders').innerHTML="Your Orders:- "+order;



}