let pronoun =['the','when','last'];
let adj = ['big','king','strong'];
let noun = ['teacher','phone','ocean',];
let dominion = ['.com','.es','.io','.net'];

for (let i = 0; i < pronoun.length; i++) {
    for (let ii = 0; ii < adj.length; ii++) {
        for (let index = 0; index < noun.length; index++) {
            for (let ia = 0; ia < dominion.length; ia++) {
                console.log(pronoun[i]+adj[ii]+noun[index]+dominion[ia]); 
            }
            
        }
    
    }
    // console.log(`${pronoun[i]}${adj[i]}${noun[i]}`); 

}