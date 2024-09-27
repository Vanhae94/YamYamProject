//방법1
function a() {
    for( let i=2; i<10; i++ ){
        for(let j =1; j<10; j++) {
        console.log( i + "X" + j + "=" + i*j);

        }
    }
}

//방법2
const b = function() {
    for( let i=2; i<10; i++ ){
        for(let j =1; j<10; j++) {
        console.log( i + "X" + j + "=" + i*j);

        }
    }
}
b();

//방법3
const c = () => {
    for( let i=2; i<10; i++ ){
        for(let j =1; j<10; j++) {
        console.log( i + "X" + j + "=" + i*j);

        }
    }
};
c();