// for(var i=0; i<5; i++){
//     for(var j=1; j<=10; j++){
        
//         tens_place=i.toString()
//         if(j!=10){
//             process.stdout.write(`${tens_place}${j} `);
//         }
//         else{
//             process.stdout.write(`${i+1}0 `);
//         }
        
//     }
//     console.log();
// }

// for(var i=1; i<=10; i++){
//     for(var j=1; j<=10; j++)
//     {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log()
// }

var x=0
for(var i=1; i<6; i++){
    
    var k=i
    if(i>3){
        k=3
        x++
    }
    for(var j=0; j<k-x; j++){
        process.stdout.write('*');

    }
    console.log();
}
